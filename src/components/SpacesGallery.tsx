import React, { useState } from 'react';
import { GYM_DATA } from '../data/gymData';
import { GymVisual } from './GymVisuals';
import { Check, Maximize2, X } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const SpacesGallery: React.FC = () => {
  const [selectedSpaceId, setSelectedSpaceId] = useState<string>(GYM_DATA.spaces[0].id);
  const [modalSpace, setModalSpace] = useState<(typeof GYM_DATA.spaces)[0] | null>(null);

  const activeSpace = GYM_DATA.spaces.find((s) => s.id === selectedSpaceId) || GYM_DATA.spaces[0];

  const getVisualVariant = (id: string): 'strength' | 'combat' | 'lounge' | 'hero' => {
    switch (id) {
      case 'strength-floor':
        return 'strength';
      case 'free-weights':
        return 'strength';
      case 'functional-combat':
        return 'combat';
      case 'amenities-lounge':
        return 'lounge';
      default:
        return 'hero';
    }
  };

  return (
    <section id="spaces" className="py-20 lg:py-28 border-b border-[rgba(30,29,27,0.08)] bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.05} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-[#8D3B24]">
              <span className="font-semibold">Architectural Philosophy</span>
              <span className="text-[#1E1D1B]/30" aria-hidden="true">·</span>
              <span>Udaipur Training Environment</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1D1B] tracking-tight font-medium">
              Spaces calibrated for focus, safety, and flow.
            </h2>
          </div>
          <p className="text-sm text-[#5C5852] max-w-md leading-relaxed">
            Unlike cramped or loud commercial basements, Core Fitness is zoned deliberately
            with acoustic separation, expansive ceiling clearance, and natural ventilation.
          </p>
        </ScrollReveal>

        {/* Interactive Space Navigator (clean segmented tabs, not pills) */}
        <ScrollReveal direction="up" delay={0.1} className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 bg-[#F2ECE1] rounded-lg mb-8 border border-[rgba(30,29,27,0.06)]">
          {GYM_DATA.spaces.map((space) => {
            const isActive = space.id === selectedSpaceId;
            return (
              <button
                key={space.id}
                onClick={() => setSelectedSpaceId(space.id)}
                className={`py-3 px-4 text-xs font-semibold tracking-wide text-left transition-all rounded ${
                  isActive
                    ? 'bg-[#FBF8F3] text-[#1E1D1B] shadow-sm'
                    : 'text-[#5C5852] hover:text-[#1E1D1B] hover:bg-white/40'
                }`}
              >
                <span className="block font-serif text-sm truncate">{space.title}</span>
                <span className="block text-[11px] font-sans font-normal text-[#BC5A36] truncate mt-0.5">
                  {space.subtitle}
                </span>
              </button>
            );
          })}
        </ScrollReveal>

        {/* Asymmetrical Showcase Section for the Active Space */}
        <ScrollReveal direction="up" delay={0.15} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#FBF8F3] rounded-lg border border-[rgba(30,29,27,0.08)] p-6 lg:p-10 shadow-sm">
          {/* Left: Deep Specification & Atmosphere (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8D3B24]">
                <span>FACILITY ZONE // 0{GYM_DATA.spaces.findIndex((s) => s.id === activeSpace.id) + 1}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1E1D1B]">
                {activeSpace.title}
              </h3>
              <p className="text-sm text-[#5C5852] leading-relaxed">
                {activeSpace.description}
              </p>
            </div>

            {/* Atmosphere callout */}
            <div className="p-4 rounded bg-[#FAF6F0] border border-[rgba(30,29,27,0.06)] space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-[#8D3B24] font-semibold block">
                Atmosphere & Acoustics
              </span>
              <p className="text-xs text-[#1E1D1B] font-medium italic">
                "{activeSpace.atmosphere}"
              </p>
            </div>

            {/* Specifications list */}
            <div className="space-y-2.5 pt-2 border-t border-[rgba(30,29,27,0.06)]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1E1D1B]">
                Engineered Highlights
              </span>
              <ul className="space-y-2">
                {activeSpace.specifications.map((spec, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#5C5852]">
                    <span className="p-0.5 rounded-full bg-[#EFE8DC] text-[#BC5A36] shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Architectural Photographic Plate (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative group w-full h-[320px] sm:h-[420px] lg:h-full min-h-[320px] rounded-md overflow-hidden border border-[rgba(30,29,27,0.08)] bg-[#F2ECE1]">
              <GymVisual
                variant={getVisualVariant(activeSpace.id)}
                alt={activeSpace.title}
                className="w-full h-full"
              />

              {/* Expand Viewport Button */}
              <button
                onClick={() => setModalSpace(activeSpace)}
                aria-label={`View detailed architectural plate for ${activeSpace.title}`}
                className="absolute top-4 right-4 p-2.5 bg-[#FBF8F3]/90 hover:bg-white text-[#1E1D1B] rounded shadow-sm backdrop-blur-sm transition-transform active:scale-95"
              >
                <Maximize2 className="w-4 h-4 text-[#8D3B24]" />
              </button>

              <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#FBF8F3]/90 backdrop-blur-md rounded border border-[rgba(30,29,27,0.08)] flex items-center justify-between text-xs">
                <span className="font-medium text-[#1E1D1B]">Sector 8 · Parshuram Choraha</span>
                <span className="text-[#8D3B24] font-mono">Verified Facility Equipment</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Small Vignette Cards (Asymmetrical Grid of all zones) */}
        <StaggerContainer staggerDelay={0.08} className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GYM_DATA.spaces.map((space, index) => (
            <StaggerItem key={space.id}>
              <div
                onClick={() => setSelectedSpaceId(space.id)}
                className={`p-5 rounded-lg border transition-all cursor-pointer h-full ${
                  space.id === selectedSpaceId
                    ? 'border-[#BC5A36] bg-[#FBF8F3] shadow-sm'
                    : 'border-[rgba(30,29,27,0.08)] bg-white/40 hover:bg-[#FBF8F3]'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-[#8D3B24] mb-2 font-mono">
                  <span>0{index + 1}</span>
                  <span className="text-[11px]">{space.specifications.length} Features</span>
                </div>
                <h4 className="font-serif text-base font-medium text-[#1E1D1B]">{space.title}</h4>
                <p className="text-xs text-[#5C5852] mt-1 line-clamp-2">{space.subtitle}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Architectural Lightbox Modal */}
      {modalSpace && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#1C1A18]/80 backdrop-blur-sm"
          onClick={() => setModalSpace(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#FBF8F3] rounded-lg overflow-hidden border border-[rgba(30,29,27,0.12)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-[rgba(30,29,27,0.08)] flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl font-medium text-[#1E1D1B]">{modalSpace.title}</h3>
                <p className="text-xs text-[#BC5A36] mt-0.5">{modalSpace.subtitle}</p>
              </div>
              <button
                onClick={() => setModalSpace(null)}
                aria-label="Close dialog"
                className="p-2 text-[#5C5852] hover:text-[#1E1D1B] rounded hover:bg-[#F4EFE6]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-[360px] sm:h-[460px] w-full">
              <GymVisual
                variant={getVisualVariant(modalSpace.id)}
                alt={modalSpace.title}
                className="w-full h-full"
              />
            </div>

            <div className="p-6 bg-[#FAF6F0] border-t border-[rgba(30,29,27,0.08)] grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#5C5852]">
              <div>
                <span className="font-semibold text-[#1E1D1B] block mb-1">Floor Configuration</span>
                <p>{modalSpace.description}</p>
              </div>
              <div>
                <span className="font-semibold text-[#1E1D1B] block mb-1">Curated Specifications</span>
                <ul className="space-y-1">
                  {modalSpace.specifications.map((spec, i) => (
                    <li key={i}>• {spec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
