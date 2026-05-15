// components/TradingPlatformSection.tsx

export default function TradingPlatformSection() {
  return (
    <section className="relative overflow-hidden bg-[#050326] px-4 py-14 md:px-6 lg:px-8">
      {/* LEFT GLOW */}
      <div className="absolute left-[-120px] top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-purple-700/30 blur-[120px]" />

      {/* RIGHT HEXAGONS */}
      <div className="absolute right-10 top-1/2 hidden -translate-y-1/2 lg:flex flex-col gap-10 opacity-30">
        <Hexagon />
        <Hexagon />
        <Hexagon />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:items-center">
        {/* IMAGE */}
        <div className="slide-left w-full md:w-1/2">
          <div className="relative mx-auto w-fit">
            {/* IMAGE GLOW */}
            <div className="absolute inset-0 rounded-[24px] bg-blue-500/20 blur-3xl" />

            {/* PHONE CARD */}
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#08122f] p-2 shadow-[0_0_40px_rgba(59,130,246,0.18)]">
              <img
                src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=900&auto=format&fit=crop"
                alt="Trading Platform"
                className="h-auto w-full max-w-[340px] rounded-[18px] object-cover md:max-w-[380px] lg:max-w-[420px]"
              />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="slide-right w-full md:w-1/2 text-white">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-purple-400 md:text-sm">
            WHAT IS ZERO TRADE
          </p>

          <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            All the Tools You Need.
            <br />
            Next-Generation Trading Platform
          </h2>

          <p className="mb-8 text-sm leading-7 text-zinc-300 md:text-base lg:text-lg lg:leading-8">
            Trade Forex, CFDs, metals, indices, and crypto — all from a single
            account. Enterprise-grade encryption, seamless onboarding, and
            global payment infrastructure built for modern brokers.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 gap-y-4 text-sm font-semibold md:grid-cols-2 md:gap-x-6 md:text-base lg:text-lg">
            <div>Ultra-Low Latency Execution</div>
            <div>360° Client Profiles</div>

            <div>Deep Liquidity</div>
            <div>IB & Affiliate Management</div>

            <div>Real-Time Risk Management</div>
            <div>Global Payment Solutions</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* HEXAGON */
function Hexagon() {
  return (
    <div className="relative h-16 w-16">
      <div
        className="absolute inset-0 border border-purple-500/40"
        style={{
          clipPath:
            "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
        }}
      />
    </div>
  );
}
