"use client";

import { useEffect, useState } from "react";
import AkashicLogo from "@/components/icons/AkashicLogo";

export default function AkashicPipelineFlow() {
  const [logs, setLogs] = useState<string[]>([
    "System: Akashic Core engine initialized.",
    "Data pipeline listener online (port 443)..."
  ]);
  const [activeStep, setActiveStep] = useState(0); // 0: Ingest, 1: Master, 2: Analytics, 3: Serving

  useEffect(() => {
    const rawLogs = [
      "Ingesting live CRM API streams...",
      "SAP ERP change data capture: 104 updates processed.",
      "Parsing circulars & contracts (Unstructured Engine)...",
      "Entity matching: resolved 'Carlson M.' and 'Carlson Magun' to golden ID.",
      "Master Data Management: Golden Records generated.",
      "Warehouse staging: materialized view refreshed in 41ms.",
      "Lineage rules verification: SUCCESS.",
      "Akashic AI: semantic indexing updated for natural language.",
      "EIS Dashboard: KPI 'Net Attainment' refreshed.",
      "Audit trail persisted to secure compliance ledger."
    ];

    const interval = setInterval(() => {
      setLogs((prev) => {
        const nextLog = rawLogs[Math.floor(Math.random() * rawLogs.length)];
        return [nextLog, ...prev.slice(0, 3)];
      });
      setActiveStep((s) => (s + 1) % 4);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[580px] rounded-frame border border-[#22263F] bg-[#0C0E17] text-[#E1E4ED] shadow-frame overflow-hidden font-sans">
      {/* Decorative inner style block to keep mockup fully self-contained */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes flow-dash {
          to {
            stroke-dashoffset: -40;
          }
        }
        .flow-line {
          stroke-dasharray: 6, 6;
          animation: flow-dash 1.5s linear infinite;
        }
        .flow-line-fast {
          stroke-dasharray: 4, 4;
          animation: flow-dash 0.8s linear infinite;
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 0.3; }
          100% { transform: scale(0.95); opacity: 0.8; }
        }
        .core-pulse {
          animation: pulse-ring 3s cubic-bezier(0.2,0.8,0.2,1) infinite;
        }
      `}} />

      {/* Mock Window Header */}
      <div className="flex items-center justify-between border-b border-[#22263F] bg-[#101321] px-4 py-3 font-mono text-[11px] tracking-wide text-tertiary-text">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#E5484D] opacity-70" />
          <span className="h-2 w-2 rounded-full bg-[#E7CF66] opacity-70" />
          <span className="h-2 w-2 rounded-full bg-[#30A46C] opacity-70" />
          <span className="ml-2 font-medium text-[#8F94B0]">akashic-native-telemetry.sh</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#30A46C] opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#30A46C]"></span>
          </span>
          <span className="text-[#30A46C] font-semibold uppercase tracking-wider text-[9px]">Live Engine</span>
        </div>
      </div>

      <div className="p-5 space-y-5">
        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Left Block: Sources & Core */}
          <div className="space-y-4">
            
            {/* Step 1: Raw Ingestion */}
            <div className={`p-3 rounded-card border transition-colors duration-300 ${activeStep === 0 ? 'bg-[#1C2038] border-[#3E63DD]/50' : 'bg-[#101321] border-[#22263F]'}`}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-tertiary-text uppercase tracking-wider">01 / Ingestion</span>
                <span className={`h-1.5 w-1.5 rounded-full ${activeStep === 0 ? 'bg-[#3E63DD]' : 'bg-transparent'}`} />
              </div>
              <div className="mt-1 font-semibold text-xs text-[#F1F3F9]">Raw Data Pipeline</div>
              <div className="mt-0.5 text-[11px] text-[#8F94B0] font-normal leading-normal">
                APIs, Postgres, SAP ERP & unstructured docs.
              </div>
            </div>

            {/* Step 2: Unify & Master */}
            <div className={`p-3 rounded-card border transition-colors duration-300 ${activeStep === 1 ? 'bg-[#1C2038] border-[#3E63DD]/50' : 'bg-[#101321] border-[#22263F]'}`}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-tertiary-text uppercase tracking-wider">02 / Mastering</span>
                <span className={`h-1.5 w-1.5 rounded-full ${activeStep === 1 ? 'bg-[#3E63DD]' : 'bg-transparent'}`} />
              </div>
              <div className="mt-1 font-semibold text-xs text-[#F1F3F9]">Master Data Engine</div>
              <div className="mt-0.5 text-[11px] text-[#8F94B0] font-normal leading-normal">
                Pattern matching: links identities & cleans data.
              </div>
            </div>

            {/* Step 3: Analytics Store */}
            <div className={`p-3 rounded-card border transition-colors duration-300 ${activeStep === 2 ? 'bg-[#1C2038] border-[#3E63DD]/50' : 'bg-[#101321] border-[#22263F]'}`}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-tertiary-text uppercase tracking-wider">03 / Analytics</span>
                <span className={`h-1.5 w-1.5 rounded-full ${activeStep === 2 ? 'bg-[#3E63DD]' : 'bg-transparent'}`} />
              </div>
              <div className="mt-1 font-semibold text-xs text-[#F1F3F9]">Data Warehouse</div>
              <div className="mt-0.5 text-[11px] text-[#8F94B0] font-normal leading-normal">
                Fast queries and unified metrics warehouse.
              </div>
            </div>

          </div>

          {/* Right Block: Outcomes & Logs */}
          <div className="space-y-4 flex flex-col justify-between">
            
            {/* Step 4: Trusted Outcomes - Chat AI */}
            <div className="p-3 rounded-card border border-[#22263F] bg-[#101321]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-tertiary-text uppercase tracking-wider">04 / Ask AI</span>
                <span className="inline-flex items-center gap-1 text-[9px] text-[#30A46C] bg-[#112F20] border border-[#205C3B] rounded-full px-1.5 py-0.5 font-semibold">
                  <span className="h-1 w-1 rounded-full bg-[#30A46C]" /> Graphene Trust
                </span>
              </div>
              <div className="text-[11px] bg-[#07090F] border border-[#1A1E35] rounded p-2 font-mono text-[#8F94B0]">
                <span className="text-[#3E63DD]">&gt;</span> Ask Akashic: Carlson&apos;s Q2 metrics
              </div>
              <div className="mt-2 text-xs leading-relaxed text-[#F1F3F9]">
                &quot;Net Attainment is <span className="font-semibold text-[#30A46C]">104%</span>. Verified via Master Record ID #7281 (Snowflake).&quot;
              </div>
            </div>

            {/* Step 5: CEO Dashboard Mock */}
            <div className="p-3 rounded-card border border-[#22263F] bg-[#101321]">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[10px] text-tertiary-text uppercase tracking-wider">05 / Executive Dashboard</span>
                <span className="text-[10px] font-mono text-overcast">Live HUD</span>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-[10px] text-[#8F94B0] uppercase">Revenue Q2</div>
                  <div className="text-sm font-semibold font-mono text-white">$18.42M</div>
                </div>
                <div className="flex-1 h-8 overflow-visible flex items-end">
                  {/* Dynamic SVG Sparkline */}
                  <svg width="100%" height="24" viewBox="0 0 100 24" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="spark-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3E63DD" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#3E63DD" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 20 Q 20 18 35 12 T 60 14 T 80 4 T 100 2"
                      fill="none"
                      stroke="#3E63DD"
                      strokeWidth="2"
                    />
                    <path
                      d="M 0 20 Q 20 18 35 12 T 60 14 T 80 4 T 100 2 L 100 24 L 0 24 Z"
                      fill="url(#spark-grad)"
                    />
                    <circle cx="100" cy="2" r="2" fill="#30A46C" />
                  </svg>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Central SVG Connection Pipeline */}
        <div className="relative h-20 w-full bg-[#07090F] border border-[#22263F] rounded-card overflow-hidden">
          <svg width="100%" height="100%" viewBox="0 0 540 80" className="absolute inset-0">
            <defs>
              <linearGradient id="pipe-fade" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3E63DD" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#3E63DD" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3E63DD" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Connecting flow lines */}
            {/* Ingest to Master */}
            <path d="M 40 40 L 140 40" stroke="#1C2038" strokeWidth="2" />
            <path d="M 40 40 L 140 40" stroke="url(#pipe-fade)" strokeWidth="2" className="flow-line" />

            {/* Master to Warehouse */}
            <path d="M 175 40 L 260 40" stroke="#1C2038" strokeWidth="2" />
            <path d="M 175 40 L 260 40" stroke="url(#pipe-fade)" strokeWidth="2" className="flow-line-fast" />

            {/* Warehouse to Output */}
            <path d="M 295 40 L 380 40" stroke="#1C2038" strokeWidth="2" />
            <path d="M 295 40 L 380 40" stroke="url(#pipe-fade)" strokeWidth="2" className="flow-line" />

            {/* Hubs */}
            <g className="cursor-default">
              <circle cx="40" cy="40" r="14" fill="#101321" stroke="#22263F" strokeWidth="1" />
              <text x="40" y="44" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#8F94B0" className="font-mono">ING</text>
              <circle cx="40" cy="40" r="17" fill="none" stroke="#3E63DD" strokeWidth="1" className="core-pulse" style={{ display: activeStep === 0 ? 'block' : 'none' }} />

              <circle cx="158" cy="40" r="18" fill="#101321" stroke="#22263F" strokeWidth="1.5" />
              <g transform="translate(150, 32) scale(0.8)">
                <AkashicLogo className="h-5 w-5 text-white" />
              </g>
              <circle cx="158" cy="40" r="22" fill="none" stroke="#3E63DD" strokeWidth="1" className="core-pulse" style={{ display: activeStep === 1 ? 'block' : 'none' }} />

              <circle cx="278" cy="40" r="15" fill="#101321" stroke="#22263F" strokeWidth="1" />
              <text x="278" y="44" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#8F94B0" className="font-mono">WRH</text>
              <circle cx="278" cy="40" r="18" fill="none" stroke="#3E63DD" strokeWidth="1" className="core-pulse" style={{ display: activeStep === 2 ? 'block' : 'none' }} />

              <circle cx="400" cy="40" r="15" fill="#101321" stroke="#22263F" strokeWidth="1" />
              <text x="400" y="44" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#30A46C" className="font-mono">OUT</text>
              <circle cx="400" cy="40" r="18" fill="none" stroke="#30A46C" strokeWidth="1" className="core-pulse" style={{ display: activeStep === 3 ? 'block' : 'none' }} />
            </g>
          </svg>
          <div className="absolute bottom-1 right-2 text-[9px] font-mono text-tertiary-text uppercase">Data Lineage Flow</div>
        </div>

        {/* Live Shell Logs */}
        <div className="p-3 bg-[#07090F] border border-[#22263F] rounded-card font-mono text-[10.5px] leading-relaxed text-[#59BA89] h-[105px] overflow-hidden">
          <div className="text-tertiary-text text-[9.5px] mb-1 uppercase tracking-wider border-b border-[#22263F] pb-1">CONSOLE ENGINE STATE LOGS</div>
          {logs.map((log, idx) => (
            <div key={idx} className="truncate" style={{ opacity: Math.max(0.3, 1 - idx * 0.22) }}>
              <span className="text-[#3E63DD] mr-1.5">&gt;</span> {log}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
