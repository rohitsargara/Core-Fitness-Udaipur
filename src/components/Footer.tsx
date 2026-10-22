import React from 'react';
import { GYM_DATA } from '../data/gymData';
import { MapPin, Phone, ExternalLink, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E1D1B] text-[#FBF8F3] pt-16 pb-12 border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-[rgba(255,255,255,0.08)]">
          {/* Brand & Provenance (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#"
              className="font-serif text-3xl font-medium tracking-tight text-[#FBF8F3] block hover:text-[#D9734D] transition-colors"
            >
              Core Fitness
            </a>
            <p className="text-xs text-[#A8A29A] leading-relaxed max-w-sm">
              A refined strength training, CrossFit, and combat sports facility located at
              Parshuram Choraha, Sector 8, Udaipur. Built for purposeful physical practice.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#BC5A36] font-mono">
              <span>Google Maps Verified Facility</span>
              <span className="opacity-40" aria-hidden="true">·</span>
              <span>4.8★ (88+ Reviews)</span>
            </div>
          </div>

          {/* Navigation Directory (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FBF8F3]">
              Directory
            </h4>
            <ul className="space-y-2 text-xs text-[#A8A29A]">
              <li>
                <a href="#spaces" className="hover:text-white transition-colors">
                  Architectural Spaces & Equipment
                </a>
              </li>
              <li>
                <a href="#disciplines" className="hover:text-white transition-colors">
                  Training Disciplines & Regimens
                </a>
              </li>
              <li>
                <a href="#core45" className="hover:text-white transition-colors">
                  CORE 45-45™ Signature Protocol
                </a>
              </li>
              <li>
                <a href="#memberships" className="hover:text-white transition-colors">
                  Membership Options & Goals
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Location, Shifts & Wayfinding
                </a>
              </li>
            </ul>
          </div>

          {/* Facility Location & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FBF8F3]">
              Facility & Hours
            </h4>
            <div className="space-y-2 text-xs text-[#A8A29A] leading-relaxed">
              <p>
                {GYM_DATA.address.plot}, {GYM_DATA.address.block}, {GYM_DATA.address.landmark},
                Sector 8, Udaipur, Rajasthan 313002
              </p>
              <p className="font-mono text-[#D6DFCF]">
                Mon–Fri: 6:00 AM–12:00 PM & 3:00 PM–9:00 PM
              </p>
              <p className="font-mono text-[#D6DFCF]">
                Saturday: 6:00 AM–10:00 AM & 3:00 PM–7:00 PM
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium">
                <a
                  href={`tel:${GYM_DATA.phoneClean}`}
                  className="text-[#D9734D] hover:underline flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{GYM_DATA.phone}</span>
                </a>
                <a
                  href={GYM_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A8A29A] hover:text-white flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Google Maps Pin</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7B766F]">
          <p>© {new Date().getFullYear()} Core Fitness Gym Udaipur. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Designed with Warm Contemporary Editorial Discipline</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
