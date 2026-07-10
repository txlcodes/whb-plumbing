import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { site, services, steps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Departments | WHB Plumbing — Plumbing Supply in Anniston, AL",
  description:
    "Pipe, fittings & valves, faucets, fixtures, water heaters, tools and repair parts plus contractor will-call — a full plumbing supply house in Anniston, AL. Call (256) 235-9000.",
};

const DETAILS: Record<string, string[]> = {
  "Pipe, Fittings & Valves": [
    "Copper, PVC, PEX, CPVC & galvanized",
    "Couplings, elbows, tees & unions",
    "Ball, gate & shut-off valves",
    "The sizes you actually need, in stock",
  ],
  "Faucets & Trim": [
    "Kitchen & bath faucets",
    "Shower & tub trim",
    "Supply lines, stops & connectors",
    "Cartridges & repair parts to match",
  ],
  "Toilets, Sinks & Tubs": [
    "Toilets, tanks & internals",
    "Sinks, lavatories & tubs",
    "Flanges, gaskets & wax rings",
    "Mounting hardware & hookups",
  ],
  "Water Heaters & Parts": [
    "Tank & tankless water heaters",
    "Thermocouples & heating elements",
    "T&P valves & drain valves",
    "Flex connectors & fittings",
  ],
  "Tools & Repair Parts": [
    "Pipe wrenches, cutters & torches",
    "Solder, flux & pipe dope",
    "Sealants, tape & thread compound",
    "Hard-to-find repair parts",
  ],
  "Contractor Counter & Will-Call": [
    "Trade accounts & contractor pricing",
    "Call-ahead will-call pulls",
    "Special orders on anything we don't stock",
    "In-and-out fast checkout",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Our departments"
        title="Everything plumbing, under one roof."
        desc="From a single repair part to a full contractor list — deep in-stock inventory and a counter that knows what it's selling."
      />

      <section className="container-x py-16 md:py-20">
        <div className="space-y-16">
          {services.map((s, i) => (
            <Reveal key={s.title}>
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative h-72 overflow-hidden rounded-lg md:h-80">
                  <Image src={s.img} alt={s.title} fill className="object-cover" />
                </div>
                <div>
                  <span className="kicker">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="mt-2 text-2xl font-bold md:text-3xl">{s.title}</h2>
                  <p className="mt-3 leading-relaxed text-bark">{s.desc}</p>
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {(DETAILS[s.title] || []).map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm font-semibold text-char">
                        <Check size={16} className="mt-0.5 shrink-0 text-ember" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={site.phoneHref}
                    className="bg-grad mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-bold text-white shadow-lg shadow-ember/25 transition-transform hover:scale-[1.03]"
                  >
                    <Phone size={15} /> Ask about {s.title.toLowerCase()}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="container-x">
          <Reveal>
            <span className="kicker">How it works</span>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">
              From your list to loaded up.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div>
                  <span className="font-display text-5xl font-bold text-sand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bark">{s.desc}</p>
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
