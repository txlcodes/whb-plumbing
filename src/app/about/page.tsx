import type { Metadata } from "next";
import Image from "next/image";
import { Boxes, ShieldCheck, Store, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { site, reasons } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | WHB Plumbing — Anniston, AL's Plumbing Repair, Install & Supply Shop",
  description:
    "WHB Plumbing is Anniston's local plumbing shop: licensed repairs and installations plus a full supply counter — pipe, fittings, fixtures, water heaters and repair parts on Wilmer Ave.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        title="Plumbing repair, installation & supply — one shop."
        desc="WHB Plumbing is where Anniston homeowners call for a real repair, and where local plumbers come for the part — the same honest work, either way."
      />

      <section className="container-x py-16 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="kicker">Who we are</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Licensed plumbers, and a real supply counter.
            </h2>
            <p className="mt-5 leading-relaxed text-bark">
              Big-name plumbers will quote you high and sell you a callback. We do it
              differently. Repairs, installs and service calls handled by licensed plumbers who
              give you the price upfront — and if you'd rather do it yourself, our counter on
              Wilmer Ave stocks the everyday plumbing you need.
            </p>
            <p className="mt-4 leading-relaxed text-bark">
              Need a job done? We scope it, quote it, and get it fixed right. Need a part
              instead? Bring in the old one and we&apos;ll match it, confirm what&apos;s in
              stock, and have it ready. Pros and homeowners, residential and commercial — one
              shop that stands behind what it does.
            </p>
            <ul className="mt-7 space-y-3.5">
              {[
                { icon: ShieldCheck, text: "Licensed plumbers for repairs & installs" },
                { icon: Store, text: "Upfront pricing, no surprises" },
                { icon: Boxes, text: "Full supply counter for DIY & trade" },
                { icon: MapPin, text: site.address },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 font-semibold text-char">
                  <span className="bg-grad grid h-9 w-9 shrink-0 place-items-center rounded-lg text-white">
                    <Icon size={16} />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-5">
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="/images/fittings.jpg"
                  alt="Brass plumbing fittings"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="relative h-44 overflow-hidden rounded-lg">
                  <Image
                    src="/images/faucet.jpg"
                    alt="Faucets and fixture trim"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-44 overflow-hidden rounded-lg">
                  <Image
                    src="/images/tools.jpg"
                    alt="Plumbing tools and repair parts"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="container-x">
          <Reveal>
            <span className="kicker">Our promise</span>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">
              What every customer can count on.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 90}>
                <div className="h-full rounded-lg border border-sand bg-linen p-6">
                  <h3 className="text-lg font-bold">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bark">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
