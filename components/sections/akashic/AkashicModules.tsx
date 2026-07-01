"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ScrollRevealRail from "@/components/ui/ScrollRevealRail";

const EASE = "cubic-bezier(0.4, 0, 0.2, 1)";

const MODULES = [
  { id: "layer-01", num: "01", title: "Data Pipelines", short: "Pipelines", desc: "Automate and scale data ingestion from any structured or unstructured source." },
  { id: "layer-02", num: "02", title: "Master Data", short: "Master", desc: "Create a unified, accurate, and continuously updated view of your core business entities." },
  { id: "layer-03", num: "03", title: "Data Warehouse", short: "Warehouse", desc: "A modern, scalable repository for all your business records, optimized for query performance." },
  { id: "layer-04", num: "04", title: "Semantic Layer", short: "Semantic", desc: "Translate technical data structures into consistent business metrics everyone can understand." },
  { id: "layer-05", num: "05", title: "Akashic BI", short: "BI", desc: "Real-time, interactive analytics and reporting without the need for external visualisation tools." },
  { id: "layer-06", num: "06", title: "Machine Learning", short: "ML", desc: "Build, train, and deploy predictive models securely on your proprietary data." },
  { id: "layer-07", num: "07", title: "Akashic Insights", short: "Insights", desc: "Natural language interface and AI-driven search to uncover hidden trends instantly." },
  { id: "layer-08", num: "08", title: "Workflow", short: "Workflow", desc: "Automate complex data-driven processes and team operations across your enterprise." },
  { id: "layer-09", num: "09", title: "Data Governance", short: "Governance", desc: "Control access, track lineage, manage privacy, and ensure regulatory compliance globally." },
  { id: "layer-10", num: "10", title: "Akashic Edge", short: "Edge", desc: "Deploy analytics and intelligence securely to remote or disconnected environments." }
];

export default function AkashicModules() {
  const [activeId, setActiveId] = useState(MODULES[0].id);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const layer = MODULES.find(m => hash === `#akashic-${m.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`);
      if (layer) setActiveId(layer.id);
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange, { passive: true });
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const displayId = hoveredId ?? activeId;
  const displayModule = MODULES.find(m => m.id === displayId)!;

  return (
    <section className="rail-container relative w-full bg-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden border-t border-lineSoft">
      <ScrollRevealRail className="z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <ScrollReveal delay={80}>
            <h2 className="text-balance text-[38px] font-semibold leading-[1.1] tracking-tighter text-ink md:text-[46px] lg:text-[54px] max-w-[15em]">
              One unified platform. <br className="hidden sm:block" />
              <span className="text-blue">Ten native layers.</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={160}>
            <p className="text-base text-inkSoft max-w-md leading-relaxed">
              Every output feeds the next — automatically. From raw ingestion to governed intelligence. No hand-offs. No custom glue code. No stale data handed to AI.
            </p>
          </ScrollReveal>
        </div>

        {/* Desktop: image strips (left) + fixed text panel (right) */}
        <ScrollReveal delay={200} className="hidden lg:flex h-[540px] border border-lineSoft rounded-xl overflow-hidden bg-primary-bg shadow-sm">
          
          {/* Left: accordion strips */}
          <div className="flex flex-1 overflow-hidden" onMouseLeave={() => setHoveredId(null)}>
            {MODULES.map((mod, idx) => {
              const isTarget = displayId === mod.id;
              const isActive = activeId === mod.id;
              
              // Base blue to dark gradient
              const gradientBase = `linear-gradient(to top, rgba(38, 109, 242, 0.1), rgba(10, 10, 12, 0.05))`;
              
              return (
                <div
                  key={mod.id}
                  id={`akashic-${mod.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  onClick={() => setActiveId(mod.id)}
                  onMouseEnter={() => setHoveredId(mod.id)}
                  className={`relative overflow-hidden ${idx < MODULES.length - 1 ? "border-r border-lineSoft/50" : ""}`}
                  style={{
                    flexGrow: isTarget ? 14 : 1,
                    flexBasis: 0,
                    cursor: isActive ? "default" : "pointer",
                    transition: `flex-grow 800ms ${EASE}`,
                    background: isTarget ? "rgba(38, 109, 242, 0.03)" : "rgba(240, 242, 245, 0.3)",
                  }}
                >
                  <div className="absolute inset-0 dot-grid opacity-10" />
                  
                  {/* Vertical Index Label */}
                  <div
                    className="absolute inset-x-0 bottom-6 flex flex-col items-center justify-end pointer-events-none"
                    style={{
                      opacity: isTarget ? 0 : 1,
                      transition: `opacity 500ms ${EASE}`,
                    }}
                  >
                    <span className="font-mono text-[11px] font-medium tracking-eyebrow text-inkSoft -rotate-90 origin-bottom mb-8 whitespace-nowrap">
                      {mod.short}
                    </span>
                    <span className="font-mono text-[11px] font-bold text-blue">
                      {mod.num}
                    </span>
                  </div>

                  {/* Expanded Content View inside strip */}
                  <div
                    className="absolute inset-0 p-8 flex flex-col justify-end"
                    style={{
                      opacity: isTarget ? 1 : 0,
                      transform: isTarget ? "translateY(0)" : "translateY(20px)",
                      transition: `opacity 600ms ${EASE} 150ms, transform 600ms ${EASE} 150ms`,
                      pointerEvents: isTarget ? "auto" : "none",
                    }}
                  >
                    <div className="w-12 h-12 rounded-full bg-blue text-white flex items-center justify-center font-mono font-bold text-lg mb-6 shadow-md">
                      {mod.num}
                    </div>
                    <div className="relative z-10 w-full max-w-[280px]">
                       <h3 className="text-2xl font-semibold text-ink mb-3">{mod.title}</h3>
                       <p className="text-sm text-inkSoft leading-relaxed bg-white/60 p-4 rounded-lg backdrop-blur-md border border-white">
                         {mod.desc}
                       </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Mobile: standard accordion */}
        <ScrollReveal delay={120} className="lg:hidden">
          <div className="flex flex-col border-t border-lineSoft">
            {MODULES.map((mod) => {
              const isActive = activeId === mod.id;
              return (
                <div
                  key={mod.id}
                  onClick={() => setActiveId(mod.id)}
                  className="relative overflow-hidden border-b border-lineSoft bg-white"
                  style={{
                    height: isActive ? 220 : 76,
                    transition: `height 600ms ${EASE}`,
                    cursor: isActive ? "default" : "pointer",
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 z-20 flex h-[76px] items-center justify-between px-6 bg-white">
                    <h3 className="font-heading text-[18px] font-semibold text-ink">{mod.title}</h3>
                    <span className="font-mono text-[11px] text-blue font-bold tracking-widest">LAYER {mod.num}</span>
                  </div>
                  <div
                    className="absolute top-[76px] left-0 right-0 bottom-0 flex flex-col px-6 pb-6 bg-white"
                    style={{
                      opacity: isActive ? 1 : 0,
                      pointerEvents: isActive ? "auto" : "none",
                      transition: `opacity 400ms ${EASE} ${isActive ? "200ms" : "0ms"}`,
                    }}
                  >
                    <p className="text-sm leading-relaxed text-inkSoft p-4 bg-primary-bg rounded-lg border border-subtle-stroke">
                      {mod.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

      </ScrollRevealRail>
    </section>
  );
}
