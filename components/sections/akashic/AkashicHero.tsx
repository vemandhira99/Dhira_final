"use client";

import Link from "next/link";
import AkashicLogo from "@/components/icons/AkashicLogo";

export default function AkashicHero() {
  return (
    <section className="relative w-full bg-background pt-32 pb-10 lg:pt-40 lg:pb-12 border-b border-subtle-stroke">
      <div className="rail-container border-x-0">
        
        {/* Centered text block */}
        <div className="flex flex-col items-center justify-center text-center">
            
            <figure className="group relative mb-10 inline-flex items-center justify-center overflow-hidden rounded-full bg-subtle-stroke p-[1px] shadow-sm transition-shadow hover:shadow">
              {/* The spinning proton gradient */}
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_85%,#266DF2_100%)] opacity-75 transition-opacity group-hover:opacity-100" />
              
              {/* Inner pill content */}
              <span className="relative flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1.5 text-xs transition-colors group-hover:bg-white sm:text-sm">
                <span className="inline-flex items-center font-semibold text-primary-text">
                  <AkashicLogo className="h-5 w-5" />
                  <span className="-ml-1">kashic</span>
                </span>
                <span className="mx-1 h-3.5 w-px bg-default-stroke" />
                <span className="font-medium text-primary-text">The Akashic Platform</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-secondary-text ml-0.5 transition-transform group-hover:translate-x-0.5">
                  <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </figure>
            
            <h1 className="max-w-[22em] text-5xl font-semibold leading-[1.05] tracking-tightest text-primary-text md:text-6xl lg:text-7xl">
              Your data tells a story. <br className="hidden md:block" />
              <span className="text-blue">Akashic makes sure it&apos;s the right one.</span>
            </h1>
            
            <p className="mt-8 max-w-[38em] text-lg text-secondary-text md:text-xl font-normal leading-relaxed">
              One unified platform. Ten native layers. Every output feeds the next — automatically.
              <br className="hidden sm:block" />
              From raw ingestion to governed intelligence. No hand-offs. No custom glue code. No stale data handed to AI.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="#talk-to-our-team" className="btn-primary">
                Talk to Our Team
              </Link>
              <Link href="#sectors" className="btn-secondary">
                See It By Sector
              </Link>
            </div>
          </div>
          
      </div>
    </section>
  );
}
