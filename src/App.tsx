import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpacesGallery } from './components/SpacesGallery';
import { Disciplines } from './components/Disciplines';
import { Memberships } from './components/Memberships';
import { Reviews } from './components/Reviews';
import { LocationHours } from './components/LocationHours';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { MessageSquare, Phone } from 'lucide-react';
import { GYM_DATA } from './data/gymData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPlanForBooking, setSelectedPlanForBooking] = useState<string>('');

  const handleOpenBooking = (planName?: string) => {
    setSelectedPlanForBooking(planName || '');
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedPlanForBooking('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F3] text-[#1E1D1B] selection:bg-[#E8D6CB] selection:text-[#8D3B24]">
      {/* On-scroll progress indicator */}
      <ScrollProgressBar />

      {/* Top Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Editorial Content Flow */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Section 2: Spaces & Architectural Facilities */}
        <SpacesGallery />

        {/* Section 3: Disciplines & CORE 45-45 Protocol */}
        <Disciplines onOpenBooking={() => handleOpenBooking('CORE 45-45™')} />

        {/* Section 4: Memberships & Objective Advisory */}
        <Memberships onSelectPlan={(plan) => handleOpenBooking(plan)} />

        {/* Section 5: Real Member Community Voices */}
        <Reviews />

        {/* Section 6: Wayfinding, Schedule & Location */}
        <LocationHours />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Quick Access Floating Pill (Compliant with Mobile Sticky Cap <= 15% Viewport) */}
      <aside aria-label="Quick contact actions" className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <a
          href={`https://wa.me/${GYM_DATA.phoneClean}?text=${encodeURIComponent(
            'Hello Core Fitness Gym Udaipur, I have an inquiry about memberships and training hours.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Message"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#525D45] text-white hover:bg-[#434c38] shadow-lg transition-transform hover:scale-105 active:scale-95 text-xs font-semibold"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        <a
          href={`tel:${GYM_DATA.phoneClean}`}
          aria-label="Call Core Fitness Gym Udaipur"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#BC5A36] text-white hover:bg-[#A84E2E] shadow-lg transition-transform hover:scale-105 active:scale-95 text-xs font-semibold"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Call Gym</span>
        </a>
      </aside>

      {/* Walkthrough & Induction Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedPlan={selectedPlanForBooking}
      />
    </div>
  );
}
