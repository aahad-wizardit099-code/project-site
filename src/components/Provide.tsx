// components/WhiteLabelSections.tsx

const sections = [
  {
    id: 1,
    title: "OWN BRANDED WHITE LABEL",
    image:
      "https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "ADVANCED FOREX SOLUTION",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "PROFESSIONAL TRADING SYSTEM",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "MULTI DEVICE PLATFORM",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "CUSTOM BRAND EXPERIENCE",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ServiceProvided() {
  return (
    <section className="overflow-hidden bg-black px-4 py-14 md:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-16">
        {sections.map((item, index) => {
          const reverse = index % 2 !== 0;

          return (
            <div
              key={item.id}
              className={`flex flex-col gap-10 md:flex-row md:items-center ${
                reverse ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* IMAGE */}
              <div
                className={`w-full md:w-1/2 ${
                  reverse ? "slide-right" : "slide-left"
                }`}
              >
                <div className="relative overflow-hidden rounded-[28px] border border-cyan-400/10 bg-zinc-900 shadow-[0_0_30px_rgba(0,255,255,0.10)]">
                  <div className="absolute inset-0 bg-cyan-400/5 blur-3xl" />

                  <div className="relative p-5 md:p-6 lg:p-8">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full rounded-xl object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div
                className={`w-full md:w-1/2 text-white ${
                  reverse ? "slide-left" : "slide-right"
                }`}
              >
                <h2 className="mb-4 text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
                  {item.title}
                </h2>

                <p className="mb-6 text-sm leading-7 text-zinc-300 md:text-base lg:text-lg">
                  Own branded White label allows you to start a forex brokerage
                  with your own identity and premium trading infrastructure.
                </p>

                <ul className="space-y-3">
                  {[
                    "Own branded White Label",
                    "Branded Live Server",
                    "Unlimited live accounts",
                    "Fully customizable settings",
                    "Android & iOS support",
                  ].map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-zinc-200 md:text-base"
                    >
                      <span className="h-2 w-2 rounded-full bg-cyan-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
