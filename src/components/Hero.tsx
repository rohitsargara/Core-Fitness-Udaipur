import { ArrowRight, MapPin, Award, ShieldCheck, Dumbbell } from 'lucide-react';
import { GYM_DATA } from '../data/gymData';
import { GymVisual } from './GymVisuals';
import { LiveStatus } from './LiveStatus';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[rgba(30,29,27,0.08)] bg-plaster">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Real-time Shift & Facility Bar */}
        <div className="mb-8 pb-4 border-b border-[rgba(30,29,27,0.06)] flex items-center justify-between">
          <LiveStatus />
          <div className="hidden lg:flex items-center gap-2 text-xs text-[#5C5852]">
            <MapPin className="w-3.5 h-3.5 text-[#BC5A36]" />
            <span>Plot 4, C Block, Parshuram Choraha, Sector 8, Udaipur</span>
          </div>
        </div>

        {/* Asymmetrical 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          {/* Left Column: Editorial Headline, Narrative, & Action (7 cols) */}
          <ScrollReveal direction="up" delay={0.05} duration={0.65} className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Quiet, unboxed kicker without pill badges */}
              <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-[#8D3B24]">
                <span className="font-semibold">Sanctuary of Physical Discipline</span>
                <span className="text-[#1E1D1B]/30" aria-hidden="true">·</span>
                <span>Udaipur, Rajasthan</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.12] text-[#1E1D1B] text-balance-header tracking-tight font-medium">
                Where measured strength meets architectural calm.
              </h1>

              <p className="text-base sm:text-lg text-[#5C5852] leading-relaxed max-w-xl">
                Core Fitness is Udaipur’s premier destination for biomechanical strength,
                CrossFit conditioning, and combat sports. Outfitted with brand-new precision machinery
                and guided by experienced mentors in a clean, focused, and welcoming atmosphere.
              </p>
            </div>

            {/* Actions & Proof */}
            <div className="space-y-6 pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#FBF8F3] bg-[#BC5A36] hover:bg-[#A84E2E] rounded-md transition-colors whitespace-nowrap shadow-sm hover:shadow"
                >
                  <span>Book Free Induction Tour</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#spaces"
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#1E1D1B] bg-[#F4EFE6] hover:bg-[#ECE4D4] border border-[rgba(30,29,27,0.08)] rounded-md transition-colors whitespace-nowrap"
                >
                  <span>Explore Spaces & Gear</span>
                </a>
              </div>

              {/* Verified Adjacency Proof Strip */}
              <div className="pt-6 border-t border-[rgba(30,29,27,0.08)] grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="flex items-baseline gap-1 font-serif text-2xl font-bold text-[#1E1D1B] tabular-nums">
                    <span>4.8</span>
                    <span className="text-xs text-[#BC5A36] font-sans">/ 5.0</span>
                  </div>
                  <p className="text-xs text-[#5C5852] mt-0.5">88+ Verified Google & FITPASS Reviews</p>
                </div>

                <div>
                  <div className="font-serif text-2xl font-bold text-[#1E1D1B] tabular-nums">
                    <span>2 Shifts</span>
                  </div>
                  <p className="text-xs text-[#5C5852] mt-0.5">Daily 6–12 AM & 3–9 PM for Work-Life Flow</p>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <div className="font-serif text-2xl font-bold text-[#1E1D1B] tabular-nums">
                    <span>100%</span>
                  </div>
                  <p className="text-xs text-[#5C5852] mt-0.5">Brand-New Machinery & Free Weights Bay</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Large Architectural Photographic Moment (5 cols) */}
          <ScrollReveal direction="left" delay={0.15} duration={0.7} className="lg:col-span-5 flex flex-col">
            <div className="relative w-full h-[380px] sm:h-[460px] lg:h-full min-h-[380px] rounded-lg overflow-hidden border border-[rgba(30,29,27,0.08)] shadow-sm">
              <GymVisual
                variant="hero"
                className="w-full h-full"
                alt="Core Fitness Gym interior floor at Parshuram Choraha Udaipur"
              />

              {/* Architectural Overlay Tag */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#FBF8F3]/90 backdrop-blur-md rounded border border-[rgba(30,29,27,0.08)]">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-serif font-semibold text-[#1E1D1B]">The Main Arena</span>
                  <span className="font-mono text-[11px] text-[#BC5A36]">Sector 8 · Udaipur</span>
                </div>
                <p className="text-xs text-[#5C5852] mt-1 leading-snug">
                  Natural daylight, acoustic vibration dampening, and dedicated functional turf.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 4-Column Bottom KPI / Trust Strip */}
        <StaggerContainer
          staggerDelay={0.08}
          className="mt-16 pt-10 border-t border-[rgba(30,29,27,0.08)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <StaggerItem className="flex items-start gap-3.5">
            <div className="p-2.5 rounded bg-[#F4EFE6] text-[#BC5A36] shrink-0 border border-[rgba(30,29,27,0.06)]">
              <Dumbbell className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1E1D1B]">Cutting-Edge Equipment</h4>
              <p className="text-xs text-[#5C5852] mt-1 leading-relaxed">
                Brand-new selectorized gym stations, Olympic bars, and heavy dumbbells up to 40 kg.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem className="flex items-start gap-3.5">
            <div className="p-2.5 rounded bg-[#F4EFE6] text-[#525D45] shrink-0 border border-[rgba(30,29,27,0.06)]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1E1D1B]">Clean & Welcoming Space</h4>
              <p className="text-xs text-[#5C5852] mt-1 leading-relaxed">
                Hygienic lockers, RO drinking water station, and an inclusive culture for all fitness levels.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem className="flex items-start gap-3.5">
            <div className="p-2.5 rounded bg-[#F4EFE6] text-[#BC5A36] shrink-0 border border-[rgba(30,29,27,0.06)]">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1E1D1B]">CORE 45-45™ Protocol</h4>
              <p className="text-xs text-[#5C5852] mt-1 leading-relaxed">
                Signature 45-day strength, stamina, and body composition program with structured checkpoints.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem className="flex items-start gap-3.5">
            <div className="p-2.5 rounded bg-[#F4EFE6] text-[#525D45] shrink-0 border border-[rgba(30,29,27,0.06)]">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1E1D1B]">Prime Parshuram Choraha</h4>
              <p className="text-xs text-[#5C5852] mt-1 leading-relaxed">
                Plot No. 4, C Block with dedicated on-site vehicle parking for members.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};
