import React from 'react';
import { gymConfig, getWhatsAppLink } from '../data/gymConfig';
import { GymImage } from './GymImage';
import { MapPin, Clock, Phone, MessageSquare, Navigation, ShieldCheck } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 lg:py-28 bg-[#0D0F10] relative border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="font-mono text-xs uppercase tracking-widest text-[#A7A9AC]">
            CENTRAL RANCHI HUB · LALPUR
          </div>
          <h2 className="font-headline text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F5]">
            YOUR GYM. <br />
            YOUR CITY. <br />
            <span className="text-[#A7A9AC]">YOUR COMMUNITY.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A7A9AC]">
            Located on Circular Road in Lalpur, Ranchi. Easily accessible with dedicated two-wheeler and four-wheeler parking.
          </p>
        </div>

        {/* Location & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Cards, Facility Photo & Timings */}
          <div className="lg:col-span-5 space-y-5">
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#17191C] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs uppercase text-[#A7A9AC]">
                <MapPin className="w-4 h-4 text-[#D71920]" />
                <span>FACILITY LOCATION</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-headline text-xl font-bold text-[#F5F5F5]">
                  {gymConfig.brand.address}
                </h3>
                <p className="text-sm text-[#A7A9AC]">
                  {gymConfig.brand.landmark}
                </p>
                <div className="font-mono text-xs text-[#777B80] pt-1">
                  {gymConfig.brand.city}, {gymConfig.brand.state}
                </div>
              </div>
            </div>

            {/* Timings Card */}
            <div className="p-6 rounded-2xl bg-[#17191C] border border-white/10 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase text-[#A7A9AC]">
                <Clock className="w-4 h-4 text-[#D71920]" />
                <span>OPENING HOURS</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-sm text-[#F5F5F5] font-semibold">
                    {gymConfig.timings.weekdays}
                  </span>
                  <span className="font-mono text-xs text-[#A7A9AC]">
                    {gymConfig.timings.weekdaysSlots}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#F5F5F5] font-semibold">
                    {gymConfig.timings.sunday}
                  </span>
                  <span className="font-mono text-xs text-[#777B80]">
                    {gymConfig.timings.sundaySlots}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Contact Links */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${gymConfig.brand.phone}`}
                className="p-4 rounded-xl bg-[#1C1F22] border border-white/10 hover:border-[#D71920]/40 transition-all flex items-center gap-3 text-xs text-[#F5F5F5]"
                data-cursor="click"
              >
                <Phone className="w-4 h-4 text-[#D71920]" />
                <div>
                  <span className="block text-[10px] font-mono text-[#777B80] uppercase">CALL US</span>
                  <span className="font-bold">{gymConfig.brand.phoneDisplay}</span>
                </div>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#1C1F22] border border-white/10 hover:border-[#D71920]/40 transition-all flex items-center gap-3 text-xs text-[#F5F5F5]"
                data-cursor="click"
              >
                <MessageSquare className="w-4 h-4 text-[#D71920]" />
                <div>
                  <span className="block text-[10px] font-mono text-[#777B80] uppercase">WHATSAPP</span>
                  <span className="font-bold">Chat Now</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Map & Facility Front */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#17191C] border border-white/10 relative overflow-hidden shadow-2xl min-h-[400px]">
            {/* Background facility photography with B&W -> Color hover */}
            <div className="absolute inset-0 opacity-25 hover:opacity-40 transition-opacity duration-700">
              <GymImage
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
                alt="NOIR.FIT facility in Lalpur Ranchi"
                containerClassName="w-full h-full"
                className="w-full h-full"
                overlayGradient={true}
              />
            </div>

            <div className="relative z-10 flex justify-between items-start">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#F5F5F5] bg-[#111315]/85 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#D71920] animate-pulse" />
                <span>GPS: 23.3670° N, 85.3300° E (LALPUR, RANCHI)</span>
              </div>
            </div>

            {/* Central Pin Callout */}
            <div className="relative z-10 my-auto text-center space-y-3 py-8">
              <div className="w-16 h-16 rounded-full bg-[#D71920]/10 border border-[#D71920] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(215,25,32,0.3)] animate-bounce [animation-duration:3s]">
                <MapPin className="w-8 h-8 text-[#D71920]" />
              </div>
              <div>
                <h4 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#F5F5F5]">
                  {gymConfig.brand.name} RANCHI
                </h4>
                <p className="text-xs font-mono text-[#A7A9AC] mt-1 font-semibold">
                  Circular Road, Lalpur (Opposite Nucleus Mall Road)
                </p>
              </div>
            </div>

            {/* Bottom Map CTAs */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A7A9AC]">
                <ShieldCheck className="w-4 h-4 text-[#D71920]" />
                <span>Dedicated member parking & elevator access</span>
              </div>

              <a
                href={gymConfig.brand.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#D71920] text-white hover:bg-[#FF2525] flex items-center gap-2 transition-all cursor-pointer shadow-[0_0_20px_rgba(215,25,32,0.3)]"
                data-cursor="click"
              >
                <Navigation className="w-4 h-4 text-white" />
                <span>GET DIRECTIONS →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
