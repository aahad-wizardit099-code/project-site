// Footer.tsx
import { Phone } from "lucide-react";

const importantLinks = [
  "Standard Do's & Don'ts",
  "Refund Policy",
  "Terms and Conditions",
  "User Consent",
  "Legal Disclaimer",
  "Investor Charter",
  "Advertisement Disclaimer",
];

const packages = [
  "Index Basic",
  "Index Pro",
  "Index Club Option",
  "Equity Basic",
  "Equity Pro",
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#020817] text-gray-300 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* LEFT SECTION */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-400 via-orange-500 to-green-500 p-[2px] shadow-lg">
                <div className="w-full h-full rounded-xl bg-[#020817] flex items-center justify-center">
                  <div className="relative flex items-end gap-[3px]">
                    <span className="w-1.5 h-5 bg-green-400 rounded-full"></span>
                    <span className="w-1.5 h-8 bg-lime-400 rounded-full"></span>
                    <span className="w-1.5 h-11 bg-yellow-400 rounded-full"></span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-extrabold tracking-wide">
                  <span className="text-yellow-400">T</span>
                  <span className="text-orange-400">W</span>
                  <span className="text-yellow-400">M</span>
                </h2>

                <p className="text-green-400 text-lg font-medium -mt-1">
                  Research Alert
                </p>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-3 text-[17px] leading-relaxed">
              <p className="font-medium text-white">
                Suryansh Singh Chandel — SEBI
              </p>

              <p className="text-green-400 font-medium">
                Registration No. INH000010821
              </p>

              <p className="max-w-sm text-gray-400">
                1719-Milano, Mahagun Mascot,
                <br />
                Crossings Republik, Ghaziabad, UP 201016
              </p>

              <div className="flex items-center gap-2 pt-1">
                <Phone size={17} className="text-red-500" />
                <span className="text-white">9769960695</span>
              </div>
            </div>
          </div>

          {/* IMPORTANT LINKS */}
          <div>
            <h3 className="text-green-400 uppercase tracking-[3px] text-sm font-bold mb-6">
              Important Links
            </h3>

            <ul className="space-y-5">
              {importantLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-200 text-[17px]"
                  >
                    • {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* PACKAGES */}
          <div>
            <h3 className="text-green-400 uppercase tracking-[3px] text-sm font-bold mb-6">
              Packages
            </h3>

            <ul className="space-y-5">
              {packages.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-200 text-[17px]"
                  >
                    • {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-14 border-t border-white/10"></div>
      </div>
      {/* ================= BOTTOM CONTENT ================= */}
      <div className="mt-14 border-t border-white/10 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* TERMS */}
          <div>
            <h3 className="text-white text-2xl font-semibold mb-6">
              Terms & Conditions Summary
            </h3>

            <ol className="space-y-5 text-gray-400 text-[16px] leading-8 list-decimal pl-5">
              <li>
                <span className="font-semibold text-white">
                  Service Nature:
                </span>{" "}
                TWM Research Alert provides independent equity research
                services. Information is for informational purposes only and
                should not be construed as investment advice.
              </li>

              <li>
                <span className="font-semibold text-white">
                  User Responsibilities:
                </span>{" "}
                Users are solely responsible for their trading and investment
                decisions. No returns are guaranteed.
              </li>

              <li>
                <span className="font-semibold text-white">
                  No Refund Policy:
                </span>{" "}
                All payments are final. A strict no-refund policy is maintained
                under any circumstances.
              </li>

              <li>
                <span className="font-semibold text-white">
                  Intellectual Property:
                </span>{" "}
                All content is the intellectual property of TWM Research Alert.
                Unauthorized reproduction is prohibited.
              </li>

              <li>
                <span className="font-semibold text-white">
                  Limitation of Liability:
                </span>{" "}
                TWM Research Alert and affiliates are not liable for losses
                arising from use of their services.
              </li>

              <li>
                <span className="font-semibold text-white">Compliance:</span>{" "}
                Users must comply with all applicable laws and regulations.
              </li>

              <li>
                <span className="font-semibold text-white">Jurisdiction:</span>{" "}
                Governed by the laws of India. Disputes subject to courts in
                Nashik, Maharashtra.
              </li>
            </ol>
          </div>

          {/* PRIVACY */}
          <div>
            <h3 className="text-white text-2xl font-semibold mb-6">
              Privacy Policy Summary
            </h3>

            <ol className="space-y-5 text-gray-400 text-[16px] leading-8 list-decimal pl-5">
              <li>
                <span className="font-semibold text-white">
                  Information Collection:
                </span>{" "}
                TWM Research Alert collects personal information including
                names, contact details, and information provided during service
                use.
              </li>

              <li>
                <span className="font-semibold text-white">
                  Use of Information:
                </span>{" "}
                Used to provide and improve services, communicate with clients,
                and comply with legal obligations.
              </li>

              <li>
                <span className="font-semibold text-white">
                  Information Sharing:
                </span>{" "}
                Personal information is not shared with third parties except as
                required by law or with explicit consent.
              </li>

              <li>
                <span className="font-semibold text-white">Data Security:</span>{" "}
                Appropriate security measures protect personal information from
                unauthorized access or disclosure.
              </li>

              <li>
                <span className="font-semibold text-white">
                  Policy Changes:
                </span>{" "}
                TWM Research Alert reserves the right to update their Privacy
                Policy. Clients are encouraged to review periodically.
              </li>
            </ol>
          </div>
        </div>

        {/* DISCLAIMER */}
        <div className="mt-16 border-t border-white/10 pt-10 text-center">
          <p className="text-gray-400 leading-8 text-[15px] max-w-5xl mx-auto">
            <span className="text-green-400 font-semibold">
              Attention Investors!
            </span>{" "}
            Investment in securities market is subject to market risk. We do not
            offer any guaranteed profit service. Before taking expert advice and
            any services with TWM Research Alert, clients should read the
            disclaimer, terms and conditions, disclosure, and refund policy. We
            do not accept advisory fees in any personal or individual bank
            account — all payments should be made in favor of TWM Research
            Alert. Risk of loss in trading and investment can be substantial.
            TWM Research Alert attempts to provide the best suitable research
            and trading ideas per technical and derivative analysis. TWM
            Research Alert and any of its employees shall not be liable for
            losses, if any, incurred by you.
          </p>

          <p className="mt-8 text-gray-500 text-sm">
            twmresearchalert.com © Copyright 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
