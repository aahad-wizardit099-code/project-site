// // components/WhyZeroTrade.tsx

// const features = [
//   {
//     id: 1,
//     title: "True White-Label",
//     subtitle: "Make It Yours",
//     color: "from-emerald-400 to-cyan-400",
//     icon: "📱",
//     top: true,
//   },
//   {
//     id: 2,
//     title: "All-in-One Platform",
//     subtitle: "CRM, Payments",
//     color: "from-orange-300 to-orange-500",
//     icon: "📊",
//     top: false,
//   },
//   {
//     id: 3,
//     title: "Zero Downtime",
//     subtitle: "Zero Excuses.",
//     color: "from-violet-500 to-indigo-600",
//     icon: "💳",
//     top: true,
//   },
//   {
//     id: 4,
//     title: "You’re the Brand",
//     subtitle: "We’re the Engine",
//     color: "from-pink-500 to-red-500",
//     icon: "🛡️",
//     top: false,
//   },
//   {
//     id: 5,
//     title: "Fast Setup",
//     subtitle: "Real Support",
//     color: "from-blue-400 to-blue-600",
//     icon: "💠",
//     top: true,
//   },
// ];

// export default function WhyZeroTrade() {
//   return (
//     <section className="relative overflow-hidden bg-[#050326] py-20">
//       {/* BG HEXAGONS */}
//       <div className="absolute left-0 top-0 opacity-20">
//         <HexagonColumn />
//       </div>

//       <div className="absolute right-0 top-0 opacity-20">
//         <HexagonColumn />
//       </div>

//       <div className="mx-auto max-w-7xl px-4">
//         {/* TITLE */}
//         <h2 className="mb-20 text-center text-4xl font-bold text-white md:text-6xl">
//           Why Zero Trade ?
//         </h2>

//         {/* MOBILE VIEW */}
//         <div className="flex flex-col gap-10 lg:hidden">
//           {features.map((item) => (
//             <div
//               key={item.id}
//               className="Whyslide-up rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
//             >
//               <div
//                 className={`mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-5xl shadow-[0_0_40px_rgba(255,255,255,0.25)]`}
//               >
//                 {item.icon}
//               </div>

//               <h3 className="text-center text-2xl font-bold text-white">
//                 {item.title}
//               </h3>

//               <p className="mt-2 text-center text-lg text-zinc-300">
//                 {item.subtitle}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* DESKTOP FLOW */}
//         <div className="relative hidden lg:flex items-center justify-between">
//           {/* SVG PATH */}
//           <svg
//             className="absolute left-0 top-1/2 h-[340px] w-full -translate-y-1/2"
//             viewBox="0 0 1400 340"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {/* START DOT */}
//             <circle cx="20" cy="170" r="10" fill="#6D4AFF" />

//             {/* MAIN CURVED LINE */}
//             <path
//               d="
//       M20 170
//       H140
//       Q190 170 190 120
//       V80
//       Q190 30 240 30
//       H260
//       Q310 30 310 80
//       V260
//       Q310 310 360 310
//       H500
//       Q550 310 550 260
//       V80
//       Q550 30 600 30
//       H620
//       Q670 30 670 80
//       V260
//       Q670 310 720 310
//       H860
//       Q910 310 910 260
//       V80
//       Q910 30 960 30
//       H980
//       Q1030 30 1030 80
//       V120
//       Q1030 170 1080 170
//       H1260
//     "
//               stroke="url(#paint0_linear)"
//               strokeWidth="4"
//               strokeLinecap="round"
//             />

//             {/* END ARROW */}
//             <polygon points="1260,155 1290,170 1260,185" fill="#4F46E5" />

//             {/* GLOW */}
//             <circle cx="20" cy="170" r="20" fill="#6D4AFF20" />

//             <defs>
//               <linearGradient
//                 id="paint0_linear"
//                 x1="0"
//                 y1="0"
//                 x2="1400"
//                 y2="0"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#8B5CF6" />
//                 <stop offset="1" stopColor="#4F46E5" />
//               </linearGradient>
//             </defs>
//           </svg>
//           {/* CARDS */}
//           {features.map((item, index) => (
//             <div
//               key={item.id}
//               className={`relative z-10 flex w-[220px] flex-col items-center ${
//                 item.top ? "-translate-y-24" : "translate-y-24"
//               } ${index % 2 === 0 ? "Whyslide-left" : "Whyslide-right"}`}
//             >
//               {/* GLOW */}
//               <div className="absolute h-40 w-40 rounded-full bg-white/10 blur-3xl" />

//               {/* CIRCLE */}
//               <div
//                 className={`relative flex h-40 w-40 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br ${item.color} shadow-[0_0_50px_rgba(99,102,241,0.4)]`}
//               >
//                 <div className="text-6xl">{item.icon}</div>
//               </div>

//               {/* TEXT */}
//               <div className="mt-6 text-center">
//                 <h3 className="text-3xl font-bold text-white">{item.title}</h3>

//                 <p className="mt-2 text-xl text-zinc-300">{item.subtitle}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* HEXAGONS */
// function HexagonColumn() {
//   return (
//     <div className="flex flex-col gap-5 p-4">
//       {[...Array(6)].map((_, i) => (
//         <div
//           key={i}
//           className="h-14 w-14 border border-violet-500/30"
//           style={{
//             clipPath:
//               "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
//           }}
//         />
//       ))}
//     </div>
//   );
// }
// components/WhyZeroTrade.tsx

