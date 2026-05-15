// ServicesSection.tsx

import { CloudUpload, Handshake, ChartNoAxesCombined } from "lucide-react";

const services = [
  {
    title: "CUSTOMIZED TRADING PLATFORM",
    description:
      "Own branded trading platform. Choose from a wide range of customized forex trading platform.",
    icon: ChartNoAxesCombined,
    bg: "bg-[#014d4b]",
  },
  {
    title: "FOREX CRM AND MAM",
    description:
      "Streamline your entire forex brokerage operations with ease in one single platform.",
    icon: Handshake,
    bg: "bg-[#0c8580]",
  },
  {
    title: "WEBSITE DEVELOPMENT",
    description:
      "Get an online presence for your forex brokerage business to reach target audience.",
    icon: CloudUpload,
    bg: "bg-[#014d4b]",
  },
];
const features = [
  {
    icon: "⚙️",
    title: "Free Setup!",
    description:
      "We offer forex brokerage solution at zero setup fee. Pay as you go",
  },
  {
    icon: "∞",
    title: "Unlimited Access",
    description: "Unlimited B-book. Access on Desktop, iOS, Android and Web",
  },
];

export default function ServicesSection() {
  return (
    <>
      {/* SERVICES */}
      <section className="w-full max-w-6xl">
        <div className="grid grid-cols-3 overflow-hidden">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`${service.bg} flex flex-col items-center px-4 py-8 text-center text-white lg:px-6 lg:py-10`}
              >
                {/* ICON */}
                <div className="mb-4 rounded-full bg-white/10 p-3">
                  <Icon
                    className="h-9 w-9 text-white lg:h-11 lg:w-11"
                    strokeWidth={1.8}
                  />
                </div>

                {/* TITLE */}
                <h2 className="max-w-[220px] text-lg font-bold uppercase leading-snug lg:text-2xl">
                  {service.title}
                </h2>

                {/* DESC */}
                <p className="mt-3 max-w-[260px] text-sm leading-6 text-white/90 lg:text-base">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="mx-auto w-full max-w-6xl overflow-hidden bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 border-b border-white/10 px-5 py-7 lg:px-8"
            >
              {/* ICON */}
              <div className="flex h-14 w-14 min-w-[56px] items-center justify-center rounded-full bg-[#008b8b] text-2xl text-black shadow-lg lg:h-16 lg:w-16">
                {feature.icon}
              </div>

              {/* CONTENT */}
              <div>
                <h2 className="text-lg font-bold text-white lg:text-2xl">
                  {feature.title}
                </h2>

                <p className="mt-2 max-w-sm text-sm leading-6 text-white/85 lg:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
