// src/components/Infographic.tsx

import {
  BriefcaseBusiness,
  Star,
  Handshake,
  BadgeDollarSign,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

const stats = [
  {
    icon: <BriefcaseBusiness size={22} />,
    value: "150+",
    label: "Projects Delivered",
  },
  {
    icon: (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} fill="#00c2c7" stroke="#00c2c7" />
        ))}
      </div>
    ),
    value: "100+",
    label: "Satisfied Customers",
  },
  {
    icon: <Handshake size={22} />,
    value: "90%",
    label: "Customer Retention",
  },
  {
    icon: <BadgeDollarSign size={22} />,
    value: "3",
    label: "Years & Growing",
  },
];

const socials = [
  <Mail size={20} />,
  <MessageCircle size={20} />,
  <Phone size={20} />,
  <Send size={20} />,
];

export default function Infographic() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* TOP CURVE */}
      <div className="absolute left-0 top-0 h-[120px] w-[320px] rounded-br-[200px] bg-white/5 blur-sm" />

      <div className="mx-auto max-w-[1400px] px-4 py-10 md:px-8 lg:px-14">
        {/* TITLE */}
        <h2
          className="
              text-center
              text-[28px]
              font-black
              uppercase
              tracking-wide
              md:text-[38px]
            "
          style={{
            fontFamily: "Georgia, serif",
          }}
        >
          INFOGRAPHIC
        </h2>

        {/* STATS */}
        <div
          className="
              mt-10
              grid
              grid-cols-2
              gap-y-12
              md:grid-cols-4
            "
        >
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* ICON CIRCLE */}
              <div
                className="
                    flex
                    h-[48px]
                    w-[48px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#00aeb3]
                    text-black
                  "
              >
                {item.icon}
              </div>

              {/* VALUE */}
              <h3
                className="
                    mt-6
                    text-[42px]
                    font-black
                    leading-none
                    md:text-[60px]
                  "
                style={{
                  fontFamily: "Georgia, serif",
                }}
              >
                {item.value}
              </h3>

              {/* LABEL */}
              <p
                className="
                    mt-3
                    text-[16px]
                    font-bold
                    md:text-[20px]
                  "
                style={{
                  fontFamily: "Georgia, serif",
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION */}
        <div
          className="
              mt-20
              grid
              items-center
              gap-16
              lg:grid-cols-2
            "
        >
          {/* LEFT */}
          <div className="flex flex-col items-center">
            <h3
              className="
                  text-center
                  text-[28px]
                  font-black
                  uppercase
                  leading-snug
                  md:text-[38px]
                "
              style={{
                fontFamily: "Georgia, serif",
              }}
            >
              NEED HELP! WE ARE HERE FOR YOU
            </h3>

            {/* SUPPORT IMAGE */}
            <div
              className="
                  mt-8
                  flex
                  h-[160px]
                  w-[160px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  bg-[#3d99a0]
                "
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                alt="support"
                className="h-[120px] w-[120px] object-contain"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center">
            {/* SOCIAL ICONS */}
            <div className="flex flex-wrap justify-center gap-6">
              {socials.map((icon, index) => (
                <div
                  key={index}
                  className="
                      flex
                      h-[56px]
                      w-[56px]
                      items-center
                      justify-center
                      rounded-full
                      bg-[#00aeb3]
                      text-black
                    "
                >
                  {icon}
                </div>
              ))}
            </div>

            {/* TEXT */}
            <h3
              className="
                  mt-10
                  max-w-[700px]
                  text-center
                  text-[24px]
                  font-black
                  uppercase
                  leading-relaxed
                  md:text-[38px]
                "
              style={{
                fontFamily: "Georgia, serif",
              }}
            >
              24 X 7 CUSTOMER SUPPORT ON WHATSAPP AND SKYPE
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
