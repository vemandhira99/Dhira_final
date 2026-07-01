"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import ScrollRevealRail from "@/components/ui/ScrollRevealRail";
import ProblemBlock from "@/components/demos/ProblemBlock";

const BLOCKS = [
  {
    eyebrow: "Fragmentation",
    finding: "Data is everywhere. Usable data is rare.",
    detail: "ERP systems, CRMs, IoT feeds, and legacy databases were never built to talk to each other. The same entity appears under five spellings. AI models train on stale data.",
    watermark: "01",
    source: "The Integration Gap",
    sourceUrl: "#",
  },
  {
    eyebrow: "Velocity Trap",
    finding: "AI amplifies bad data — making bad decisions faster.",
    detail: "Teams run analytics, automation, and experiments on parallel copies of the truth. Every new integration requires a new project. Speed compounds the problem.",
    watermark: "02",
    source: "The Velocity Trap",
    sourceUrl: "#",
  },
  {
    eyebrow: "Root Cause",
    finding: "AI can't fix what it can't see.",
    detail: "Rising costs, bad customer experiences, and supply chain disruptions all trace back to one root cause: data that isn't integrated, governed, or actionable.",
    watermark: "03",
    source: "The Reality",
    sourceUrl: "#",
  },
];

export default function AkashicProblem() {
  return (
    <section id="problem" className="relative w-full overflow-clip bg-white pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-[0.035]" />
      <ScrollRevealRail className="z-10">
        
        {/* Eyebrow Header */}
        <ScrollReveal>
          <div className="mb-12 inline-flex items-center rounded-full border border-subtle-stroke bg-primary-bg px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-widest text-inkSoft">
            The Data &amp; AI Problem
          </div>
        </ScrollReveal>

        {/* Asymmetric Layout */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.58fr_1fr] lg:gap-20 lg:pl-16">
          
          {/* Sticky Left Rail */}
          <div className="lg:sticky lg:top-32 self-start">
            <ScrollReveal delay={80}>
              <h2 className="text-balance text-[42px] font-semibold leading-[1.08] tracking-tighter text-ink md:text-[50px] lg:text-[56px]">
                Data is everywhere. <br className="hidden lg:block" />
                <span className="text-red">Usable data is rare.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <p className="mt-8 text-base leading-relaxed text-inkSoft lg:text-lg">
                ERP systems, CRMs, IoT feeds, PDFs, legacy databases — they were never built to talk to each other. The same entity appears under five spellings. AI models train on stale data. Every new integration requires a new project.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <p className="mt-6 text-sm font-medium leading-relaxed text-ink lg:text-base border-l-2 border-red pl-4">
                The real cost of disconnected data — for your business and your AI.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={320}>
              <div className="mt-12 hidden lg:block p-6 bg-primary-bg rounded-xl border border-subtle-stroke">
                <p className="text-sm font-medium text-ink">The common thread:</p>
                <p className="mt-2 text-sm text-inkSoft leading-relaxed">
                  All these challenges trace back to one root cause — data that isn&apos;t integrated, governed, or actionable. And AI can&apos;t fix what it can&apos;t see.
                </p>
                <p className="mt-4 text-sm font-medium text-blue">
                  Akashic fixes the root cause. Everything else follows — including AI that actually works.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Scrolling Cards Right Rail */}
          <div className="relative">
            <div className="relative">
              {BLOCKS.map((block, idx) => (
                <ProblemBlock
                  key={block.eyebrow}
                  index={idx}
                  eyebrow={block.eyebrow}
                  finding={block.finding}
                  detail={block.detail}
                  watermark={block.watermark}
                  source={block.source}
                  sourceUrl={block.sourceUrl}
                />
              ))}
            </div>
            
            {/* Mobile Summary Block */}
            <div className="mt-10 block lg:hidden p-6 bg-primary-bg rounded-xl border border-subtle-stroke">
              <p className="text-sm font-medium text-ink">The common thread:</p>
              <p className="mt-2 text-sm text-inkSoft leading-relaxed">
                All these challenges trace back to one root cause — data that isn&apos;t integrated, governed, or actionable.
              </p>
            </div>
          </div>
        </div>

      </ScrollRevealRail>
    </section>
  );
}
