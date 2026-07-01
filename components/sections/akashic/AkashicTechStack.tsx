"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import ScrollRevealRail from "@/components/ui/ScrollRevealRail";

const FOUNDATIONS = [
  {
    title: "Security",
    desc: "Zero-trust architecture, role-based access control (RBAC), and encryption at rest and in transit."
  },
  {
    title: "Interoperability",
    desc: "API-first design. Connects seamlessly with existing ERPs (SAP, Oracle), CRMs (Salesforce), and custom databases."
  },
  {
    title: "Sovereignty",
    desc: "Options for fully air-gapped deployments. Your data never leaves your borders unless you say so."
  },
  {
    title: "Open Standards",
    desc: "Built on open-source foundations. No vendor lock-in on your own data."
  }
];

const DEPLOYMENT = [
  {
    title: "Cloud Native",
    desc: "Fully managed SaaS on AWS, Azure, or Google Cloud."
  },
  {
    title: "On-Premises / Air-Gapped",
    desc: "For highly classified environments requiring absolute physical control."
  },
  {
    title: "Hybrid",
    desc: "Best of both worlds — sensitive data stays on-prem, anonymised analytics run in the cloud."
  }
];

export default function AkashicTechStack() {
  return (
    <section className="rail-container relative w-full bg-ink pt-16 pb-24 lg:pt-24 lg:pb-32 text-white overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
      
      <ScrollRevealRail className="z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Foundations */}
          <div>
            <ScrollReveal delay={80}>
              <h2 className="text-balance text-[32px] font-semibold leading-[1.1] tracking-tighter text-white md:text-[40px] mb-12">
                Enterprise <span className="text-blue">Foundations.</span>
              </h2>
            </ScrollReveal>

            <div className="space-y-8">
              {FOUNDATIONS.map((item, idx) => (
                <ScrollReveal key={idx} delay={160 + idx * 60}>
                  <div className="flex flex-col border-l-2 border-white/10 pl-6 py-1 transition-colors hover:border-blue">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed text-base">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Deployment */}
          <div>
            <ScrollReveal delay={120}>
              <h2 className="text-balance text-[32px] font-semibold leading-[1.1] tracking-tighter text-white md:text-[40px] mb-12">
                Flexible <span className="text-blue">Deployment.</span>
              </h2>
            </ScrollReveal>

            <div className="space-y-6">
              {DEPLOYMENT.map((item, idx) => (
                <ScrollReveal key={idx} delay={200 + idx * 60}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10">
                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed text-base">{item.desc}</p>
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