// components/WhyZeroTrade.tsx

const features = [
  {
    id: 1,
    title: "True White-Label",
    subtitle: "Make It Yours",
    icon: "📱",
    color: "from-emerald-400 to-cyan-400",
    top: true,
  },
  {
    id: 2,
    title: "All-in-One Platform",
    subtitle: "CRM, Payments",
    icon: "📊",
    color: "from-orange-300 to-orange-500",
    top: false,
  },
  {
    id: 3,
    title: "Zero Downtime",
    subtitle: "Zero Excuses.",
    icon: "💳",
    color: "from-violet-500 to-indigo-600",
    top: true,
  },
  {
    id: 4,
    title: "You’re the Brand",
    subtitle: "We’re the Engine",
    icon: "🛡️",
    color: "from-pink-500 to-red-500",
    top: false,
  },
  {
    id: 5,
    title: "Fast Setup",
    subtitle: "Real Support",
    icon: "💠",
    color: "from-blue-400 to-blue-600",
    top: true,
  },
];

export default function WhyZeroTrade() {
  return (
    <section className="relative overflow-hidden bg-[#050326] py-20 md:py-24 xl:py-28">
      {/* SIDE HEXAGONS */}
      <div className="absolute left-0 top-0 opacity-20">
        <HexagonColumn />
      </div>

      <div className="absolute right-0 top-0 opacity-20">
        <HexagonColumn />
      </div>

      <div className="mx-auto max-w-[1400px] px-4">
        {/* TITLE */}
        <h2 className="mb-16 text-center text-4xl font-bold text-white md:text-5xl xl:text-6xl">
          Why Zero Trade ?
        </h2>

        {/* ================= MOBILE ================= */}
        <div className="flex flex-col gap-8 md:hidden">
          {features.map((item) => (
            <div
              key={item.id}
              className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div
                className={`mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-5xl shadow-[0_0_50px_rgba(99,102,241,0.4)]`}
              >
                {item.icon}
              </div>

              <h3 className="text-center text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-center text-zinc-300">{item.subtitle}</p>
            </div>
          ))}
        </div>

        {/* ================= TABLET + DESKTOP ================= */}
        <div className="relative hidden md:block">
          {/* SVG FLOW LINE */}
          <svg
            className="
              absolute
              left-1/2
              top-1/2
              h-[260px]
              md:w-[900px]
              lg:w-[1100px]
              xl:w-[1250px]
              -translate-x-1/2
              -translate-y-1/2
            "
            viewBox="0 0 1250 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* MAIN PATH */}
            <path
              d="
                M20 130
                C100 130,100 40,180 40
                S260 220,340 220
                S420 40,500 40
                S580 220,660 220
                S740 40,820 40
                S980 130,1180 130
              "
              stroke="url(#paint0_linear)"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* START DOT */}
            <circle cx="20" cy="130" r="10" fill="#7C3AED" />

            {/* END ARROW */}
            <polygon points="1160,115 1195,130 1160,145" fill="#4F46E5" />

            {/* GLOW */}
            <circle cx="20" cy="130" r="24" fill="#7C3AED20" />

            <defs>
              <linearGradient
                id="paint0_linear"
                x1="0"
                y1="0"
                x2="1250"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A855F7" />
                <stop offset="1" stopColor="#4F46E5" />
              </linearGradient>
            </defs>
          </svg>

          {/* CARDS */}
          <div className="relative z-10 flex items-center justify-between gap-2 lg:gap-4">
            {features.map((item) => (
              <div
                key={item.id}
                className={`
                  relative flex flex-col items-center text-center

                  ${
                    item.top
                      ? "-translate-y-14 lg:-translate-y-20"
                      : "translate-y-14 lg:translate-y-20"
                  }
                `}
              >
                {/* OUTER GLOW */}
                <div className="absolute h-36 w-36 rounded-full bg-violet-500/20 blur-3xl lg:h-44 lg:w-44" />

                {/* MAIN CIRCLE */}
                <div
                  className={`
                    relative flex items-center justify-center
                    rounded-full border border-white/20
                    bg-gradient-to-br ${item.color}

                    h-28 w-28
                    lg:h-36 lg:w-36
                    xl:h-40 xl:w-40

                    shadow-[0_0_60px_rgba(99,102,241,0.45)]
                  `}
                >
                  {/* INNER SHADOW */}
                  <div className="absolute inset-3 rounded-full bg-black/10 blur-md" />

                  {/* ICON */}
                  <div className="relative text-4xl lg:text-5xl xl:text-6xl">
                    {item.icon}
                  </div>
                </div>

                {/* TEXT */}
                <div className="mt-5 max-w-[220px]">
                  <h3 className="text-xl font-bold leading-tight text-white lg:text-2xl xl:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-300 lg:text-base xl:text-lg">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= HEXAGONS ================= */

function HexagonColumn() {
  return (
    <div className="flex flex-col gap-5 p-4">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="h-14 w-14 border border-violet-500/20"
          style={{
            clipPath:
              "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
          }}
        />
      ))}
    </div>
  );
}
