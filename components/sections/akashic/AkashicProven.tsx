"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import ScrollRevealRail from "@/components/ui/ScrollRevealRail";

const PROOF_POINTS = [
  { metric: "7M+", label: "Citizens Managed" },
  { metric: "20k+", label: "Updates / Sec" },
  { metric: "12", label: "Cross-Ministry Integrations" },
];

function CharminarWatermark() {
  return (
    <svg
      viewBox="10 5 80 90"
      aria-hidden="true"
      className="pointer-events-none absolute -right-[20%] -top-[10%] h-[700px] w-[700px] opacity-[0.12] md:-right-[5%] lg:right-[5%] lg:-top-[15%] lg:h-[900px] lg:w-[900px]"
      style={{ color: "#FF9933" }}
    >
      <g stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Main central arches */}
        <path d="M 35 90 L 35 60 A 15 15 0 0 1 65 60 L 65 90" />
        <path d="M 40 90 L 40 63 A 10 10 0 0 1 60 63 L 60 90" strokeWidth="0.8" />
        
        {/* Main block / base */}
        <rect x="25" y="45" width="50" height="45" />
        
        {/* Balconies / upper levels */}
        <line x1="20" y1="45" x2="80" y2="45" />
        <line x1="22" y1="38" x2="78" y2="38" />
        <rect x="25" y="38" width="50" height="7" />
        
        {/* Left Minaret */}
        <rect x="18" y="25" width="8" height="65" />
        <rect x="16" y="20" width="12" height="5" />
        <path d="M 16 20 C 16 12 28 12 28 20" /> {/* Dome */}
        <circle cx="22" cy="11.5" r="1.5" fill="currentColor" stroke="none" /> {/* Finial */}
        
        {/* Right Minaret */}
        <rect x="74" y="25" width="8" height="65" />
        <rect x="72" y="20" width="12" height="5" />
        <path d="M 72 20 C 72 12 84 12 84 20" /> {/* Dome */}
        <circle cx="78" cy="11.5" r="1.5" fill="currentColor" stroke="none" /> {/* Finial */}

        {/* Inner small minarets (central roof) */}
        <rect x="32" y="32" width="6" height="6" />
        <path d="M 31 32 C 31 27 39 27 39 32" />
        
        <rect x="62" y="32" width="6" height="6" />
        <path d="M 61 32 C 61 27 69 27 69 32" />
        
        {/* Decorative lines on the main block */}
        <line x1="25" y1="52" x2="35" y2="52" strokeWidth="0.8" />
        <line x1="65" y1="52" x2="75" y2="52" strokeWidth="0.8" />
        
        <line x1="25" y1="60" x2="35" y2="60" strokeWidth="0.8" />
        <line x1="65" y1="60" x2="75" y2="60" strokeWidth="0.8" />
        
        <line x1="25" y1="68" x2="35" y2="68" strokeWidth="0.8" />
        <line x1="65" y1="68" x2="75" y2="68" strokeWidth="0.8" />
        
        <line x1="25" y1="76" x2="35" y2="76" strokeWidth="0.8" />
        <line x1="65" y1="76" x2="75" y2="76" strokeWidth="0.8" />
      </g>
    </svg>
  );
}

export default function AkashicProven() {
  return (
    <section className="rail-container relative overflow-hidden bg-white pt-16 pb-24 lg:pt-24 lg:pb-32 border-t border-subtle-stroke">
      
      {/* Warm glow */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] blur-[110px]"
        style={{ background: "radial-gradient(circle, rgba(215,155,60,0.09), transparent 70%)" }}
      />
      
      <CharminarWatermark />

      <ScrollRevealRail className="z-10 relative">

        <ScrollReveal delay={80}>
          <h2 className="text-balance text-[38px] font-semibold leading-[1.1] tracking-tighter text-ink md:text-[46px] lg:text-[54px] max-w-[18em] mb-4">
            Akashic is not a theoretical platform.
          </h2>
          <p className="text-xl text-inkSoft max-w-2xl mb-16 font-medium">
            It runs <span className="text-blue">national-scale infrastructure.</span>
          </p>
        </ScrollReveal>

        {/* High-Contrast STATS BAND */}
        <ScrollReveal delay={120}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px overflow-hidden rounded-card border border-ink/10 bg-ink/10">
            {PROOF_POINTS.map((s, idx) => (
              <div key={idx} className="bg-ink p-8 lg:p-12 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-4xl font-semibold tracking-tight tabular-nums text-white lg:text-5xl xl:text-6xl mb-3 relative z-10">
                  {s.metric}
                </div>
                <div className="text-sm font-medium text-white/60 tracking-wider uppercase relative z-10">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Footer Details */}
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-12 border-t border-lineSoft">
            <div>
              <h4 className="text-sm font-bold text-ink uppercase tracking-wider mb-2">Education Ministry</h4>
              <p className="text-sm text-inkSoft leading-relaxed">
                Akashic powers the central data backbone for a major Middle Eastern Ministry of Education, connecting students, teachers, and administration in real time.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-ink uppercase tracking-wider mb-2">Cross-Government Governance</h4>
              <p className="text-sm text-inkSoft leading-relaxed">
                Currently deployed across a federal government to provide secure data exchange between 12 distinct ministries, fully compliant with national data sovereignty laws.
              </p>
            </div>
          </div>
        </ScrollReveal>

      </ScrollRevealRail>
    </section>
  );
}
