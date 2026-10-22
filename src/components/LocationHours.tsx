import React, { useState } from 'react';
import { GYM_DATA } from '../data/gymData';
import {
  MapPin,
  Clock,
  Phone,
  Copy,
  Check,
  ExternalLink,
  Navigation,
  Car,
  Droplets,
  Lock,
} from 'lucide-react';
import { LiveStatus } from './LiveStatus';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const LocationHours: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(GYM_DATA.address.formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-20 lg:py-28 border-b border-[rgba(30,29,27,0.08)] bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.05} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-[#8D3B24]">
              <span className="font-semibold">Wayfinding & Access</span>
              <span className="text-[#1E1D1B]/30" aria-hidden="true">·</span>
              <span>Parshuram Choraha, Udaipur</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1D1B] tracking-tight font-medium">
              Where to find us & when we train.
            </h2>
          </div>
          <p className="text-sm text-[#5C5852] max-w-md leading-relaxed">
            Conveniently situated at Plot 4, C Block near Parshuram Choraha with dedicated
            on-site parking and split shift hours crafted for Udaipur’s professional rhythm.
          </p>
        </ScrollReveal>

        {/* 2-Column Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Hours & Schedule Table (6 cols) */}
          <ScrollReveal direction="up" delay={0.1} className="lg:col-span-6 space-y-6">
            {/* Live Facility Badge */}
            <div className="p-5 rounded-lg bg-[#FBF8F3] border border-[rgba(30,29,27,0.08)] shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase font-semibold tracking-wider text-[#8D3B24]">
                  Live Facility Telemetry
                </span>
                <span className="text-[11px] font-mono text-[#5C5852]">Indian Standard Time</span>
              </div>
              <LiveStatus />
            </div>

            {/* Structured Shift Schedule */}
            <div className="p-8 rounded-lg bg-[#FBF8F3] border border-[rgba(30,29,27,0.08)] shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[rgba(30,29,27,0.06)]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#BC5A36]" />
                  <h3 className="font-serif text-xl font-medium text-[#1E1D1B]">
                    Operational Shift Timings
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#5C5852]">2 Shifts / Day</span>
              </div>

              <div className="space-y-4">
                {/* Mon - Fri */}
                <div className="p-4 rounded bg-[#FAF6F0] border border-[rgba(30,29,27,0.06)]">
                  <div className="flex items-center justify-between font-serif font-medium text-[#1E1D1B] mb-2">
                    <span>Monday to Friday</span>
                    <span className="text-xs font-sans font-semibold text-[#525D45]">Full Access</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs text-[#5C5852] font-mono tabular-nums">
                    <div>
                      <span className="block text-[11px] font-sans text-[#8D3B24]">Morning Shift</span>
                      <span className="font-semibold text-[#1E1D1B]">06:00 AM – 12:00 PM</span>
                    </div>
                    <div>
                      <span className="block text-[11px] font-sans text-[#8D3B24]">Evening Shift</span>
                      <span className="font-semibold text-[#1E1D1B]">03:00 PM – 09:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Saturday */}
                <div className="p-4 rounded bg-[#FAF6F0] border border-[rgba(30,29,27,0.06)]">
                  <div className="flex items-center justify-between font-serif font-medium text-[#1E1D1B] mb-2">
                    <span>Saturday</span>
                    <span className="text-xs font-sans font-semibold text-[#BC5A36]">Weekend Hours</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs text-[#5C5852] font-mono tabular-nums">
                    <div>
                      <span className="block text-[11px] font-sans text-[#8D3B24]">Morning Shift</span>
                      <span className="font-semibold text-[#1E1D1B]">06:00 AM – 10:00 AM</span>
                    </div>
                    <div>
                      <span className="block text-[11px] font-sans text-[#8D3B24]">Evening Shift</span>
                      <span className="font-semibold text-[#1E1D1B]">03:00 PM – 07:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Sunday */}
                <div className="p-4 rounded bg-[#FAF6F0] border border-[rgba(30,29,27,0.06)] flex items-center justify-between text-xs">
                  <div>
                    <span className="font-serif font-medium text-[#1E1D1B] block">Sunday</span>
                    <span className="text-[#5C5852]">Facility sanitisation, air cycling & systemic rest</span>
                  </div>
                  <span className="text-xs font-mono font-medium text-[#BC5A36] bg-[#F4EFE6] px-2.5 py-1 rounded">
                    Closed
                  </span>
                </div>
              </div>

              {/* Transit & On-site Amenities Note */}
              <div className="pt-4 border-t border-[rgba(30,29,27,0.06)] grid grid-cols-3 gap-3 text-center text-xs text-[#5C5852]">
                <div className="p-2.5 rounded bg-[#FAF6F0]">
                  <Car className="w-4 h-4 mx-auto mb-1 text-[#525D45]" />
                  <span className="block font-medium text-[#1E1D1B]">On-site Parking</span>
                  <span className="text-[10px]">Two-wheeler & Car</span>
                </div>
                <div className="p-2.5 rounded bg-[#FAF6F0]">
                  <Droplets className="w-4 h-4 mx-auto mb-1 text-[#BC5A36]" />
                  <span className="block font-medium text-[#1E1D1B]">Chilled RO Water</span>
                  <span className="text-[10px]">Continuous Refill</span>
                </div>
                <div className="p-2.5 rounded bg-[#FAF6F0]">
                  <Lock className="w-4 h-4 mx-auto mb-1 text-[#8D3B24]" />
                  <span className="block font-medium text-[#1E1D1B]">Secure Lockers</span>
                  <span className="text-[10px]">Free for Members</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Address, Interactive Map & Direct Actions (6 cols) */}
          <ScrollReveal direction="left" delay={0.15} className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-lg bg-[#FBF8F3] border border-[rgba(30,29,27,0.08)] shadow-sm space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#8D3B24] uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Exact Physical Address</span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#1E1D1B]">
                  {GYM_DATA.name} Gym Udaipur
                </h3>
                <p className="text-sm text-[#3E3A35] mt-2 leading-relaxed">
                  {GYM_DATA.address.plot}, {GYM_DATA.address.block}, {GYM_DATA.address.landmark}, {GYM_DATA.address.locality}, {GYM_DATA.address.city}, {GYM_DATA.address.state} — {GYM_DATA.address.pincode}
                </p>
              </div>

              {/* Action Buttons for Directions & Copy */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={GYM_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#FBF8F3] bg-[#BC5A36] hover:bg-[#A84E2E] rounded transition-colors shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#1E1D1B] bg-[#F4EFE6] hover:bg-[#ECE4D4] border border-[rgba(30,29,27,0.08)] rounded transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#525D45]" />
                      <span>Address Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#8D3B24]" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`tel:${GYM_DATA.phoneClean}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#1E1D1B] bg-[#F4EFE6] hover:bg-[#ECE4D4] border border-[rgba(30,29,27,0.08)] rounded transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#525D45]" />
                  <span>{GYM_DATA.phone}</span>
                </a>
              </div>

              {/* Architectural Warm Sandstone Stylized Map Canvas */}
              <div className="relative w-full h-[260px] sm:h-[300px] rounded-md overflow-hidden border border-[rgba(30,29,27,0.08)] bg-[#EBE3D3] flex flex-col justify-between p-6">
                {/* SVG City Street Grid Illustration representing Parshuram Choraha & Sector 8 */}
                <svg className="absolute inset-0 w-full h-full opacity-35 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0 120 Q 150 140 400 110 T 800 130" stroke="#8D3B24" strokeWidth="8" fill="none" opacity="0.4" />
                  <path d="M 180 0 L 190 400" stroke="#8D3B24" strokeWidth="6" fill="none" opacity="0.3" />
                  <path d="M 0 60 L 600 60" stroke="#525D45" strokeWidth="3" fill="none" opacity="0.25" />
                  <path d="M 0 200 L 600 200" stroke="#525D45" strokeWidth="3" fill="none" opacity="0.25" />
                  <path d="M 320 0 L 320 400" stroke="#525D45" strokeWidth="4" fill="none" opacity="0.25" />
                  <circle cx="185" cy="125" r="28" fill="#BC5A36" fillOpacity="0.15" stroke="#BC5A36" strokeWidth="1" strokeDasharray="3 3" />
                </svg>

                {/* Map Pins and Landmark Labels */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#5C5852]">
                  <span>Parshuram Choraha Junction</span>
                  <span>Sector 8 Axis</span>
                </div>

                {/* Focal Pin Card for Core Fitness */}
                <div className="relative z-10 mx-auto p-4 rounded bg-[#FBF8F3]/95 backdrop-blur-md border border-[#BC5A36]/40 shadow-lg text-center max-w-xs">
                  <div className="w-8 h-8 rounded-full bg-[#BC5A36] text-[#FBF8F3] mx-auto flex items-center justify-center mb-2 shadow">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif font-semibold text-sm text-[#1E1D1B]">
                    Core Fitness Gym
                  </h4>
                  <p className="text-[11px] text-[#5C5852] mt-0.5">
                    Plot 4, C Block, Parshuram Choraha
                  </p>
                  <span className="inline-block mt-2 font-mono text-[10px] text-[#8D3B24] bg-[#F2ECE1] px-2 py-0.5 rounded">
                    GPS: 24.5610° N, 73.7113° E
                  </span>
                </div>

                <div className="relative z-10 flex items-center justify-between text-[11px] text-[#5C5852]">
                  <span>Near Central Area, Udaipur</span>
                  <a
                    href={GYM_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#BC5A36] hover:underline flex items-center gap-1 font-medium"
                  >
                    Launch Interactive Directions <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Wayfinding landmarks */}
              <div className="space-y-2 text-xs text-[#5C5852]">
                <span className="font-semibold text-[#1E1D1B] block">Driving / Walking Arrival Notes:</span>
                <p>
                  • From Parshuram Choraha: Proceed directly toward C Block; Plot No. 4 is easily identified on the ground floor with exterior signage.
                </p>
                <p>
                  • Parking: Designated parking spots are available directly facing the facility entrance for scooters, motorcycles, and member cars.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
