"use client";

import { MapPin } from "lucide-react";
import { SITE } from "@/lib/siteConfig";

export default function MapSection() {
  return (
    <section className="bg-gradient-to-b from-green-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span
            className="inline-flex rounded-full px-5 py-2 text-sm font-medium uppercase tracking-[0.2em]"
            style={{
              backgroundColor: "white",
              color: SITE.brand,
            }}
          >
            Find Us
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Visit Reva Wellness Spa
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Conveniently located in the heart of Kozhikode for a premium
            spa and wellness experience.
          </p>
        </div>

        {/* Map Card */}
        <div
          className="overflow-hidden rounded-[32px] bg-white shadow-xl"
          style={{
            border: `1px solid ${SITE.brand}20`,
          }}
        >
          

          {/* Google Map */}
          <div className="h-[350px] md:h-[500px]">
            <iframe
              title="Reva Wellness Spa Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.6542576848783!2d75.79326607498439!3d11.286805849572458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65ea350eadc1d%3A0x10370273783434c6!2sAxis%20Bank%20Branch!5e0!3m2!1sen!2sin!4v1781596537885!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              className="border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}