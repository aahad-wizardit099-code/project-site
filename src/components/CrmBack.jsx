// src/components/CRMBackOffice.tsx

const features = [
  {
    title: "All-in-One Platform",
    desc: "Manage everything from a single, seamless dashboard.",
    color: "bg-emerald-400",
  },
  {
    title: "Turbocharged Onboarding",
    desc: "Automate KYC, lead tracking, and client approvals.",
    color: "bg-orange-400",
  },
  {
    title: "Broker-Only Power",
    desc: "Purpose-built for brokers, fully white-label, zero retail crowd.",
    color: "bg-pink-500",
  },
  {
    title: "Partner Management",
    desc: "Handle IBs, affiliates, commissions, and reporting.",
    color: "bg-blue-500",
  },
  {
    title: "All-in-One Simplicity",
    desc: "Trading, back office, compliance, and payments.",
    color: "bg-lime-400",
  },
  {
    title: "Real-Time Compliance",
    desc: "Instant alerts, audit trails, and built-in regulatory tools.",
    color: "bg-violet-500",
  },
];

export default function CRMBackOffice() {
  return (
    <section className="relative overflow-hidden bg-[#060326] py-20 text-white">
      {/* Glow */}
      <div className="absolute left-[-120px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-violet-700/30 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
            Zero Trade & CyberSec
            <br />
            CRM Back Office
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT SIDE GRAPHIC */}
          <div className="flex items-center justify-center">
            <div className="relative flex items-end gap-6">
              {[1, 2, 3].map((item, i) => (
                <div
                  key={item}
                  className={`relative ${
                    i === 0 ? "h-24 w-24" : i === 1 ? "h-32 w-32" : "h-40 w-40"
                  }`}
                >
                  {/* Base dashed */}
                  <div className="absolute bottom-0 left-1/2 h-14 w-full -translate-x-1/2 rotate-45 rounded-xl border border-cyan-400/70 border-dashed" />

                  {/* Stack */}
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
                    {[...Array(i + 2)].map((_, idx) => (
                      <div
                        key={idx}
                        className="h-6 w-20 rounded-md bg-gradient-to-r from-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                      />
                    ))}

                    {/* Top Circle */}
                    <div className="absolute -top-4 h-5 w-5 rounded-full bg-white shadow-[0_0_15px_white]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="relative">
            {/* Top line */}
            <div className="absolute left-1/2 top-0 hidden h-[2px] w-[75%] -translate-x-1/2 bg-white/10 lg:block" />

            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative rounded-3xl border border-white/5 bg-white/10 p-6 backdrop-blur-md transition duration-300 hover:bg-white/15"
                >
                  {/* Top Dot */}
                  <div
                    className={`absolute -top-2 left-10 h-4 w-4 rounded-full ${feature.color}`}
                  />

                  <h3 className="mb-3 text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-300">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
