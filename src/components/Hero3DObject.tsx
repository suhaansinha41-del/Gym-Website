import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

type FitnessObjectType = 'dumbbell' | 'plate' | 'kettlebell';

interface Hero3DObjectProps {
  className?: string;
  isBackground?: boolean;
}

export const Hero3DObject: React.FC<Hero3DObjectProps> = ({
  className = '',
  isBackground = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [objectType, setObjectType] = useState<FitnessObjectType>('dumbbell');
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const objectGroupRef = useRef<THREE.Group | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const mousePos = useRef({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    isDragging: false,
    prevX: 0,
    prevY: 0,
  });

  // WebGL support test
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (gl) {
        setHasWebGL(true);
      } else {
        console.warn('3D Hero Fallback Active (WebGL probe failed)');
        setHasWebGL(false);
      }
    } catch {
      console.warn('3D Hero Fallback Active (WebGL error)');
      setHasWebGL(false);
    }
  }, []);

  // Main Three.js Scene Setup
  useEffect(() => {
    if (hasWebGL !== true || !containerRef.current) return;

    const container = containerRef.current;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 750;

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer;

    try {
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      // Camera positioned straight-on with responsive field of view
      const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
      camera.position.set(0, 0, 8.2);

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;

      container.innerHTML = '';
      container.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Studio Lighting with Strong Athletic Crimson/Red Rim
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
      scene.add(ambientLight);

      // Key light - crisp white metallic studio light
      const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
      keyLight.position.set(4, 5, 6);
      scene.add(keyLight);

      // Fill light - cool charcoal shadow light
      const fillLight = new THREE.DirectionalLight(0x555555, 1.0);
      fillLight.position.set(-6, -2, 4);
      scene.add(fillLight);

      // Athletic Crimson Rim Light (#D71920)
      const rimLight = new THREE.DirectionalLight(0xd71920, 4.0);
      rimLight.position.set(-4, 3, -3);
      scene.add(rimLight);

      // Warm athletic top specular
      const topRim = new THREE.DirectionalLight(0xff4444, 2.0);
      topRim.position.set(2, 5, -2);
      scene.add(topRim);

      // Atmospheric floating micro-particles (gym chalk/metallic specks)
      const particleCount = 140;
      const particleGeo = new THREE.BufferGeometry();
      const particlePositions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 3) {
        particlePositions[i] = (Math.random() - 0.5) * 14;
        particlePositions[i + 1] = (Math.random() - 0.5) * 10;
        particlePositions[i + 2] = (Math.random() - 0.5) * 8;
      }
      particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
      const particleMat = new THREE.PointsMaterial({
        color: 0xd71920,
        size: 0.04,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending,
      });
      const particles = new THREE.Points(particleGeo, particleMat);
      scene.add(particles);

      // Group holding the fitness equipment
      // Centered precisely around the headline area:
      // Base X position: center to slightly right of the headline text
      const objectGroup = new THREE.Group();
      
      const computeBaseX = (w: number) => {
        if (w >= 1280) return 0.5; // Desktop: intersects right side of "BUILD YOUR" and spans behind "BEST SELF"
        if (w >= 768) return 0.2;  // Tablet: centered slightly to right
        return 0.0;               // Mobile: centered directly behind stacked text
      };

      const computeScale = (w: number) => {
        if (w >= 1280) return 1.15; // Heroic, prominent presence behind words
        if (w >= 768) return 0.95;
        return 0.78;
      };

      let currentBaseX = computeBaseX(width);
      const initialScale = computeScale(width);
      objectGroup.scale.set(initialScale, initialScale, initialScale);
      objectGroup.position.set(currentBaseX, 0, 0);
      scene.add(objectGroup);
      objectGroupRef.current = objectGroup;

      buildFitnessObject(objectType, objectGroup);
      console.log('3D Hero Loaded');

      // Subtle mouse interaction - gentle parallax behind typography
      const onPointerMove = (e: MouseEvent | TouchEvent) => {
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

        const rect = container.getBoundingClientRect();
        const normX = ((clientX - rect.left) / rect.width - 0.5) * 2;
        const normY = ((clientY - rect.top) / rect.height - 0.5) * 2;
        mousePos.current.targetX = normX * 0.3;
        mousePos.current.targetY = normY * 0.2;
      };

      window.addEventListener('mousemove', onPointerMove, { passive: true });
      window.addEventListener('touchmove', onPointerMove, { passive: true });

      // Resize listener
      const onResize = () => {
        if (!container || !renderer) return;
        width = container.clientWidth;
        height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);

        currentBaseX = computeBaseX(width);
        const s = computeScale(width);
        if (objectGroupRef.current) {
          objectGroupRef.current.scale.set(s, s, s);
        }
      };
      window.addEventListener('resize', onResize);

      // Animation Loop - Slow, heavy, cinematic rotation in place behind headline
      const clock = new THREE.Clock();
      const render = () => {
        animationFrameId = requestAnimationFrame(render);
        const delta = clock.getDelta();
        const elapsed = clock.getElapsedTime();

        // Slow particle drift
        particles.rotation.y = elapsed * 0.02;
        particles.rotation.x = elapsed * 0.01;

        if (objectGroupRef.current) {
          // Slow cinematic 3D rotation behind the typography
          objectGroupRef.current.rotation.y += delta * 0.22;
          objectGroupRef.current.rotation.z = Math.sin(elapsed * 0.45) * 0.035;

          // Gentle lerp responding to mouse position without straying from headline zone
          mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.035;
          mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.035;

          objectGroupRef.current.position.x = currentBaseX + mousePos.current.x * 0.35;
          objectGroupRef.current.position.y = -mousePos.current.y * 0.2 + Math.sin(elapsed * 1.0) * 0.04;
        }

        renderer.render(scene, camera);
      };
      render();

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('mousemove', onPointerMove);
        window.removeEventListener('touchmove', onPointerMove);
        window.removeEventListener('resize', onResize);
        if (renderer && renderer.domElement) {
          renderer.dispose();
          if (container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement);
          }
        }
      };
    } catch (err) {
      console.warn('3D Hero Fallback Active:', err);
      setHasWebGL(false);
    }
  }, [hasWebGL]);

  // Handle switching object type dynamically
  useEffect(() => {
    if (objectGroupRef.current) {
      buildFitnessObject(objectType, objectGroupRef.current);
    }
  }, [objectType]);

  // Procedural 3D model generator for Fitness Equipment with Athletic Red accents
  function buildFitnessObject(type: FitnessObjectType, group: THREE.Group) {
    while (group.children.length > 0) {
      const child = group.children[0];
      group.remove(child);
      if (child instanceof THREE.Mesh) {
        if (child.geometry) child.geometry.dispose();
        if (Array.isArray(child.material)) {
          child.material.forEach((m) => m.dispose());
        } else if (child.material) {
          child.material.dispose();
        }
      }
    }

    // Material 1: Brushed Chrome Steel (Bar & Heavy Shaft)
    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0xdcdcdc,
      metalness: 0.95,
      roughness: 0.18,
    });

    // Material 2: Heavy Dark Cast Iron / Urethane (Deep graphite)
    const matteIronMaterial = new THREE.MeshStandardMaterial({
      color: 0x1c1f22,
      metalness: 0.6,
      roughness: 0.55,
    });

    // Material 3: Athletic Red / Crimson Accent Material (#D71920)
    const redAccentMaterial = new THREE.MeshStandardMaterial({
      color: 0xd71920,
      metalness: 0.8,
      roughness: 0.28,
      emissive: 0xd71920,
      emissiveIntensity: 0.35,
    });

    if (type === 'dumbbell') {
      // Large heavy knurled steel handle
      const handleGeo = new THREE.CylinderGeometry(0.22, 0.22, 3.4, 32);
      const handleMesh = new THREE.Mesh(handleGeo, chromeMaterial);
      handleMesh.rotation.z = Math.PI / 2;
      group.add(handleMesh);

      // Knurling Grip Accents with Red Anodized Rings
      for (let i = -1.0; i <= 1.0; i += 0.32) {
        const ringGeo = new THREE.TorusGeometry(0.223, 0.012, 16, 32);
        const ringMesh = new THREE.Mesh(ringGeo, redAccentMaterial);
        ringMesh.position.x = i;
        ringMesh.rotation.y = Math.PI / 2;
        group.add(ringMesh);
      }

      // Left & Right Hexagonal Weight Plates
      const plateConfigs = [
        { x: -1.85, radius: 1.25, thickness: 0.48 },
        { x: -2.35, radius: 1.12, thickness: 0.42 },
        { x: 1.85, radius: 1.25, thickness: 0.48 },
        { x: 2.35, radius: 1.12, thickness: 0.42 },
      ];

      plateConfigs.forEach((cfg) => {
        const plateGeo = new THREE.CylinderGeometry(cfg.radius, cfg.radius, cfg.thickness, 8);
        const plateMesh = new THREE.Mesh(plateGeo, matteIronMaterial);
        plateMesh.rotation.z = Math.PI / 2;
        plateMesh.position.x = cfg.x;
        group.add(plateMesh);

        // Athletic Red Inner Bevel Ring
        const bevelGeo = new THREE.TorusGeometry(cfg.radius * 0.72, 0.03, 16, 32);
        const bevelMesh = new THREE.Mesh(bevelGeo, redAccentMaterial);
        bevelMesh.rotation.y = Math.PI / 2;
        bevelMesh.position.x = cfg.x + (cfg.x > 0 ? cfg.thickness / 2 + 0.01 : -cfg.thickness / 2 - 0.01);
        group.add(bevelMesh);
      });

      // Chrome Collars
      [-2.62, 2.62].forEach((xPos) => {
        const capGeo = new THREE.CylinderGeometry(0.52, 0.52, 0.12, 32);
        const capMesh = new THREE.Mesh(capGeo, chromeMaterial);
        capMesh.rotation.z = Math.PI / 2;
        capMesh.position.x = xPos;
        group.add(capMesh);
      });

      group.rotation.x = 0.28;
      group.rotation.y = 0.52;
    } else if (type === 'plate') {
      // Olympic Competition Bumper Plate (25 KG)
      const outerDiscGeo = new THREE.CylinderGeometry(2.4, 2.4, 0.45, 48);
      const outerDisc = new THREE.Mesh(outerDiscGeo, matteIronMaterial);
      group.add(outerDisc);

      const recessGeo = new THREE.CylinderGeometry(1.8, 1.8, 0.48, 48);
      const recessMesh = new THREE.Mesh(recessGeo, matteIronMaterial);
      group.add(recessMesh);

      // Red Calibration Rim Ring
      const outerRimGeo = new THREE.TorusGeometry(2.36, 0.05, 16, 64);
      const outerRim = new THREE.Mesh(outerRimGeo, redAccentMaterial);
      outerRim.rotation.x = Math.PI / 2;
      group.add(outerRim);

      // Chrome Center Hub
      const centerHubGeo = new THREE.CylinderGeometry(0.68, 0.68, 0.52, 36);
      const centerHub = new THREE.Mesh(centerHubGeo, chromeMaterial);
      group.add(centerHub);

      const boreGeo = new THREE.CylinderGeometry(0.34, 0.34, 0.54, 36);
      const boreMesh = new THREE.Mesh(boreGeo, new THREE.MeshBasicMaterial({ color: 0x050505 }));
      group.add(boreMesh);

      group.rotation.x = 1.05;
      group.rotation.y = 0.32;
    } else if (type === 'kettlebell') {
      // Cast Iron Kettlebell
      const sphereGeo = new THREE.SphereGeometry(1.6, 36, 36);
      sphereGeo.scale(1, 0.95, 1);
      const body = new THREE.Mesh(sphereGeo, matteIronMaterial);
      body.position.y = -0.35;
      group.add(body);

      const handleGeo = new THREE.TorusGeometry(0.95, 0.17, 24, 36, Math.PI);
      const handle = new THREE.Mesh(handleGeo, chromeMaterial);
      handle.position.y = 1.1;
      group.add(handle);

      const bandGeo = new THREE.TorusGeometry(0.94, 0.035, 16, 48, Math.PI);
      const band = new THREE.Mesh(bandGeo, redAccentMaterial);
      band.position.y = 1.1;
      group.add(band);

      group.rotation.x = 0.2;
      group.rotation.y = 0.38;
    }
  }

  return (
    <div
      className={`select-none overflow-hidden ${
        isBackground ? 'absolute inset-0 w-full h-full pointer-events-none z-1' : 'w-full h-full'
      } ${className}`}
    >
      {/* Background ambient radial glow in athletic red */}
      <div className="absolute inset-0 bg-radial from-[#D71920]/15 via-transparent to-[#111315]/90 pointer-events-none" />

      {/* 3D WebGL Canvas Container: Subdued cinematic depth behind foreground text */}
      {hasWebGL !== false ? (
        <div
          ref={containerRef}
          className="w-full h-full relative opacity-70 transition-opacity duration-700 filter drop-shadow-[0_10px_35px_rgba(215,25,32,0.25)]"
          style={{ touchAction: 'none' }}
        />
      ) : (
        /* Multi-Tier Fallback if WebGL unavailable */
        <div className="w-full h-full flex flex-col items-center justify-center relative px-6 opacity-35">
          <div className="relative w-80 h-80 flex items-center justify-center">
            <div className="absolute inset-0 border border-[#D71920]/20 rounded-full animate-spin [animation-duration:30s]" />
            <svg
              viewBox="0 0 240 240"
              className="w-64 h-64 drop-shadow-[0_20px_40px_rgba(215,25,32,0.3)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="75" y="112" width="90" height="16" rx="4" fill="#C8C8C8" />
              <rect x="52" y="70" width="22" height="100" rx="6" fill="#1C1F22" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
              <rect x="34" y="80" width="16" height="80" rx="5" fill="#1C1F22" stroke="#D71920" strokeWidth="1" />
              <rect x="166" y="70" width="22" height="100" rx="6" fill="#1C1F22" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
              <rect x="190" y="80" width="16" height="80" rx="5" fill="#1C1F22" stroke="#D71920" strokeWidth="1" />
            </svg>
          </div>
        </div>
      )}

      {/* Equipment Selector Floating Badge (Discreet at bottom-right) */}
      <div className="absolute bottom-6 right-6 z-20 hidden md:flex items-center gap-1.5 p-1 bg-[#17191C]/90 backdrop-blur-md rounded-xl border border-white/10 shadow-xl pointer-events-auto">
        <span className="font-mono text-[9px] uppercase tracking-wider text-[#777B80] px-2">
          3D MODEL:
        </span>
        {(['dumbbell', 'plate', 'kettlebell'] as FitnessObjectType[]).map((type) => {
          const isActive = objectType === type;
          const labels: Record<FitnessObjectType, string> = {
            dumbbell: 'Dumbbell',
            plate: 'Olympic Plate',
            kettlebell: 'Kettlebell',
          };
          return (
            <button
              key={type}
              onClick={(e) => {
                e.stopPropagation();
                setObjectType(type);
              }}
              className={`px-3 py-1 text-[10px] font-mono tracking-wider uppercase transition-all duration-200 rounded-lg whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-[#D71920] text-white font-bold shadow-md'
                  : 'text-[#A7A9AC] hover:text-[#F5F5F5] hover:bg-white/5'
              }`}
              data-cursor="click"
            >
              {labels[type]}
            </button>
          );
        })}
      </div>
    </div>
  );
};
