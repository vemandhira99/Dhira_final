"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ScrollRevealRail from "@/components/ui/ScrollRevealRail";

export default function AkashicClosing() {
  return (
    <section className="rail-container relative w-full bg-white pt-24 pb-32 lg:pt-32 lg:pb-40 text-center overflow-hidden">
      <ScrollRevealRail className="z-10 flex flex-col items-center justify-center max-w-[800px] mx-auto">
        


        <ScrollReveal delay={80}>
          <h2 className="text-balance text-[42px] font-semibold leading-[1.08] tracking-tighter text-ink md:text-[54px] lg:text-[64px] mb-8">
            Your data is your most valuable asset. <br className="hidden md:block" />
            <span className="text-blue">Stop treating it like a liability.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <p className="text-lg md:text-xl text-secondary-text leading-relaxed max-w-2xl mb-12">
            Akashic is the only platform that provides the foundation you need to survive the AI transition and dominate your market.
            <br /><br />
            <span className="font-semibold text-ink">Don&apos;t build another pipeline. Build a brain for your business.</span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#request-demo" className="btn-primary w-full sm:w-auto text-base px-8 py-4">
              Request a Demo
            </Link>
            <Link href="#whitepaper" className="btn-secondary w-full sm:w-auto text-base px-8 py-4">
              Read Technical Whitepaper
            </Link>
          </div>
        </ScrollReveal>

      </ScrollRevealRail>
    </section>
  );
}
