// Navbar.tsx

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

// const navItems = [
//   { title: "Forex CRM", dropdown: true },
//   { title: "White Label", dropdown: true },
//   { title: "Services", dropdown: true },
//   { title: "Company", dropdown: true },
//   { title: "contact", dropdown: true },
//   { title: "Blog", dropdown: false },
// ];
const navItems = [
  {
    title: "Forex CRM",
    path: "/forex-crm",
    dropdown: true,
  },
  {
    title: "White Label",
    path: "/white-label",
    dropdown: true,
  },
  {
    title: "Services",
    path: "/services",
    dropdown: true,
  },
  {
    title: "Company",
    path: "/company",
    dropdown: true,
  },
  {
    title: "Contact",
    path: "/contact",
    dropdown: true,
  },
  {
    title: "Blog",
    path: "/blog",
    dropdown: false,
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-[88px] max-w-[1320px] items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <div className="shrink-0">
          <Link to="/">
            <img
              src="/logo.png"
              alt="logo"
              className="h-[52px] w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop + Tablet Menu */}
        <nav className="hidden items-center gap-5 md:flex lg:gap-8">
          {/* {navItems.map((item) => (
            <button
              key={item.title}
              className="group flex items-center gap-1 text-[14px] font-semibold text-[#111827] transition-all hover:text-[#5A176A] lg:text-[16px]"
            >
              {item.title}

              {item.dropdown && (
                <ChevronDown
                  size={16}
                  className="mt-[1px] transition-transform duration-200 group-hover:rotate-180"
                />
              )}
            </button>
          ))} */}
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="group flex items-center gap-1 text-[14px] font-semibold text-[#111827] transition-all hover:text-[#5A176A] lg:text-[16px]"
            >
              {item.title}

              {item.dropdown && (
                <ChevronDown
                  size={16}
                  className="mt-[1px] transition-transform duration-200 group-hover:rotate-180"
                />
              )}
            </Link>
          ))}
          {/* <button className="text-[14px] font-semibold text-[#111827] hover:text-[#5A176A] lg:text-[16px]">
            Contact Us →
          </button> */}

          <button className="rounded-xl bg-[#5A176A] px-4 py-3 text-[14px] font-semibold text-white transition hover:bg-[#491257] lg:px-6 lg:text-[16px]">
            Get Free Demo
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center md:hidden"
        >
          {mobileOpen ? (
            <X size={30} className="text-[#5A176A]" />
          ) : (
            <Menu size={30} className="text-[#5A176A]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-[700px]" : "max-h-0"
        }`}
      >
        <div className="space-y-5 border-t border-gray-200 bg-white px-5 py-6">
          {navItems.map((item) => (
            <button
              key={item.title}
              className="flex w-full items-center justify-between text-left text-[16px] font-semibold text-[#111827]"
            >
              {item.title}

              {item.dropdown && <ChevronDown size={18} />}
            </button>
          ))}

          {/* <button className="block text-[16px] font-semibold text-[#111827]">
            Contact Us →
          </button> */}

          <button className="mt-2 w-full rounded-xl bg-[#5A176A] px-5 py-4 text-[16px] font-semibold text-white">
            Get Free Demo
          </button>
        </div>
      </div>
    </header>
  );
}
