import type { Metadata } from "next";
import Image from "next/image";
import { Boxes, ShieldCheck, Store, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { site, reasons } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | WHB Plumbing — Anniston, AL's Plumbing Store & Supply House",
  description:
    "WHB Plumbing is Anniston's local plumbing store & supply house: pipe, fittings, fixtures, water heaters and repair parts for contractors and homeowners on Wilmer Ave.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        title="A plumbing store and supply house in one."
        desc="WHB Plumbing is where Anniston's plumbers and homeowners come for the part — a real counter, deep shelves, and advice you can trust."
      />

      <section className="container-x py-16 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="kicker">Who we are</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              A retail store and a real supply house.
            </h2>
            <p className="mt-5 leading-relaxed text-bark">
              Big-box stores stock a little of everything and know none of it. We do it
              differently. At our counter on Wilmer Ave you&apos;ll find the everyday plumbing you
              actually need — and people who can tell a compression fitting from a sweat fitting
              without looking it up.
            </p>
            <p className="mt-4 leading-relaxed text-bark">
              Bring in the old part or call your list ahead. We&apos;ll match it, confirm
              what&apos;s in stock, apply your contractor pricing, and have it ready at the
              counter. Pros and homeowners, residential and commercial — one store &amp; supply house that
              stands behind what it sells.
            </p>
            <ul className="mt-7 space-y-3.5">
              {[
                { icon: Boxes, text: "Deep in-stock plumbing inventory" },
                { icon: ShieldCheck, text: "Contractor accounts & trade pricing" },
                { icon: Store, text: "Residential & commercial supply" },
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
