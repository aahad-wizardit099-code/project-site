// src/pages/Services.tsx

export default function Services() {
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
  const features = [
    {
      title: "Comprehensive service:",
      description:
        "Our forex broker solution services includes trading platform, CRM and website design and development.",
    },
    {
      title: "Experienced professionals:",
      description:
        "Our team is made up of experts in the field who have years of experience.",
    },
    {
      title: "Customized solutions:",
      description:
        "We work closely with each of our clients to understand their unique needs and develop customized solutions that are tailored to their specific requirements.",
    },
    {
      title: "Competitive pricing:",
      description:
        "We offer competitive pricing for our services, and we will work with you to develop a package that fits your budget.",
    },
  ];
  return (
    <div className="bg-black text-white">
      {/* HERO SECTION */}
      <section
        className="relative min-h-[520px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1280px] items-center justify-end px-4 md:px-8">
          <div className="max-w-[520px] text-left">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Technology solutions provider for every forex broker
            </h1>

            <h2 className="mb-8 text-2xl font-semibold leading-relaxed md:text-4xl">
              White label and grey label forex solutions
            </h2>

            <button className="bg-[#008b84] px-8 py-4 text-lg font-bold uppercase tracking-wide text-white transition hover:bg-[#00716b]">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-black py-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-16 px-4 md:grid-cols-2 md:px-8">
          {/* Left Icon */}
          <div className="flex justify-center">
            <div className="flex h-[300px] w-[300px] items-center justify-center rounded-full bg-[#008b84]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="h-40 w-40 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="mb-8 text-5xl font-bold">Why Choose Us?</h2>

            <p className="text-2xl leading-[1.9] text-gray-200">
              At Finova, we provide innovative and customized technology
              solutions to help you revolutionize your forex brokerage. With our
              Forex Broker solutions, Forex CRM, and Forex Website solutions,
              you can achieve your business goals faster and more efficiently
              than ever before.
            </p>
          </div>
        </div>
      </section>
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
      <section className="bg-black text-white py-12 px-6 md:px-12">
        <div className="max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 font-serif">
            Features and Benefits:
          </h2>

          <ul className="space-y-6 list-disc pl-6">
            {features.map((item, index) => (
              <li key={index} className="text-lg leading-8 text-gray-100">
                <span className="font-bold text-white">{item.title} </span>
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
