"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import ScrollRevealRail from "@/components/ui/ScrollRevealRail";

const CAPABILITIES = [
  {
    title: "Unified Data Integration",
    desc: "Connects any data source instantly, cleaning and normalising records into a single truth.",
    delivers: "Eliminates data silos and reduces prep time by 80%",
    icon: "M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
  },
  {
    title: "Business Intelligence & Analytics",
    desc: "Built-in semantic layer that translates complex data into real-time interactive dashboards.",
    delivers: "Instant, trusted metrics without relying on data teams",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  },
  {
    title: "AI & Machine Learning Engine",
    desc: "Train, deploy, and monitor predictive models directly on your governed data.",
    delivers: "Accurate predictions, automated insights, and no 'hallucinations'",
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    title: "Workflow & Action Automation",
    desc: "Trigger actions in other systems automatically based on data changes or AI predictions.",
    delivers: "Closed-loop operations where data directly drives action",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
  },
  {
    title: "Enterprise Governance & Security",
    desc: "Granular access controls, full data lineage, and compliance out of the box.",
    delivers: "Complete control over who sees what, always audit-ready",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  }
];

const STATS = [
  { value: "40x", label: "Faster deployment compared to custom builds." },
  { value: "Zero", label: "Data Movement required for AI processing." },
  { value: "100%", label: "Auditability on every model output and decision." },
  { value: "Infinite", label: "Scalability from megabytes to petabytes." }
];

export default function AkashicCapabilities() {
  return (
    <section className="rail-container relative w-full overflow-hidden bg-ink pt-16 pb-24 lg:pt-24 lg:pb-32 text-white">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue/20 via-ink to-ink pointer-events-none" />
      
      <ScrollRevealRail className="z-10">
        


        <ScrollReveal delay={80}>
          <h2 className="text-balance text-[38px] font-semibold leading-[1.1] tracking-tighter text-white md:text-[46px] lg:text-[54px]">
            The foundation that powers <br className="hidden sm:block" />
            <span className="text-blue">everything else.</span>
          </h2>
        </ScrollReveal>

        {/* Capabilities Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, idx) => (
            <ScrollReveal key={cap.title} delay={160 + idx * 80} className={idx === 4 ? "md:col-span-2 lg:col-span-1" : ""}>
              <div className="group h-full flex flex-col justify-between rounded-card border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
                <div>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue/20 text-blue">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={cap.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{cap.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm">{cap.desc}</p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-[10px] font-mono text-blue uppercase tracking-wider mb-2">Delivers</p>
                  <p className="text-white font-medium text-sm leading-relaxed">{cap.delivers}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Built to Perform Stats */}
        <div className="mt-32">
          <ScrollReveal>
            <h3 className="text-2xl font-semibold text-white text-center mb-12">Built to Perform</h3>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {STATS.map((stat, idx) => (
              <ScrollReveal key={idx} delay={200 + idx * 80}>
                <div className="flex flex-col items-center text-center pt-8 sm:pt-0 px-4">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
                    {stat.value}
                  </span>
                  <span className="text-sm text-white/60 leading-relaxed max-w-[200px]">
                    {stat.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </ScrollRevealRail>
    </section>
  );
}
