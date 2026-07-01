"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ScrollRevealRail from "@/components/ui/ScrollRevealRail";

const COMPARISON = [
  {
    id: "integration",
    category: "Integration & Ingestion",
    oldWay: "Months of custom ETL pipelines and brittle API connections.",
    akashicWay: "Out-of-the-box connectors and automated ingestion layers."
  },
  {
    id: "quality",
    category: "Data Quality & Mastering",
    oldWay: "Manual cleaning, prone to human error, constantly breaking.",
    akashicWay: "Automated mastering, deduplication, and anomaly detection."
  },
  {
    id: "insight",
    category: "Time to Insight",
    oldWay: "Request a report. Wait two weeks. Get stale data.",
    akashicWay: "Ask a question in plain English. Get an answer instantly based on live data."
  },
  {
    id: "tco",
    category: "Total Cost of Ownership",
    oldWay: "Pay for ingestion, pay for storage, pay for BI, pay for AI tools.",
    akashicWay: "One predictable platform. Lower operational overhead."
  }
];

export default function AkashicComparison() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="rail-container relative w-full bg-primary-bg pt-16 pb-24 lg:pt-24 lg:pb-32 border-t border-subtle-stroke overflow-hidden">
      <ScrollRevealRail className="z-10">

        <ScrollReveal delay={80}>
          <div className="text-center mb-16">
            <h2 className="text-balance text-[38px] font-semibold leading-[1.1] tracking-tighter text-ink md:text-[46px] lg:text-[54px]">
              The old way <br className="hidden sm:block" />
              <span className="text-blue">vs. The Akashic Way.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto">
          {/* Header Row */}
          <div className="hidden lg:grid grid-cols-2 gap-8 mb-6 px-10">
            <div className="text-sm font-bold text-inkSoft uppercase tracking-wider pl-4">The Old Way</div>
            <div className="text-sm font-bold text-blue uppercase tracking-wider pl-4">The Akashic Way</div>
          </div>

          <div className="flex flex-col gap-6 relative">
            
            {/* The vertical dividing line */}
            <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px bg-lineSoft -translate-x-1/2 z-0" />

            {COMPARISON.map((row, idx) => {
              const isHovered = hoveredIdx === idx;
              
              return (
                <ScrollReveal key={row.id} delay={120 + idx * 60}>
                  <div 
                    className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 group"
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    
                    {/* Category Label (Mobile Only) */}
                    <div className="lg:hidden text-xs font-bold text-ink uppercase tracking-wider mt-4">
                      {row.category}
                    </div>

                    {/* Old Way Block */}
                    <div 
                      className={`p-8 rounded-2xl border transition-all duration-500 ease-out flex flex-col justify-center ${
                        isHovered ? 'bg-white shadow-md border-lineSoft translate-x-2 lg:translate-x-0' : 'bg-transparent border-transparent'
                      }`}
                    >
                      <div className="hidden lg:block text-xs font-bold text-inkSoft uppercase tracking-wider mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                        {row.category}
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red/10 text-red">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M9.5 2.5L2.5 9.5M2.5 2.5L9.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className={`text-base leading-relaxed transition-colors duration-500 ${isHovered ? 'text-ink' : 'text-inkSoft'}`}>
                          {row.oldWay}
                        </span>
                      </div>
                    </div>

                    {/* Akashic Way Block */}
                    <div 
                      className={`p-8 rounded-2xl border transition-all duration-500 ease-out flex flex-col justify-center ${
                        isHovered ? 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-blue/20 -translate-x-2 lg:translate-x-0 scale-[1.02] lg:scale-105 relative z-20' : 'bg-white/50 border-subtle-stroke hover:bg-white'
                      }`}
                    >
                      <div className="hidden lg:block text-xs font-bold text-blue uppercase tracking-wider mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                        {row.category}
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue/10 text-blue">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className={`text-base font-medium leading-relaxed transition-colors duration-500 ${isHovered ? 'text-ink' : 'text-ink'}`}>
                          {row.akashicWay}
                        </span>
                      </div>
                    </div>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </ScrollRevealRail>
    </section>
  );
}
