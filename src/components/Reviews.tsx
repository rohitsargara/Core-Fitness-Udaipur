import React, { useState } from 'react';
import { GYM_DATA } from '../data/gymData';
import { Star, ShieldCheck } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const Reviews: React.FC = () => {
  const [filterSource, setFilterSource] = useState<'all' | 'google' | 'fitpass'>('all');

  const filteredReviews = GYM_DATA.reviews.filter((rev) => {
    if (filterSource === 'google') return rev.source.includes('Google');
    if (filterSource === 'fitpass') return rev.source.includes('FITPASS');
    return true;
  });

  return (
    <section className="py-20 lg:py-28 border-b border-[rgba(30,29,27,0.08)] bg-plaster">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.05} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-[#8D3B24]">
              <span className="font-semibold">Member Community</span>
              <span className="text-[#1E1D1B]/30" aria-hidden="true">·</span>
              <span>Authentic Verified Feedback</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1D1B] tracking-tight font-medium">
              Voices from the training floor in Udaipur.
            </h2>
          </div>

          {/* Social Proof Summary Block */}
          <div className="p-4 rounded-lg bg-[#FAF6F0] border border-[rgba(30,29,27,0.08)] flex items-center gap-5">
            <div>
              <div className="flex items-center gap-1 text-[#BC5A36]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-[#BC5A36]" />
                ))}
              </div>
              <div className="text-sm font-bold text-[#1E1D1B] mt-1 tabular-nums">
                4.8 / 5.0 Average Score
              </div>
            </div>
            <div className="h-8 w-px bg-[rgba(30,29,27,0.1)]" />
            <div className="text-xs text-[#5C5852]">
              <span className="font-semibold text-[#1E1D1B] block">88+ Verified Reviews</span>
              <span>Across Google & FITPASS</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Filter controls */}
        <ScrollReveal direction="up" delay={0.1} className="flex items-center gap-2 mb-8">
          <span className="text-xs text-[#5C5852] mr-2">Filter by verification platform:</span>
          <div className="inline-flex p-1 bg-[#F2ECE1] rounded-md">
            <button
              onClick={() => setFilterSource('all')}
              className={`px-3 py-1 text-xs rounded transition-colors ${
                filterSource === 'all'
                  ? 'bg-[#FBF8F3] text-[#1E1D1B] font-semibold shadow-sm'
                  : 'text-[#5C5852] hover:text-[#1E1D1B]'
              }`}
            >
              All Feedback ({GYM_DATA.reviews.length})
            </button>
            <button
              onClick={() => setFilterSource('google')}
              className={`px-3 py-1 text-xs rounded transition-colors ${
                filterSource === 'google'
                  ? 'bg-[#FBF8F3] text-[#1E1D1B] font-semibold shadow-sm'
                  : 'text-[#5C5852] hover:text-[#1E1D1B]'
              }`}
            >
              Google Reviews (4.8★)
            </button>
            <button
              onClick={() => setFilterSource('fitpass')}
              className={`px-3 py-1 text-xs rounded transition-colors ${
                filterSource === 'fitpass'
                  ? 'bg-[#FBF8F3] text-[#1E1D1B] font-semibold shadow-sm'
                  : 'text-[#5C5852] hover:text-[#1E1D1B]'
              }`}
            >
              FITPASS Verified (4.7★)
            </button>
          </div>
        </ScrollReveal>

        {/* Asymmetrical Reviews Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredReviews.map((review) => (
            <StaggerItem key={review.id}>
              <div className="flex flex-col justify-between p-8 rounded-lg bg-[#FAF6F0] border border-[rgba(30,29,27,0.08)] shadow-sm hover:border-[#BC5A36]/30 transition-colors h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#BC5A36]">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#525D45]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{review.source}</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#FBF8F3] rounded border border-[rgba(30,29,27,0.04)]">
                    <span className="text-xs font-serif font-medium text-[#8D3B24] italic">
                      "{review.highlight}"
                    </span>
                  </div>

                  <p className="text-sm text-[#3E3A35] leading-relaxed">
                    "{review.comment}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[rgba(30,29,27,0.06)] flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-[#1E1D1B] block">{review.author}</span>
                    <span className="text-[#5C5852]">{review.timeframe}</span>
                  </div>
                  <span className="text-[#8D3B24] font-medium text-[11px]">
                    Verified Udaipur Athlete
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
