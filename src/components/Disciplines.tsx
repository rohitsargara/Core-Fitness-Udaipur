import React, { useState } from 'react';
import { GYM_DATA } from '../data/gymData';
import { Check, ArrowRight, Activity, Flame, Shield, Compass, Heart } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

interface DisciplinesProps {
  onOpenBooking: () => void;
}

export const Disciplines: React.FC<DisciplinesProps> = ({ onOpenBooking }) => {
  const [activeProgramId, setActiveProgramId] = useState<string>(GYM_DATA.programs[0].id);

  const activeProgram =
    GYM_DATA.programs.find((p) => p.id === activeProgramId) || GYM_DATA.programs[0];

  const getProgramIcon = (id: string) => {
    switch (id) {
      case 'strength':
        return <Activity className="w-5 h-5 text-[#BC5A36]" />;
      case 'crossfit-combat':
        return <Flame className="w-5 h-5 text-[#8D3B24]" />;
      case 'core-45':
        return <Shield className="w-5 h-5 text-[#525D45]" />;
      case 'personal-coaching':
        return <Compass className="w-5 h-5 text-[#BC5A36]" />;
      case 'mobility-wellness':
        return <Heart className="w-5 h-5 text-[#525D45]" />;
      default:
        return <Activity className="w-5 h-5 text-[#BC5A36]" />;
    }
  };

  return (
    <section id="disciplines" className="py-20 lg:py-28 border-b border-[rgba(30,29,27,0.08)] bg-plaster">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.05} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-[#8D3B24]">
              <span className="font-semibold">Disciplines & Protocols</span>
              <span className="text-[#1E1D1B]/30" aria-hidden="true">·</span>
              <span>Evidence-Based Conditioning</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1D1B] tracking-tight font-medium">
              Structured training tailored to human physiology.
            </h2>
          </div>
          <p className="text-sm text-[#5C5852] max-w-md leading-relaxed">
            From heavy barbell technique to combat boxing and high-intensity metabolic conditioning,
            each discipline is anchored in progressive overload and joint longevity.
          </p>
        </ScrollReveal>

        {/* Editorial Layout: Interactive 2-Column Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Numbered Editorial Index (5 cols) */}
          <StaggerContainer staggerDelay={0.06} className="lg:col-span-5 space-y-2">
            {GYM_DATA.programs.map((program) => {
              const isActive = program.id === activeProgramId;
              return (
                <StaggerItem key={program.id}>
                  <div
                    onClick={() => setActiveProgramId(program.id)}
                    className={`p-5 rounded-lg border transition-all cursor-pointer ${
                      isActive
                        ? 'border-[#BC5A36] bg-[#FBF8F3] shadow-sm translate-x-1'
                        : 'border-[rgba(30,29,27,0.06)] bg-[#F4EFE6]/60 hover:bg-[#F4EFE6] text-[#5C5852]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-[#8D3B24] tabular-nums">
                        {program.number}.
                      </span>
                      <span className="text-[11px] font-mono text-[#5C5852] tabular-nums">
                        {program.sessionLength}
                      </span>
                    </div>
                    <h3
                      className={`font-serif text-lg font-medium mt-1 ${
                        isActive ? 'text-[#1E1D1B]' : 'text-[#3E3A35]'
                      }`}
                    >
                      {program.title}
                    </h3>
                    <p className="text-xs text-[#5C5852] mt-1 line-clamp-1">
                      {program.subtitle}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Right Column: Deep Curated Program Breakdown (7 cols) */}
          <ScrollReveal direction="left" delay={0.15} className="lg:col-span-7 bg-[#FAF6F0] rounded-lg border border-[rgba(30,29,27,0.08)] p-8 lg:p-10 shadow-sm space-y-8">
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-[rgba(30,29,27,0.08)]">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#8D3B24] mb-1">
                  <span>DISCIPLINE {activeProgram.number}</span>
                  <span className="text-[#1E1D1B]/20" aria-hidden="true">·</span>
                  <span>{activeProgram.focus}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1E1D1B]">
                  {activeProgram.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#BC5A36] font-medium mt-1">
                  {activeProgram.subtitle}
                </p>
              </div>
              <div className="p-3 bg-[#FBF8F3] rounded border border-[rgba(30,29,27,0.08)] shrink-0">
                {getProgramIcon(activeProgram.id)}
              </div>
            </div>

            <p className="text-sm text-[#5C5852] leading-relaxed">
              {activeProgram.description}
            </p>

            {/* Program Metrics & Attributes */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-[rgba(30,29,27,0.06)] text-xs">
              <div>
                <span className="text-[#5C5852] block font-medium">Session Cadence</span>
                <span className="text-[#1E1D1B] font-mono font-semibold mt-0.5 block tabular-nums">
                  {activeProgram.sessionLength}
                </span>
              </div>
              <div>
                <span className="text-[#5C5852] block font-medium">Coaching Supervision</span>
                <span className="text-[#1E1D1B] font-semibold mt-0.5 block">
                  {activeProgram.coachToMemberRatio}
                </span>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1E1D1B]">
                Curricular Objectives
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeProgram.benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs text-[#5C5852] p-2.5 rounded bg-[#FBF8F3] border border-[rgba(30,29,27,0.06)]"
                  >
                    <span className="p-0.5 rounded-full bg-[#EFE8DC] text-[#BC5A36] shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action inside Active Program */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#5C5852]">
                Available across morning (6–12 AM) and evening (3–9 PM) shifts.
              </span>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#FBF8F3] bg-[#1E1D1B] hover:bg-[#BC5A36] rounded transition-colors"
              >
                <span>Enquire About {activeProgram.title.split(' ')[0]}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Highlighted Banner for CORE's 45-45™ Protocol */}
        <ScrollReveal direction="up" delay={0.2} className="mt-16">
          <div id="core45" className="rounded-xl bg-[#525D45] text-[#FBF8F3] p-8 lg:p-12 relative overflow-hidden shadow-md">
            {/* Subtle architectural background motifs */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none hidden md:block">
              <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                <polygon points="0,0 100,0 100,100" fill="currentColor" />
              </svg>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#D6DFCF] tracking-wider uppercase">
                  <span>Signature Physical Transformation Protocol</span>
                  <span className="opacity-40" aria-hidden="true">·</span>
                  <span>Udaipur Exclusive</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight">
                  CORE's 45-45™ Protocol: 45 Days to Breakthrough.
                </h3>
                <p className="text-sm text-[#D6DFCF] max-w-2xl leading-relaxed">
                  A structured, 45-day strength, stamina, and cardiovascular conditioning program developed
                  by Core Fitness Udaipur. Built around progressive overload, baseline VO2 testing, and
                  uncompromising trainer accountability to break through physical plateaus.
                </p>
                <div className="flex flex-wrap gap-6 pt-2 text-xs text-[#FBF8F3]">
                  <div className="flex items-center gap-2 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8D6CB]" />
                    <span>45 Curated Sessions</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8D6CB]" />
                    <span>Stamina Benchmark Testing</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8D6CB]" />
                    <span>Sustainable Nutrition Blueprint</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3.5 px-6 text-center text-xs font-semibold tracking-wider uppercase text-[#1E1D1B] bg-[#FBF8F3] hover:bg-[#F2ECE1] rounded transition-colors shadow-sm"
                >
                  Join Upcoming 45-45 Cohort
                </button>
                <a
                  href={`tel:${GYM_DATA.phoneClean}`}
                  className="w-full py-3.5 px-6 text-center text-xs font-semibold tracking-wider uppercase text-[#FBF8F3] border border-white/30 hover:bg-white/10 rounded transition-colors"
                >
                  Call Trainer: {GYM_DATA.phone}
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
