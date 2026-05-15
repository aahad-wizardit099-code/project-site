// src/components/OurServices.tsx

const services = [
  {
    title: "Own Branded White Label",
    desc: `Forex White Label platform gives the ability to use your own branding on it. It include trading platform in white-label mode and the back office panel for brokers to manage users, exposure, groups, trading instruments, leverage settings, and many more.`,
  },
  //   {
  //     title: "MT5 Grey Label Solution",
  //     desc: `Empower your brand with ready-to-launch Forex grey label solution. Choose from multiple trading platform options, all integrated with advanced features, robust technology, and seamless liquidity access delivering greater value and scalability.`,
  //   },
  {
    title: "Website Design And Development",
    desc: `Our Forex Website is designed to provide brokers with a professional and user-friendly online presence. Our websites are fully customizable, optimized for search engines, and come with integrations and client account portals.`,
  },
  {
    title: "Forex CRM and MAM Solutions",
    desc: `Forex CRM is an all-in-one solution designed to help brokers manage their clients, leads, and affiliates. It offers a wide range of features, including customer profiling, lead management, account opening, affiliate management, and more.`,
  },
  {
    title: "Prop Firm Tech Solutions",
    desc: `Prop firm technology platforms are engineered for speed, reliability, and flexibility. Whether you're executing high-frequency trades, algorithmic strategies, or complex risk management strategies, our platform is designed to handle demanding environments.`,
  },
  //   {
  //     title: "Trading Platform Integration",
  //     desc: `Our Forex Trading Platform Integration service allows brokers to integrate their trading platforms with third-party software such as trading robots, social trading platforms, and other trading tools to provide traders with a diverse trading experience.`,
  //   },
];

export default function OurServices() {
  return (
    <section className="bg-black py-12 text-white md:py-20">
      <div className="mx-auto max-w-[1450px] px-4 md:px-8 lg:px-12">
        {/* TITLE */}
        <h2
          className="
              text-center
              text-[34px]
              font-black
              uppercase
              tracking-wide
              md:text-[52px]
            "
          style={{
            fontFamily: "Georgia, serif",
          }}
        >
          OUR SERVICES
        </h2>

        {/* SERVICES GRID */}
        <div
          className="
              mt-12
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="
                  group
                  relative
                  overflow-hidden
                  bg-[#007b78]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:bg-[#009591]
                  md:p-8
                "
            >
              {/* CARD GLOW */}
              <div
                className="
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                style={{
                  background:
                    "radial-gradient(circle at top, rgba(255,255,255,0.15), transparent 60%)",
                }}
              />

              {/* TITLE */}
              <h3
                className="
                    relative
                    z-10
                    text-center
                    text-[26px]
                    font-black
                    leading-tight
                    md:text-[38px]
                  "
                style={{
                  fontFamily: "Georgia, serif",
                }}
              >
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                    relative
                    z-10
                    mt-6
                    text-center
                    text-[14px]
                    font-semibold
                    leading-7
                    text-white/95
                    md:text-[16px]
                  "
                style={{
                  fontFamily: "Georgia, serif",
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
