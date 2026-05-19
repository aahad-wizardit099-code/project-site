// ContactPage.tsx

import { useState } from "react";
import { MessageCircle, Mail, Phone, Send, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide forex brokerage solutions, CRM systems, trading platforms, and liquidity solutions.",
  },
  {
    question: "How quickly can I start my brokerage?",
    answer:
      "Depending on your package, setup can take anywhere from a few days to a few weeks.",
  },
  {
    question: "Do you provide MT4/MT5 setup?",
    answer:
      "Yes, we provide complete MT4 and MT5 setup and integration services.",
  },
  {
    question: "Can I request a custom package?",
    answer:
      "Absolutely. We can customize solutions based on your business needs and budget.",
  },
  {
    question: "Do you offer technical support?",
    answer:
      "Yes, we offer dedicated technical support and maintenance services.",
  },
  {
    question: "Is liquidity included in the package?",
    answer:
      "Liquidity services can be included depending on your selected package.",
  },
  {
    question: "Which countries do you support?",
    answer:
      "We work with clients globally, including Europe, Asia, Africa, and the Middle East.",
  },
  {
    question: "How can I contact your team?",
    answer:
      "You can contact us through WhatsApp, Email, Skype, Telegram, or the contact form.",
  },
  {
    question: "Do you provide white-label solutions?",
    answer: "Yes, we offer complete white-label brokerage solutions.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-zinc-700 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
      >
        <h3 className="text-white text-lg font-semibold">{question}</h3>

        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && <p className="text-gray-400 mt-4 leading-7 text-sm">{answer}</p>}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-black text-white">
      {/* CONTACT SECTION */}
      <section className="relative overflow-hidden py-24 px-6">
        {/* Background Waves */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[120%] h-[260px] bg-zinc-900 rounded-[100%] rotate-[-8deg] opacity-70" />

          <div className="absolute top-32 left-0 w-[120%] h-[260px] bg-zinc-800 rounded-[100%] rotate-[8deg] opacity-60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          {/* LEFT */}
          <div className="pt-10">
            <h2 className="text-5xl font-bold text-cyan-500 uppercase">
              Contact Us
            </h2>

            <p className="mt-8 text-gray-300 leading-8 max-w-xl">
              Address (Offshore): 4th Floor, Administrative Building, Granby
              Street, Kingstown, St. Vincent and The Grenadines
            </p>

            {/* CONTACT INFO */}
            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-cyan-600 p-3 rounded-full">
                  <Phone size={20} />
                </div>

                <span className="text-gray-300">+44 7441429566</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-cyan-600 p-3 rounded-full">
                  <Mail size={20} />
                </div>

                <span className="text-gray-300">
                  sales@intellifxsolutions.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-cyan-600 p-3 rounded-full">
                  <MessageCircle size={20} />
                </div>

                <span className="text-gray-300">
                  Telegram / Skype Available
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div>
            <h3 className="uppercase text-lg font-semibold mb-8">
              Contact Form
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-sm">Your name*</label>

                <input
                  type="text"
                  className="w-full bg-zinc-800 border border-zinc-700 px-4 py-4 outline-none focus:border-cyan-500 transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">Your email*</label>

                <input
                  type="email"
                  className="w-full bg-zinc-800 border border-zinc-700 px-4 py-4 outline-none focus:border-cyan-500 transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">
                  Phone With Country Code*
                </label>

                <input
                  type="text"
                  className="w-full bg-zinc-800 border border-zinc-700 px-4 py-4 outline-none focus:border-cyan-500 transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">
                  Your message (optional)
                </label>

                <textarea
                  rows={5}
                  className="w-full bg-zinc-800 border border-zinc-700 px-4 py-4 outline-none focus:border-cyan-500 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-cyan-600 hover:bg-cyan-500 transition px-10 py-4 font-semibold uppercase flex items-center gap-3"
              >
                <Send size={18} />
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 px-6 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-400 mt-6">
              Everything you need to know about our brokerage services.
            </p>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl px-8 py-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
