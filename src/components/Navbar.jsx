"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "../lib/siteConfig";
import { usePathname } from "next/navigation";
const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/offers", label: "Offers" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F8F7F4] shadow-none">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-24 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center justify-start h-full">
            <div className="relative h-52 w-48 md:h-20 md:w-60">
              <Image
                src="/logo.png"
                alt={SITE.title}
                fill
                priority
                sizes="(max-width: 768px) 192px, 240px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
         <nav className="hidden md:flex items-center gap-8">
  {navItems.map((item) => {
    const isActive = pathname === item.href;

    return (
      <Link
        key={item.href}
        href={item.href}
        className={`relative font-medium transition duration-300 ${
          isActive
            ? "text-[#7E9957]"
            : "text-black hover:text-[#7E9957]"
        }`}
      >
        {item.label}

        {isActive && (
          <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#7E9957]" />
        )}
      </Link>
    );
  })}
</nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${SITE.phoneCall}`}
              className="rounded-full border border-[#7E9957] px-6 py-3 text-sm font-medium text-black transition duration-300 hover:bg-[#7E9957] hover:text-black"
            >
              📞 Call Now
            </a>

            <a
              href={`https://wa.me/${SITE.phoneWhatsApp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-black transition duration-300 hover:opacity-90"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-black md:hidden"
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-[#7E9957]/20 bg-black/95 md:hidden backdrop-blur-xl">
          <div className="flex flex-col px-6 py-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 font-medium text-white transition hover:text-[#7E9957]"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-5 flex flex-col gap-3">
              <a
                href={`tel:${SITE.phoneCall}`}
                className="rounded-full border border-[#7E9957] px-5 py-3 text-center font-medium text-white transition hover:bg-[#7E9957] hover:text-black"
              >
                📞 Call Now
              </a>

              <a
                href={`https://wa.me/${SITE.phoneWhatsApp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#25D366] px-5 py-3 text-center font-medium text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}