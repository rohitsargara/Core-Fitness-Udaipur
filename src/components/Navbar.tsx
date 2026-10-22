import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FBF8F3]/95 backdrop-blur-md border-b border-[rgba(30,29,27,0.08)] transition-all">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark in display face */}
        <a
          href="#"
          className="font-serif text-2xl tracking-tight text-[#1E1D1B] whitespace-nowrap shrink-0 hover:text-[#BC5A36] transition-colors"
        >
          Core Fitness
        </a>

        {/* Zone 2: 4–5 concise single-line text links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5C5852]">
          <a
            href="#spaces"
            className="whitespace-nowrap shrink-0 hover:text-[#1E1D1B] hover:underline underline-offset-8 transition-colors decoration-[#BC5A36]/60"
          >
            Spaces
          </a>
          <a
            href="#disciplines"
            className="whitespace-nowrap shrink-0 hover:text-[#1E1D1B] hover:underline underline-offset-8 transition-colors decoration-[#BC5A36]/60"
          >
            Disciplines
          </a>
          <a
            href="#core45"
            className="whitespace-nowrap shrink-0 hover:text-[#1E1D1B] hover:underline underline-offset-8 transition-colors decoration-[#BC5A36]/60"
          >
            CORE 45-45™
          </a>
          <a
            href="#memberships"
            className="whitespace-nowrap shrink-0 hover:text-[#1E1D1B] hover:underline underline-offset-8 transition-colors decoration-[#BC5A36]/60"
          >
            Memberships
          </a>
          <a
            href="#location"
            className="whitespace-nowrap shrink-0 hover:text-[#1E1D1B] hover:underline underline-offset-8 transition-colors decoration-[#BC5A36]/60"
          >
            Location & Hours
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-[#FBF8F3] bg-[#1E1D1B] hover:bg-[#BC5A36] rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            Schedule a Visit
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-[#1E1D1B] hover:text-[#BC5A36] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[rgba(30,29,27,0.08)] bg-[#FBF8F3] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#1E1D1B]">
            <a
              href="#spaces"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#BC5A36] transition-colors"
            >
              Spaces
            </a>
            <a
              href="#disciplines"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#BC5A36] transition-colors"
            >
              Disciplines
            </a>
            <a
              href="#core45"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#BC5A36] transition-colors"
            >
              CORE 45-45™
            </a>
            <a
              href="#memberships"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#BC5A36] transition-colors"
            >
              Memberships
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#BC5A36] transition-colors"
            >
              Location & Hours
            </a>
          </nav>
          <div className="pt-4 border-t border-[rgba(30,29,27,0.08)]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-center text-xs font-semibold tracking-wide uppercase text-white bg-[#BC5A36] hover:bg-[#A84E2E] rounded-md transition-colors"
            >
              Schedule a Visit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
