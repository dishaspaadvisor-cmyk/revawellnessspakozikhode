"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPinterestP,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      {/* Top Accent Border */}
      <div className="h-1 w-full bg-[#7E9957]" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-6 text-3xl font-bold text-[#7E9957]">
              Reva Wellness Spa
            </h3>

            <p className="leading-8 text-[#7E9957]">
              Kerala's premier luxury wellness destination in Kozhikode. Experience world-class 
              spa treatments and therapies at Malaparamba, above Axis Bank.
            </p>

            {/* Social Media */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://in.pinterest.com/orangespaKozhikode12/"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7E9957] transition-all duration-300 hover:bg-orange-700 hover:text-[#7E9957]"
              >
                <FaPinterestP />
              </a>

              <a
                href="https://www.facebook.com/orangespa.Kozhikode/"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7E9957] transition-all duration-300  hover:from-pink-500 hover:bg-[#1877F2] hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://wa.me/919371000458"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7E9957] transition-all duration-300 hover:bg-[#25D366] hover:text-white"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.youtube.com/@Orangespa.Kozhikode"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7E9957] transition-all duration-300 hover:bg-[#FF0000] hover:text-white"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-2xl font-semibold text-[#7E9957]">
              Quick Links
            </h4>

            <ul className="space-y-4 text-[#7E9957]">
              <li>
                <Link href="/" className="transition hover:text-[#7E9957]">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="transition hover:text-[#7E9957]">
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="transition hover:text-[#7E9957]"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="transition hover:text-[#7E9957]"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/offers"
                  className="transition hover:text-[#7E9957]"
                >
                  Offers
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-[#7E9957]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-2xl font-semibold text-[#7E9957]">
              Our Services
            </h4>

            <ul className="space-y-4 text-[#7E9957]">
              <li>
                <Link
                  href="/services"
                  className="transition hover:text-[#7E9957]"
                >
                  Full Body Massage 
                </Link>
             </li>
              <li>
                <Link
                  href="/services"
                  className="transition hover:text-[#7E9957]"
                >
                  Thai Massage
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition hover:text-[#7E9957]"
                >
                  Deep Tissue Massage
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition hover:text-[#7E9957]"
                >
                  Hot Oil Massage
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition hover:text-[#7E9957]"
                >
                  Swedish Massage
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition hover:text-[#7E9957]"
                >
                  Couple Massage
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-2xl font-semibold text-[#7E9957]">
              Contact Info
            </h4>

            <div className="space-y-5 text-[#7E9957]">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="mt-1 text-[#7E9957]" />
                <p>
                  Kozhikode, Malaparamba, Door No. 13/1878, Second Floor, LA GRACE, Above Axis Bank, Malaparamba, Kozhikode - 673009
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#7E9957]" />
                <a
                  href="tel:+918655700236"
                  className="transition hover:text-[#7E9957]"
                >
                  +91 8655700236
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#7E9957]" />
                <a
                  href="mailto:revawellnessspa.kozhikode@gmail.com"
                  className="transition hover:text-[#7E9957]"
                >
                  revawellnessspa.kozhikode@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaClock className="text-[#7E9957]" />
                <span>Monday - Sunday: 10:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#7E9957]">
        <div className="border-t border-[#7E9957]">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-[#7E9957] md:flex-row">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Reva Wellness Spa. All Rights Reserved.
            </p>

            <div className="flex gap-6">
              <Link href="/privacy-policy" className="transition text-[#7E9957] hover:text-[#7E9957]">
                Privacy Policy
              </Link>

              <Link href="/terms" className="transition text-[#7E9957] hover:text-[#7E9957]">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}