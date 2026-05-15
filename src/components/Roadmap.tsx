// Roadmap.tsx
import {
  PencilLine,
  MonitorSmartphone,
  BadgeDollarSign,
  Rocket,
} from "lucide-react";

const roadmapData = [
  {
    id: 1,
    title: "Choose Your Market",
    icon: PencilLine,
    items: [
      "Forex, Crypto, Stocks",
      "Serve global traders",
      "Multi-Market Access",
      "All major instruments",
    ],
    quarter: "Q2",
    year: "2025",
    align: "left",
  },
  {
    id: 2,
    title: "Pick Your Platform",
    icon: BadgeDollarSign,
    items: [
      "Zero Trade",
      "Bridge MT4 / MT5",
      "CRM & back office integration",
      "Zero-latency execution",
    ],
    quarter: "Q3",
    year: "2024",
    align: "center",
  },
  {
    id: 3,
    title: "White Label",
    icon: MonitorSmartphone,
    items: ["Add your logo", "Domain Setup", "Theme Colors", "Unique Identity"],
    quarter: "Q4",
    year: "2025",
    align: "right",
  },
  {
    id: 4,
    title: "Payments & BO",
    icon: Rocket,
    items: [
      "Payment Gateway",
      "Compliance Tools",
      "Automated Reports",
      "Multi-Currency",
    ],
    quarter: "Q5",
    year: "2026",
    align: "bottom",
  },
];

export default function Roadmap() {
  return (
    <section className="relative overflow-hidden bg-[#05051B] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top Label */}
        <p className="mb-3 text-center text-xs tracking-[0.3em] text-gray-400 uppercase">
          Road Map
        </p>

        {/* Heading */}
        <h2 className="mx-auto mb-20 max-w-4xl text-center text-3xl font-semibold leading-tight md:text-5xl">
          Zero Trade Plan: Start Your Brokerage in 5 Simple Steps
        </h2>

        {/* Timeline Wrapper */}
        <div className="relative">
          {/* Glow Curve */}
          <div className="pointer-events-none absolute bottom-12 left-0 hidden h-[220px] w-full md:block">
            <svg viewBox="0 0 1200 300" className="h-full w-full" fill="none">
              <path
                d="M0 180C170 80 320 80 500 180C680 280 870 280 1200 180"
                stroke="url(#paint0_linear)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="0"
                  y1="0"
                  x2="1200"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7C3AED" />
                  <stop offset="0.5" stopColor="#C084FC" />
                  <stop offset="1" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Glow */}
            <div className="absolute inset-x-0 bottom-[110px] h-24 bg-purple-500/20 blur-3xl" />
          </div>

          {/* Desktop Layout */}
          <div className="hidden grid-cols-4 gap-10 md:grid">
            {roadmapData.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className={`relative flex ${
                    index % 2 === 0
                      ? "justify-start pt-0"
                      : "justify-start pt-44"
                  }`}
                >
                  {/* Vertical Line */}
                  <div className="absolute left-6 top-14 h-44 w-px bg-white/10" />

                  {/* Quarter */}
                  <div className="absolute left-14 top-40 text-xs font-semibold leading-tight text-orange-400">
                    {step.quarter}
                    <br />
                    {step.year}
                  </div>

                  {/* Card */}
                  <div className="max-w-[220px]">
                    {/* Icon */}
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#0D0D2B] shadow-[0_0_25px_rgba(139,92,246,0.25)]">
                      <Icon className="h-5 w-5 text-cyan-400" />
                    </div>

                    {/* Title */}
                    <h3 className="mb-5 text-xl font-semibold">{step.title}</h3>

                    {/* List */}
                    <ul className="space-y-3 text-sm text-gray-400">
                      {step.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Layout */}
          <div className="relative flex flex-col gap-10 md:hidden">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 h-full w-px bg-white/10" />

            {roadmapData.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.id} className="relative pl-20">
                  {/* Icon */}
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0D0D2B]">
                    <Icon className="h-5 w-5 text-cyan-400" />
                  </div>

                  {/* Quarter */}
                  <div className="mb-3 text-xs font-semibold text-orange-400">
                    {step.quarter} {step.year}
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-xl font-semibold">{step.title}</h3>

                  {/* List */}
                  <ul className="space-y-2 text-sm text-gray-400">
                    {step.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
