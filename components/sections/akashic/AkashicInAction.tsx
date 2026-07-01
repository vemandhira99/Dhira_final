"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import ScrollRevealRail from "@/components/ui/ScrollRevealRail";

const INDUSTRIES = [
  {
    name: "Healthcare",
    desc: "Unifying electronic health records (EHRs) across 15 hospital networks into a single, real-time patient timeline.",
    icon: "M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" // Actually, let's use simple geometric icons or standard heroicons. I'll use generic paths.
  },
  {
    name: "Manufacturing",
    desc: "Integrating IoT sensor data with supply chain logistics to predict and prevent machine failure before it happens.",
  },
  {
    name: "Government",
    desc: "Creating a secure, citizen-centric view across 40 disparate ministries to streamline public service delivery.",
  },
  {
    name: "Financial Services",
    desc: "Automating KYC (Know Your Customer) compliance by linking unstructured identity documents with transactional data in real time.",
  }
];

export default function AkashicInAction() {
  return (
    <section className="rail-container relative w-full bg-primary-bg pt-16 pb-24 lg:pt-24 lg:pb-32">
      <ScrollRevealRail className="z-10">
        <ScrollReveal delay={80}>
          <h2 className="text-balance text-[38px] font-semibold leading-[1.1] tracking-tighter text-ink md:text-[46px] lg:text-[54px] mb-16">
            Built for <span className="text-blue">complexity.</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {INDUSTRIES.map((industry, idx) => (
            <ScrollReveal key={industry.name} delay={160 + idx * 80}>
              <div className="group rounded-2xl border border-subtle-stroke bg-white p-8 transition-shadow hover:shadow-card hover:border-default-stroke h-full flex flex-col justify-center">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-tertiary-bg text-ink">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {/* Generic abstract shape */}
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-ink">{industry.name}</h3>
                </div>
                <p className="text-secondary-text leading-relaxed text-base">
                  {industry.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollRevealRail>
    </section>
  );
}
