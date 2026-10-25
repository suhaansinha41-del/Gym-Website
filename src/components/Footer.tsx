import React from 'react';
import { gymConfig, getWhatsAppLink } from '../data/gymConfig';
import { MapPin, Phone, MessageSquare, Instagram, Clock, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0F10] text-[#A7A9AC] border-t border-white/10 pt-16 pb-28 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="inline-block focus:outline-none">
              <span className="font-headline text-3xl font-extrabold tracking-tighter text-[#F5F5F5]">
                NOIR<span className="text-[#D71920]">.</span>FIT
              </span>
            </a>
            <div className="font-mono text-xs text-[#A7A9AC] uppercase tracking-widest">
              RANCHI, JHARKHAND // EST. {gymConfig.brand.established}
            </div>
            <p className="text-xs sm:text-sm text-[#A7A9AC] leading-relaxed max-w-sm">
              {gymConfig.brand.subTagline} Designed for serious progress, healthy posture, and long-term vitality.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#17191C] border border-white/10 hover:border-[#D71920] hover:text-[#D71920] text-[#A7A9AC] transition-colors"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`tel:${gymConfig.brand.phone}`}
                className="p-2.5 rounded-lg bg-[#17191C] border border-white/10 hover:border-[#D71920] hover:text-[#D71920] text-[#A7A9AC] transition-colors"
                title="Call Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#17191C] border border-white/10 hover:border-[#D71920] hover:text-[#D71920] text-[#A7A9AC] transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={gymConfig.brand.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#17191C] border border-white/10 hover:border-[#D71920] hover:text-[#D71920] text-[#A7A9AC] transition-colors"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-[#F5F5F5] font-semibold">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#why-us" className="hover:text-[#D71920] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#goal-selector" className="hover:text-[#D71920] transition-colors">
                  Interactive Goal Selector
                </a>
              </li>
              <li>
                <a href="#facility" className="hover:text-[#D71920] transition-colors">
                  Facility Tour & Bento
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-[#D71920] transition-colors">
                  Training Programs
                </a>
              </li>
              <li>
                <a href="#body-explorer" className="hover:text-[#D71920] transition-colors">
                  Muscle Anatomy Guide
                </a>
              </li>
              <li>
                <a href="#bmi-calculator" className="hover:text-[#D71920] transition-colors">
                  BMI & Calorie Tool
                </a>
              </li>
              <li>
                <a href="#membership" className="hover:text-[#D71920] transition-colors">
                  Membership Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Address */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <div className="font-mono text-xs uppercase tracking-wider text-[#F5F5F5] font-semibold">
              HOURS & LOCATION
            </div>
            <div className="space-y-1 text-[#A7A9AC]">
              <div className="flex items-center gap-1.5 text-[#F5F5F5]">
                <Clock className="w-3.5 h-3.5 text-[#D71920]" />
                <span className="font-semibold">Mon – Sat:</span> 5:30 AM – 10:30 PM
              </div>
              <div className="pl-5 text-[#777B80]">
                <span>Sunday:</span> 7:00 AM – 1:00 PM
              </div>
            </div>

            <div className="pt-2 text-[#A7A9AC] leading-relaxed">
              <div className="flex items-start gap-1.5 text-[#F5F5F5]">
                <MapPin className="w-3.5 h-3.5 text-[#D71920] shrink-0 mt-0.5" />
                <span>{gymConfig.brand.address}, {gymConfig.brand.landmark}, {gymConfig.brand.city}, {gymConfig.brand.state}</span>
              </div>
            </div>

            <div className="pt-1 font-mono text-[11px] text-[#A7A9AC]">
              Direct Phone: {gymConfig.brand.phoneDisplay}
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#777B80]">
          <div>
            © {new Date().getFullYear()} {gymConfig.brand.name}. Demo portfolio showcase for Indian gym businesses.
          </div>

          <div className="text-center sm:text-right max-w-md italic text-[11px]">
            Disclaimer: Fitness results vary based on individual effort, nutrition, consistency and lifestyle.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded bg-[#17191C] hover:bg-[#1C1F22] text-[#A7A9AC] hover:text-[#D71920] transition-colors cursor-pointer flex items-center gap-1"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
