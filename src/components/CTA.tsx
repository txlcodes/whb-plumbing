import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

export default function CTA() {
  return (
    <section className="bg-grad-deep">
      <div className="container-x py-16 md:py-20">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-bold text-linen md:text-4xl">
                Need it today? <span className="text-grad">We&apos;ve probably got it.</span>
              </h2>
              <p className="mt-3 max-w-xl text-sand/80">
                Call your list in, stop by the counter on Wilmer Ave, or send a message — we&apos;ll
                confirm stock and have it ready for pickup.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={site.phoneHref}
                className="bg-grad inline-flex items-center gap-2 rounded-md px-7 py-3.5 font-bold text-white shadow-lg shadow-ember/30 transition-transform hover:scale-[1.03]"
              >
                <Phone size={17} />
                {site.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-sand/40 px-7 py-3.5 font-bold text-linen transition-colors hover:border-glow hover:text-glow"
              >
                Check Stock
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
