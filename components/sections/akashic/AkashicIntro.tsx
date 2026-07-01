"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import ScrollRevealRail from "@/components/ui/ScrollRevealRail";

const SYSTEM_POINTS = [
  "Data gets ingested and cleaned.",
  "Records are mastered into one version of the truth.",
  "Analytics are structured and always fresh.",
  "Dashboards reflect what is happening now.",
  "AI answers in plain language.",
  "Workflows act on what the data says.",
  "Governance runs across every layer."
];

export default function AkashicIntro() {
  return (
    <section className="rail-container relative w-full overflow-hidden bg-primary-bg pt-16 pb-24 lg:pt-24 lg:pb-32">
      {/* Decorative background element */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-blue/5 to-transparent" />
      
      <ScrollRevealRail className="z-10">
        
        {/* Eyebrow Header */}


        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          
          {/* Main Narrative */}
          <div className="flex flex-col justify-center max-w-[38em]">
            <ScrollReveal delay={80}>
              <h2 className="text-balance text-[38px] font-semibold leading-[1.1] tracking-tighter text-ink md:text-[46px] lg:text-[54px]">
                From raw data to AI-driven outcomes. <br className="hidden sm:block" />
                <span className="text-blue">In real-time.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <p className="mt-8 text-lg leading-relaxed text-secondary-text">
                Akashic is our answer to the modern organisation&apos;s challenge: managing vast amounts of critical data spread across disconnected systems and unstructured formats.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={240}>
              <p className="mt-6 text-lg leading-relaxed text-secondary-text">
                An AI-native engine designed to ingest and harmonise this complexity — transforming disparate information into a single, organised, intelligent asset.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={320}>
              <div className="mt-10 p-8 rounded-2xl bg-white border border-subtle-stroke shadow-sm">
                <p className="text-base font-medium text-ink leading-relaxed">
                  You do not need a different vendor for every layer. <br/>
                  You do not need to build a data organization from scratch. <br/>
                  You do not need another dashboard that nobody trusts.
                </p>
                <div className="mt-6 h-px w-12 bg-blue/30" />
                <p className="mt-6 text-lg font-semibold text-blue leading-relaxed">
                  You need one foundation that turns raw data into decisions you can defend. <br/>
                  Akashic is the complete record of your data, ready to answer.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Feature List */}
          <div className="flex flex-col justify-center">
            <ScrollReveal delay={200}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-ink">It is not a set of tools bolted together.</h3>
                <p className="mt-2 text-base text-inkSoft">It is one governed system where:</p>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {SYSTEM_POINTS.map((point, idx) => (
                <ScrollReveal key={idx} delay={280 + idx * 80}>
                  <div className="flex items-start gap-4 p-4 rounded-xl transition-colors hover:bg-white border border-transparent hover:border-subtle-stroke hover:shadow-sm">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-subtle text-blue">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-base text-ink font-medium leading-relaxed">{point}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>

      </ScrollRevealRail>
    </section>
  );
}
