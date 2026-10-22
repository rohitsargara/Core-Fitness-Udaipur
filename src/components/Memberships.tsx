import React, { useState } from 'react';
import { GYM_DATA } from '../data/gymData';
import { Check, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

interface MembershipsProps {
  onSelectPlan: (planTitle: string) => void;
}

export const Memberships: React.FC<MembershipsProps> = ({ onSelectPlan }) => {
  const [selectedGoal, setSelectedGoal] = useState<'strength' | 'fatloss' | 'combat' | 'general'>('strength');

  const goalRecommendations = {
    strength: {
      headline: 'Biomechanical Hypertrophy & Power',
      plan: '6-Month Progressive or 12-Month Mastery',
      note: 'Strength adaptations require consistent 16-24 week training cycles for connective tissue density and muscle recruitment.',
    },
    fatloss: {
      headline: 'Cardiovascular & Body Recomposition',
      plan: 'CORE 45-45™ + 6-Month Progressive',
      note: 'Combines metabolic resistance training with high-expenditure functional circuits for sustainable fat reduction.',
    },
    combat: {
      headline: 'Boxing, Kickboxing & Agility',
      plan: '3-Month Foundations or 6-Month Progressive',
      note: 'Access to the dedicated heavy punching bags, sprint turf, and functional combat conditioning blocks.',
    },
    general: {
      headline: 'Daily Vitality & Longevity',
      plan: '3-Month Foundations',
      note: 'Full access to both morning (6-12 AM) and evening (3-9 PM) shifts with orientation guidance.',
    },
  };

  return (
    <section id="memberships" className="py-20 lg:py-28 border-b border-[rgba(30,29,27,0.08)] bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.05} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-[#8D3B24]">
              <span className="font-semibold">Transparent Terms</span>
              <span className="text-[#1E1D1B]/30" aria-hidden="true">·</span>
              <span>No Hidden Surcharges</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1D1B] tracking-tight font-medium">
              Memberships engineered around commitment.
            </h2>
          </div>
          <p className="text-sm text-[#5C5852] max-w-md leading-relaxed">
            Every membership tier grants unrestricted entry to both daily shifts, the complete
            weights floor, cardio machinery, reverse-osmosis hydration, and on-site parking.
          </p>
        </ScrollReveal>

        {/* Goal Recommendation Advisor Widget */}
        <ScrollReveal direction="up" delay={0.1} className="p-6 rounded-lg bg-[#FBF8F3] border border-[rgba(30,29,27,0.08)] mb-12 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-[rgba(30,29,27,0.06)]">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E1D1B]">
              <Sparkles className="w-4 h-4 text-[#BC5A36]" />
              <span>Select Your Training Objective for Plan Guidance:</span>
            </div>
            <div className="flex flex-wrap gap-1.5 p-1 bg-[#F2ECE1] rounded-md">
              {(
                [
                  ['strength', 'Strength & Muscle'],
                  ['fatloss', 'Fat Loss & Recomp'],
                  ['combat', 'CrossFit & Boxing'],
                  ['general', 'General Fitness'],
                ] as const
              ).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setSelectedGoal(key)}
                  className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                    selectedGoal === key
                      ? 'bg-[#FBF8F3] text-[#1E1D1B] shadow-sm font-semibold'
                      : 'text-[#5C5852] hover:text-[#1E1D1B]'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#5C5852]">
            <div>
              <span className="font-serif font-semibold text-sm text-[#1E1D1B] mr-2">
                {goalRecommendations[selectedGoal].headline}:
              </span>
              <span>{goalRecommendations[selectedGoal].note}</span>
            </div>
            <span className="shrink-0 font-mono text-[#8D3B24] font-semibold">
              Recommended: {goalRecommendations[selectedGoal].plan}
            </span>
          </div>
        </ScrollReveal>

        {/* Asymmetrical Membership Cards */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: 3-Month Foundations (3 cols on desktop) */}
          <StaggerItem className="lg:col-span-4 flex flex-col justify-between p-8 rounded-lg bg-[#FBF8F3] border border-[rgba(30,29,27,0.08)] shadow-sm hover:border-[#BC5A36]/40 transition-all">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#8D3B24]">
                  {GYM_DATA.memberships[0].duration}
                </span>
                <h3 className="font-serif text-2xl font-medium text-[#1E1D1B] mt-1">
                  {GYM_DATA.memberships[0].title}
                </h3>
                <p className="text-xs text-[#5C5852] mt-2 leading-relaxed">
                  {GYM_DATA.memberships[0].description}
                </p>
              </div>

              <div className="py-4 border-y border-[rgba(30,29,27,0.06)]">
                <div className="flex items-baseline gap-1 font-serif text-3xl font-bold text-[#1E1D1B] tabular-nums">
                  <span>{GYM_DATA.memberships[0].price}</span>
                  <span className="text-xs font-sans font-normal text-[#5C5852]">/ 3 months</span>
                </div>
                <span className="text-[11px] text-[#5C5852] mt-1 block">
                  Includes comprehensive induction & floor support
                </span>
              </div>

              <ul className="space-y-3">
                {GYM_DATA.memberships[0].features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#5C5852]">
                    <span className="p-0.5 rounded-full bg-[#EFE8DC] text-[#BC5A36] shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onSelectPlan(GYM_DATA.memberships[0].title)}
              className="mt-8 w-full py-3 text-xs font-semibold tracking-wider uppercase text-[#1E1D1B] bg-[#F4EFE6] hover:bg-[#ECE4D4] border border-[rgba(30,29,27,0.08)] rounded transition-colors"
            >
              Enquire For 3 Months
            </button>
          </StaggerItem>

          {/* Card 2: 6-Month Progressive (Featured / 4 cols with Terracotta Accent) */}
          <StaggerItem className="lg:col-span-4 flex flex-col justify-between p-8 rounded-lg bg-[#FAF6F0] border-2 border-[#BC5A36] shadow-md relative">
            <div className="absolute -top-3 left-8 px-3 py-0.5 bg-[#BC5A36] text-[#FBF8F3] text-[11px] font-semibold tracking-wider uppercase rounded">
              Most Popular in Udaipur
            </div>

            <div className="space-y-6 pt-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#BC5A36]">
                  {GYM_DATA.memberships[1].duration}
                </span>
                <h3 className="font-serif text-2xl font-medium text-[#1E1D1B] mt-1">
                  {GYM_DATA.memberships[1].title}
                </h3>
                <p className="text-xs text-[#5C5852] mt-2 leading-relaxed">
                  {GYM_DATA.memberships[1].description}
                </p>
              </div>

              <div className="py-4 border-y border-[rgba(30,29,27,0.06)]">
                <div className="flex items-baseline gap-1 font-serif text-3xl font-bold text-[#1E1D1B] tabular-nums">
                  <span>{GYM_DATA.memberships[1].price}</span>
                  <span className="text-xs font-sans font-normal text-[#5C5852]">/ 6 months</span>
                </div>
                <span className="text-[11px] text-[#8D3B24] font-medium mt-1 block">
                  Includes CORE 45-45™ curriculum eligibility
                </span>
              </div>

              <ul className="space-y-3">
                {GYM_DATA.memberships[1].features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#3E3A35]">
                    <span className="p-0.5 rounded-full bg-[#BC5A36] text-[#FBF8F3] shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onSelectPlan(GYM_DATA.memberships[1].title)}
              className="mt-8 w-full py-3.5 text-xs font-semibold tracking-wider uppercase text-[#FBF8F3] bg-[#BC5A36] hover:bg-[#A84E2E] rounded transition-colors shadow-sm"
            >
              Select 6-Month Plan
            </button>
          </StaggerItem>

          {/* Card 3: 12-Month Mastery (4 cols) */}
          <StaggerItem className="lg:col-span-4 flex flex-col justify-between p-8 rounded-lg bg-[#FBF8F3] border border-[rgba(30,29,27,0.08)] shadow-sm hover:border-[#BC5A36]/40 transition-all">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#525D45]">
                  {GYM_DATA.memberships[2].duration}
                </span>
                <h3 className="font-serif text-2xl font-medium text-[#1E1D1B] mt-1">
                  {GYM_DATA.memberships[2].title}
                </h3>
                <p className="text-xs text-[#5C5852] mt-2 leading-relaxed">
                  {GYM_DATA.memberships[2].description}
                </p>
              </div>

              <div className="py-4 border-y border-[rgba(30,29,27,0.06)]">
                <div className="flex items-baseline gap-1 font-serif text-3xl font-bold text-[#1E1D1B] tabular-nums">
                  <span>{GYM_DATA.memberships[2].price}</span>
                  <span className="text-xs font-sans font-normal text-[#5C5852]">/ year</span>
                </div>
                <span className="text-[11px] text-[#525D45] font-medium mt-1 block">
                  Includes 2 personal coaching benchmark assessments
                </span>
              </div>

              <ul className="space-y-3">
                {GYM_DATA.memberships[2].features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#5C5852]">
                    <span className="p-0.5 rounded-full bg-[#EFE8DC] text-[#525D45] shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onSelectPlan(GYM_DATA.memberships[2].title)}
              className="mt-8 w-full py-3 text-xs font-semibold tracking-wider uppercase text-[#1E1D1B] bg-[#F4EFE6] hover:bg-[#ECE4D4] border border-[rgba(30,29,27,0.08)] rounded transition-colors"
            >
              Enquire For Annual Plan
            </button>
          </StaggerItem>
        </StaggerContainer>

        {/* Member Guarantees & Transparency Bar */}
        <div className="mt-12 pt-8 border-t border-[rgba(30,29,27,0.08)] flex flex-wrap items-center justify-between gap-6 text-xs text-[#5C5852]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#525D45]" />
            <span>Facility Freeze Option Available (Up to 30 days for travel/exams)</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#BC5A36]" />
            <span>Access both morning & evening slots at no extra fee</span>
          </div>
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#8D3B24]" />
            <span>Need custom PT or nutritional coaching? Mention in enquiry</span>
          </div>
        </div>
      </div>
    </section>
  );
};
