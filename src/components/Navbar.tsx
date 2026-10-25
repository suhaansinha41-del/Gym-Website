import React, { useState, useEffect } from 'react';
import { gymConfig, getWhatsAppLink } from '../data/gymConfig';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenBookingModal: (preselectedGoal?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Why Us', href: '#why-us' },
    { label: 'Programs', href: '#programs' },
    { label: 'Facility', href: '#facility' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Results', href: '#results' },
    { label: 'Membership', href: '#membership' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#111315]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="group flex items-baseline gap-1.5 focus:outline-none"
            aria-label="NOIR.FIT Home"
          >
            <span className="font-headline text-2xl sm:text-3xl font-extrabold tracking-tighter text-[#F5F5F5] group-hover:text-white transition-colors">
              NOIR<span className="text-[#D71920]">.</span>FIT
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#A7A9AC] hidden sm:inline-block">
              RANCHI
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#A7A9AC]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-cursor="click"
                className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D71920] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="click"
              className="px-3.5 py-2 text-xs font-mono tracking-wider uppercase text-[#A7A9AC] hover:text-[#F5F5F5] hover:bg-white/5 rounded-lg border border-white/10 hover:border-[#D71920]/40 transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D71920]" />
            </a>

            <button
              onClick={() => onOpenBookingModal()}
              data-cursor="click"
              className="px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-white bg-[#D71920] hover:bg-[#FF2525] rounded-lg transition-all shadow-[0_0_20px_rgba(215,25,32,0.35)] hover:shadow-[0_0_28px_rgba(215,25,32,0.55)] cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              Book a Free Visit →
            </button>
          </div>

          {/* Mobile Hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F5F5F5] hover:text-[#D71920] focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-35 bg-[#111315]/95 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-28 lg:hidden animate-in fade-in duration-200">
          <div className="space-y-4">
            <div className="font-mono text-xs uppercase tracking-widest text-[#A7A9AC] mb-3">
              Explore NOIR.FIT Ranchi
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-2xl font-headline font-bold text-[#F5F5F5] hover:text-[#D71920] py-2 border-b border-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between text-xs text-[#A7A9AC] font-mono mb-2">
              <span>LALPUR, RANCHI</span>
              <span>MON–SAT 5:30AM–10:30PM</span>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-3.5 text-center font-bold text-sm tracking-wider uppercase text-white bg-[#D71920] hover:bg-[#FF2525] rounded-xl cursor-pointer shadow-[0_0_25px_rgba(215,25,32,0.4)]"
            >
              Book a Free Visit →
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 text-center font-mono text-xs uppercase text-[#F5F5F5] bg-[#17191C] hover:bg-[#1C1F22] rounded-xl border border-white/10 flex items-center justify-center gap-1.5"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D71920]" />
              </a>

              <a
                href={`tel:${gymConfig.brand.phone}`}
                className="py-3 text-center font-mono text-xs uppercase text-[#F5F5F5] bg-[#17191C] hover:bg-[#1C1F22] rounded-xl border border-white/10 flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#D71920]" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
