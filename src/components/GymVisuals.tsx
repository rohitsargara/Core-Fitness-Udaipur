import React, { useState } from 'react';

interface VisualProps {
  className?: string;
  variant?: 'hero' | 'strength' | 'combat' | 'lounge' | 'coaching';
  alt?: string;
  interactive?: boolean;
}

/**
 * Art-directed Warm Contemporary visual components.
 * Features high-resolution architectural gym imagery with seamless fallback
 * to rich SVG architectural compositions in warm ivory, sand, terracotta, and muted olive.
 */
export const GymVisual: React.FC<VisualProps> = ({
  className = '',
  variant = 'hero',
  alt = 'Core Fitness Gym Udaipur training floor',
}) => {
  const [hasError, setHasError] = useState(false);

  // Curated architectural & fitness imagery matching the warm contemporary aesthetic
  const imageSources: Record<string, string> = {
    hero: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1600&auto=format&fit=crop', // Warm architectural gym
    strength: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop', // Dumbbells on wood
    combat: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop', // Functional training turf & ropes
    lounge: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1200&auto=format&fit=crop', // Minimalist clean gym reception
    coaching: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop', // Athletic form guidance
  };

  const src = imageSources[variant] || imageSources.hero;

  return (
    <div className={`relative overflow-hidden bg-[#F2ECE1] select-none ${className}`}>
      {!hasError ? (
        <>
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
            loading="lazy"
          />
          {/* Warm contemporary tint scrim for seamless aesthetic harmony */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A18]/60 via-[#1C1A18]/15 to-transparent pointer-events-none mix-blend-multiply" />
          <div className="absolute inset-0 bg-[#C86446]/5 pointer-events-none" />
        </>
      ) : (
        /* Bespoke SVG Architectural Composition Fallback */
        <FallbackArchitecturalScene variant={variant} />
      )}
    </div>
  );
};

export const FallbackArchitecturalScene: React.FC<{ variant: string }> = ({ variant }) => {
  return (
    <div className="relative w-full h-full min-h-[300px] flex flex-col justify-between p-8 bg-gradient-to-br from-[#FAF6F0] via-[#F4EFE6] to-[#EBE2D3] border border-[rgba(30,29,27,0.06)]">
      {/* Background Architectural Grid Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="arch-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#BC5A36" strokeWidth="0.5" strokeDasharray="3 3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#arch-grid)" />
      </svg>

      {/* Top Architectural Badge */}
      <div className="relative z-10 flex items-center justify-between text-xs tracking-wider uppercase text-[#8D3B24]">
        <span className="font-medium">Core Fitness · Parshuram Choraha</span>
        <span className="text-[#5C5852] font-mono tabular-nums">Sector 8, Udaipur</span>
      </div>

      {/* Center Motif based on Variant */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center py-6">
        {variant === 'hero' && (
          <div className="relative w-32 h-32 flex items-center justify-center mb-4">
            <div className="absolute inset-0 rounded-full border border-[#BC5A36]/30 bg-[#BC5A36]/5 animate-pulse" />
            <div className="w-24 h-24 rounded-full border border-[#525D45]/40 flex items-center justify-center bg-white/60 shadow-sm backdrop-blur-sm">
              <svg className="w-12 h-12 text-[#BC5A36]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 5v14M18 5v14M4 8h4M16 8h4M4 16h4M16 16h4M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        )}

        {variant === 'strength' && (
          <div className="w-20 h-20 rounded-2xl bg-[#FAF6F0] border border-[#BC5A36]/30 flex items-center justify-center mb-3 shadow-sm">
            <svg className="w-10 h-10 text-[#A84E2E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="7" width="20" height="10" rx="2" strokeLinecap="round" />
              <path d="M6 7v10M18 7v10M10 7v10M14 7v10" strokeLinecap="round" />
            </svg>
          </div>
        )}

        {variant === 'combat' && (
          <div className="w-20 h-20 rounded-2xl bg-[#FAF6F0] border border-[#525D45]/30 flex items-center justify-center mb-3 shadow-sm">
            <svg className="w-10 h-10 text-[#525D45]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2v4M8 6h8l-1 12H9L8 6z" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="18" r="3" strokeLinecap="round" />
            </svg>
          </div>
        )}

        {variant === 'lounge' && (
          <div className="w-20 h-20 rounded-2xl bg-[#FAF6F0] border border-[#BC5A36]/30 flex items-center justify-center mb-3 shadow-sm">
            <svg className="w-10 h-10 text-[#BC5A36]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2a5 5 0 0 0-5 5v5a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5zM12 17v5M8 22h8" strokeLinecap="round" />
            </svg>
          </div>
        )}

        {variant === 'coaching' && (
          <div className="w-20 h-20 rounded-2xl bg-[#FAF6F0] border border-[#BC5A36]/30 flex items-center justify-center mb-3 shadow-sm">
            <svg className="w-10 h-10 text-[#BC5A36]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="7" r="4" strokeLinecap="round" />
              <path d="M5.5 21a6.5 6.5 0 0 1 13 0" strokeLinecap="round" />
            </svg>
          </div>
        )}

        <h4 className="font-serif text-lg font-medium text-[#1E1D1B] tracking-tight">
          {variant === 'hero' && 'Architectural Training Floor'}
          {variant === 'strength' && 'Biomechanical Free Weights & Power Racks'}
          {variant === 'combat' && 'Functional Sled Turf & Combat Boxing Bags'}
          {variant === 'lounge' && 'Chilled RO Hydration Bar & Member Lockers'}
          {variant === 'coaching' && '1-on-1 Form Analysis & Mentorship'}
        </h4>
        <p className="text-xs text-[#5C5852] max-w-xs mt-1">
          Engineered with modern equipment and purposeful natural aesthetics in Udaipur.
        </p>
      </div>

      {/* Bottom Architectural Legend */}
      <div className="relative z-10 flex items-center justify-between pt-4 border-t border-[rgba(30,29,27,0.06)] text-[11px] text-[#5C5852]">
        <span>Latitude: 24.5610° N</span>
        <span>Longitude: 73.7113° E</span>
      </div>
    </div>
  );
};
