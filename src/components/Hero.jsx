// Hero.tsx
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#4b006e]">
      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* GLOW */}
      <div className="absolute -top-20 -left-20 h-[300px] w-[300px] rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[250px] w-[250px] rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 lg:px-12">
        {/* MAIN LAYOUT */}
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
          {/* LEFT CONTENT */}
          <div className="w-full md:w-[48%] text-center md:text-left">
            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Launch & Power Your Forex
              <br />
              Brokerage <span className="text-yellow-400">End to End</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base lg:text-lg">
              TenxCode gives forex brokers everything they need to launch, run
              and grow — Forex CRM, White Label Trading Platform, Mobile App, IB
              Management, PAMM, Copy Trading and full digital marketing support.
            </p>

            {/* BUTTONS */}
            <div className="mt-7 flex flex-col gap-4 sm:flex-row md:justify-start">
              <button className="rounded-xl bg-yellow-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300 sm:text-base">
                Book a Free Demo →
              </button>

              <button className="rounded-xl border border-yellow-400 px-6 py-3 text-sm font-semibold text-yellow-300 transition hover:bg-yellow-400 hover:text-black sm:text-base">
                Explore Products →
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex h-[420px] w-full items-center justify-center md:w-[52%] lg:h-[520px]">
            {/* BACK PHONE */}
            <div className="absolute left-[10%] top-10 z-10 rotate-[-8deg]">
              <div className="h-[300px] w-[150px] overflow-hidden rounded-[28px] border-[7px] border-black bg-white shadow-2xl sm:h-[340px] sm:w-[170px] lg:h-[430px] lg:w-[210px]">
                {/* NOTCH */}
                <div className="mx-auto mt-2 h-4 w-20 rounded-full bg-black" />

                {/* SCREEN */}
                <div className="bg-[#f7f4fb] p-3">
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] font-semibold sm:text-xs">
                      Settings
                    </span>

                    <div className="h-6 w-6 rounded-full bg-purple-200" />
                  </div>

                  {/* CARD */}
                  <div className="mt-4 rounded-2xl bg-white p-3 shadow">
                    <h3 className="text-[10px] font-bold sm:text-xs">
                      Verify your account
                    </h3>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-200">
                      <div className="h-full w-[20%] rounded-full bg-purple-500" />
                    </div>

                    <span className="mt-2 block text-[9px] font-semibold text-purple-600">
                      20% completed
                    </span>
                  </div>

                  {/* MENU */}
                  <div className="mt-4 space-y-2">
                    {[
                      "Personal",
                      "Professional",
                      "Investment",
                      "Copy Trading",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-lg bg-white p-2 text-[9px] font-medium text-gray-700 shadow-sm sm:text-[10px]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* FRONT PHONE */}
            <div className="absolute right-[8%] top-0 z-20 rotate-[6deg]">
              <div className="relative h-[330px] w-[165px] overflow-hidden rounded-[30px] border-[7px] border-black bg-white shadow-2xl sm:h-[390px] sm:w-[190px] lg:h-[470px] lg:w-[230px]">
                {/* NOTCH */}
                <div className="mx-auto mt-2 h-4 w-20 rounded-full bg-black" />

                {/* HEADER */}
                <div className="px-3 pt-7">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[10px] font-bold sm:text-xs">
                        XAUUSD
                      </h3>

                      <p className="text-[9px] text-green-500">+0.34%</p>
                    </div>

                    <button className="rounded-full bg-purple-100 px-2 py-1 text-[8px] text-purple-600 sm:text-[10px]">
                      Advanced
                    </button>
                  </div>

                  {/* CHART */}
                  <div className="mt-5 h-[150px] sm:h-[180px]">
                    <svg
                      viewBox="0 0 300 200"
                      className="h-full w-full"
                      fill="none"
                    >
                      <path
                        d="M0 30 C20 80,40 10,60 60 S100 130,120 90 S160 40,180 100 S220 170,240 120 S280 40,300 70"
                        stroke="#22c55e"
                        strokeWidth="4"
                      />

                      <path
                        d="M0 70 C20 20,40 90,60 40 S100 10,120 70 S160 120,180 60 S220 20,240 90 S280 140,300 80"
                        stroke="#ef4444"
                        strokeWidth="4"
                      />
                    </svg>
                  </div>
                </div>

                {/* BUY SELL */}
                <div className="absolute bottom-4 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border bg-white p-3 shadow-xl">
                  <div className="flex gap-2">
                    <button className="flex-1 rounded-xl bg-red-500 py-2 text-[10px] font-bold text-white sm:text-xs">
                      SELL
                    </button>

                    <button className="flex-1 rounded-xl bg-green-500 py-2 text-[10px] font-bold text-white sm:text-xs">
                      BUY
                    </button>
                  </div>

                  <p className="mt-2 text-center text-[8px] text-gray-500 sm:text-[10px]">
                    Pending order • SL • TP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
