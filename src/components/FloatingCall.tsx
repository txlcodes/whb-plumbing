"use client";

import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function FloatingCall() {
  return (
    <a
      href={site.phoneHref}
      aria-label={`Call ${site.name}`}
      className="bg-grad pulsedot fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-md text-white shadow-xl shadow-ember/40 transition-transform hover:scale-105"
    >
      <Phone size={22} />
    </a>
  );
}
