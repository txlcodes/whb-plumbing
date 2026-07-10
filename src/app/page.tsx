import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  Droplets,
  ShowerHead,
  Gauge,
  Wrench,
  Boxes,
  Store,
  Handshake,
  Warehouse,
  ShieldCheck,
  Check,
  MapPin,
  Quote,
  X,
  Clock,
  Navigation,
  CalendarClock,
  PackageCheck,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import StatCounter from "@/components/StatCounter";
import WaterParticles from "@/components/WaterParticles";
import {
  site,
  serviceStrip,
  painPoints,
  valueProps,
  expectBullets,
  services,
  steps,
  trustBadges,
  testimonials,
  areas,
  faqs,
} from "@/lib/site";

const STRIP_ICON = {
  droplets: Droplets,
  showerhead: ShowerHead,
  gauge: Gauge,
  wrench: Wrench,
} as const;
const VALUE_ICON = {
  boxes: Boxes,
  store: Store,
  handshake: Handshake,
  warehouse: Warehouse,
  wrench: Wrench,
} as const;

const STATS = [
  { value: 14, suffix: "", label: "Towns We Serve" },
  { value: 2, suffix: "", label: "Services & Supply, One Call" },
  { value: 6, suffix: "", label: "Repairs, Installs & Departments" },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO (split: content + red form card) ============ */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/pipes.jpg"
          alt="Chrome plumbing fixtures and fittings"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-soot/95 via-soot/90 to-soot/70" />
        <div className="container-x relative grid items-center gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <Reveal variant="left">
            <span className="inline-flex items-center gap-2 rounded-md bg-ember/20 px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-glow ring-1 ring-ember/40">
              <Wrench size={13} /> Anniston&apos;s Repair Plumber
            </span>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.05] text-linen sm:text-5xl lg:text-[3.4rem]">
              Got a Leak? Call a{" "}
              <span className="text-grad">Real Repair Plumber</span>
            </h1>
            <p className="mt-5 max-w-xl leading-relaxed text-sand/85">
              Licensed plumbers who show up, diagnose it right, and give you the price before
              they touch a wrench. Repairs, installs and service calls for homeowners and
              contractors across Calhoun County — plus a supply counter if you'd rather do it
              yourself.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-sand/85">
              A leaking pipe, a broken water heater, a drain that won&apos;t clear — call the
              job in and we&apos;ll get it fixed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.phoneHref}
                className="bg-grad btn-shine inline-flex items-center gap-2 rounded-md px-7 py-4 font-bold uppercase tracking-wide text-white shadow-xl shadow-ember/30 transition-transform hover:scale-[1.03]"
              >
                <Phone size={18} /> Call a Plumber Now
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/5 px-7 py-4 font-bold uppercase tracking-wide text-linen backdrop-blur transition-colors hover:border-glow hover:text-glow"
              >
                Our Repair Services <ArrowRight size={17} />
              </Link>
            </div>
          </Reveal>

          <Reveal variant="right" delay={140}>
            <div className="card-lift relative h-[19rem] overflow-hidden rounded-lg shadow-2xl shadow-black/40 ring-1 ring-white/10 md:h-[23rem]">
              <Image
                src="/images/whb-truck.jpg"
                alt="WHB Plumbing service van"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-soot/90 to-transparent p-5">
                <p className="text-sm font-bold uppercase tracking-wide text-linen">
                  On the road across Calhoun County
                </p>
                <a href={site.phoneHref} className="mt-1 block text-2xl font-bold text-glow">
                  {site.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ RED SERVICE STRIP ============ */}
      <section className="bg-grad">
        <div className="container-x grid grid-cols-2 gap-px lg:grid-cols-4">
          {serviceStrip.map((s, i) => {
            const Icon = STRIP_ICON[s.icon as keyof typeof STRIP_ICON];
            return (
              <Reveal key={s.label} variant="up" delay={i * 90}>
                <Link
                  href="/services"
                  className="group flex flex-col items-center gap-3 px-4 py-8 text-center text-white transition-colors hover:bg-white/10"
                >
                  <Icon size={40} strokeWidth={1.4} className="transition-transform duration-300 group-hover:-translate-y-1" />
                  <span className="text-[0.95rem] font-bold uppercase tracking-wide">
                    {s.label}
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ============ PROBLEM / SOLUTION + VALUE GRID ============ */}
      <section className="container-x py-20 md:py-24">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal variant="left">
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Tired of Plumbers Who Never{" "}
              <span className="text-ember">Show Up?</span>
            </h2>
            <p className="mt-5 leading-relaxed text-bark">
              Whether you need a repair done right or just the part to do it yourself, the last
              thing you need is another runaround. We hear the same frustrations across Anniston
              and Calhoun County:
            </p>
            <ul className="mt-6 space-y-3">
              {painPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[0.95rem] text-char">
                  <X size={18} className="mt-0.5 shrink-0 text-ember" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-semibold text-soot">
              That&apos;s exactly why Calhoun County pros and homeowners call WHB Plumbing.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {valueProps.map((v, i) => {
              const Icon = VALUE_ICON[v.icon as keyof typeof VALUE_ICON];
              return (
                <Reveal key={v.title} variant="scale" delay={i * 90}>
                  <div className="card-lift h-full rounded-lg border border-sand bg-cream p-6 text-center">
                    <span className="bg-grad mx-auto grid h-14 w-14 place-items-center rounded-full text-white shadow-lg shadow-ember/25">
                      <Icon size={24} />
                    </span>
                    <h3 className="mt-4 text-base font-bold uppercase tracking-wide">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-bark">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ INTEGRITY BLOCK ============ */}
      <section className="bg-linen py-20 md:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              A Supply House Built for the Trade, <span className="text-ember">Not the Big-Box Aisle</span>
            </h2>
            <p className="mt-5 leading-relaxed text-bark">
              We stock the everyday plumbing you actually reach for and staff the counter with
              people who know it. No wandering endless aisles, no blank stares — just the right
              part and straight answers.
            </p>
            <p className="mt-4 font-semibold text-soot">Here&apos;s what you can expect:</p>
            <ul className="mt-4 space-y-3">
              {expectBullets.map((b) => (
                <li key={b} className="flex items-start gap-3 font-semibold text-char">
                  <Check size={18} className="mt-0.5 shrink-0 text-ember" />
                  {b}
                </li>
              ))}
            </ul>
            <a
              href={site.phoneHref}
              className="bg-grad btn-shine mt-7 inline-flex items-center gap-2 rounded-md px-7 py-4 font-bold uppercase tracking-wide text-white shadow-lg shadow-ember/30 transition-transform hover:scale-[1.03]"
            >
              <Phone size={17} /> Call Now
            </a>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <div className="card-lift relative h-[24rem] overflow-hidden rounded-lg shadow-xl md:h-[28rem]">
              <Image
                src="/images/fittings.jpg"
                alt="Brass plumbing fittings"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ WELCOME (black, overlapping images + Three.js particles) ============ */}
      <section className="relative overflow-hidden bg-soot py-20 md:py-24">
        <WaterParticles className="z-0 opacity-70" />
        <div className="container-x relative z-10 grid items-center gap-14 lg:grid-cols-2">
          <Reveal variant="left">
            <div className="relative">
              <div className="relative h-[24rem] w-full overflow-hidden rounded-lg shadow-2xl md:h-[26rem]">
                <Image
                  src="/images/repair-plumber.jpg"
                  alt="WHB Plumbing repair plumber on the job"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="floaty absolute -bottom-8 right-4 h-40 w-56 overflow-hidden rounded-lg border-4 border-soot shadow-2xl md:right-0 md:h-48 md:w-64">
                <Image
                  src="/images/tools.jpg"
                  alt="Plumbing tools and repair parts"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-glow">
              Welcome To
            </span>
            <h2 className="mt-2 text-3xl font-bold text-linen md:text-4xl">
              WHB Plumbing
            </h2>
            <p className="mt-5 leading-relaxed text-sand/80">
              For homeowners and contractors across Anniston and Calhoun County, WHB Plumbing is
              the shop that gets the job done — licensed plumbers for repairs, installs and
              service calls, with upfront pricing and no surprises once the work starts.
            </p>
            <p className="mt-4 leading-relaxed text-sand/80">
              Doing it yourself instead? Our supply counter stocks the pipe, fittings, fixtures
              and parts to back you up. Bring in the old part or call your list ahead — we&apos;ll
              confirm what&apos;s on the shelf and have it ready.
            </p>
            <Link
              href="/about"
              className="bg-grad btn-shine mt-7 inline-flex items-center gap-2 rounded-md px-7 py-4 font-bold uppercase tracking-wide text-white shadow-lg shadow-ember/30 transition-transform hover:scale-[1.03]"
            >
              About Us <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ WHAT WE DO (image cards + label bars) ============ */}
      <section className="container-x py-20 md:py-24">
        <Reveal className="text-center">
          <span className="kicker justify-center">What we do</span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Repairs, Installs &amp; Supply — Under One Roof</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} variant="scale" delay={(i % 3) * 90}>
              <Link
                href="/services"
                className="card-lift group block overflow-hidden rounded-lg shadow-md"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-[600ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-soot/70 via-transparent to-transparent" />
                </div>
                <div className="flex items-center justify-between gap-2 bg-cream px-5 py-4">
                  <span className="text-[1.05rem] font-bold uppercase tracking-wide text-soot group-hover:text-ember">
                    {s.title}
                  </span>
                  <ArrowRight
                    size={18}
                    className="shrink-0 text-ember transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ HOW IT WORKS (5 steps) ============ */}
      <section className="bg-linen py-20 md:py-24">
        <div className="container-x">
          <Reveal className="text-center">
            <span className="kicker justify-center">How it works</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              From Your List to Loaded Up
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-bark">
              Five simple steps — no wandering aisles, no wasted trips, just the right parts in
              your truck and back to the job.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <Reveal key={s.title} variant="up" delay={i * 90}>
                <div className="card-lift relative h-full rounded-lg border border-sand bg-cream p-6">
                  <span className="bg-grad grid h-12 w-12 place-items-center rounded-full font-display text-xl font-bold text-white shadow-lg shadow-ember/25">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-[0.95rem] font-bold uppercase tracking-wide">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-bark">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RED STATS BAND (zigzag top) ============ */}
      <section className="relative">
        <div className="zigzag-top h-5 w-full bg-grad" />
        <div className="bg-grad">
          <div className="container-x py-16 md:py-20">
            <div className="grid gap-10 lg:grid-cols-3">
              {STATS.map((st, i) => (
                <Reveal key={st.label} variant="scale" delay={i * 120} className="text-center">
                  <div className="font-display text-6xl font-bold text-white md:text-7xl">
                    <StatCounter value={st.value} suffix={st.suffix} />
                  </div>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-white/90">
                    {st.label}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-14 border-t border-white/20 pt-10 text-center">
              <h2 className="text-2xl font-bold uppercase text-white md:text-3xl">
                Serving Anniston &amp; Calhoun County
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-white/85">
                From our counter on Wilmer Ave, we supply plumbers, builders and homeowners across
                Anniston and the surrounding Calhoun County communities:
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2.5">
                {areas.map((a) => (
                  <span
                    key={a}
                    className="rounded-md bg-white/15 px-3.5 py-1.5 text-sm font-semibold text-white ring-1 ring-white/20"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ TRUST BADGE STRIP ============ */}
      <section className="border-b border-sand bg-cream py-10">
        <div className="container-x">
          <Reveal>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {trustBadges.map((b) => (
                <div
                  key={b}
                  className="flex flex-col items-center gap-2 text-center text-char"
                >
                  <ShieldCheck size={26} className="text-ember" />
                  <span className="text-[0.82rem] font-bold uppercase tracking-wide leading-tight">
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ COMPANY OVERVIEW + IMAGE ============ */}
      <section className="container-x py-20 md:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              <span className="text-ember">Anniston &amp; Calhoun County&apos;s</span> Plumbing
              Repair, Install &amp; Supply Source
            </h2>
            <p className="mt-5 leading-relaxed text-bark">
              WHB Plumbing is the kind of shop customers recommend without hesitation — not
              because we talk big, but because we show up, quote it straight, and do the work
              right. Licensed plumbers for repairs and installs, and a real supply counter behind
              them.
            </p>
            <p className="mt-4 leading-relaxed text-bark">
              Whether it&apos;s a leaking pipe, a new water heater, or a single part for a
              commercial build-out, we take the time to get it right the first time. Residential
              and commercial, service call and DIY — one shop that stands behind what it does.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={site.phoneHref}
                className="bg-grad btn-shine inline-flex items-center gap-2 rounded-md px-7 py-4 font-bold uppercase tracking-wide text-white shadow-lg shadow-ember/30 transition-transform hover:scale-[1.03]"
              >
                <Phone size={17} /> Call Now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border-2 border-ember px-7 py-4 font-bold uppercase tracking-wide text-ember transition-colors hover:bg-ember hover:text-white"
              >
                Get a Quote
              </Link>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="card-lift relative h-[26rem] overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/images/fixtures.jpg"
                alt="Bathroom fixtures — sinks, faucets and toilets"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-lg bg-soot/85 p-4 backdrop-blur">
                <span className="bg-grad grid h-11 w-11 shrink-0 place-items-center rounded-full text-white">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-sm font-bold text-linen">{site.address}</p>
                  <p className="text-xs text-sand/70">Local store &amp; supply · will-call ready</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="bg-soot py-20 md:py-24">
        <div className="container-x">
          <Reveal className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-glow">
              What customers say
            </span>
            <h2 className="mt-2 text-3xl font-bold text-linen md:text-4xl">
              Pros &amp; Homeowners Keep Coming Back
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} variant="up" delay={i * 110}>
                <figure className="card-lift h-full rounded-lg bg-white/[0.04] p-7 ring-1 ring-white/10">
                  <Quote className="text-glow" size={26} />
                  <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-sand/90">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5">
                    <p className="font-bold text-linen">{t.name}</p>
                    <p className="text-xs uppercase tracking-[0.14em] text-sand/60">{t.area}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VISIT COUNTER + GOOGLE MAP ============ */}
      <section className="bg-linen py-20 md:py-24">
        <div className="container-x">
          <Reveal className="text-center">
            <span className="kicker justify-center">Find us</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Visit Our Wilmer Ave Counter</h2>
            <p className="mx-auto mt-3 max-w-2xl text-bark">
              Come see us at 710 Wilmer Ave in Anniston. Bring the old part or your list — the
              counter&apos;s ready, and so are we.
            </p>
          </Reveal>

          <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal variant="left">
              <div className="flex h-full flex-col gap-4">
                <a
                  href={site.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-lift flex items-start gap-4 rounded-lg border border-sand bg-cream p-5"
                >
                  <span className="bg-grad grid h-11 w-11 shrink-0 place-items-center rounded-full text-white">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-bark/60">
                      Counter
                    </p>
                    <p className="mt-0.5 font-bold text-soot">{site.address}</p>
                    <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-bold text-ember">
                      <Navigation size={13} /> Get Directions
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-lg border border-sand bg-cream p-5">
                  <span className="bg-grad grid h-11 w-11 shrink-0 place-items-center rounded-full text-white">
                    <Clock size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-bark/60">
                      Hours
                    </p>
                    <p className="mt-0.5 font-semibold text-soot">{site.hours}</p>
                  </div>
                </div>

                <a
                  href={site.phoneHref}
                  className="card-lift flex items-start gap-4 rounded-lg border border-sand bg-cream p-5"
                >
                  <span className="bg-grad grid h-11 w-11 shrink-0 place-items-center rounded-full text-white">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-bark/60">
                      Call or Text
                    </p>
                    <p className="mt-0.5 font-bold text-soot">{site.phone}</p>
                  </div>
                </a>

                <div className="rounded-lg border border-sand bg-cream p-5">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-bark/60">
                    <CalendarClock size={14} className="text-ember" /> What to expect
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-char">
                    {[
                      "Deep in-stock everyday plumbing",
                      "Staff who actually know the parts",
                      "Contractor pricing & fast will-call",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <PackageCheck size={14} className="mt-0.5 shrink-0 text-ember" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal variant="right" delay={120}>
              <div className="h-full min-h-[26rem] overflow-hidden rounded-lg border border-sand shadow-xl">
                <iframe
                  title="WHB Plumbing — 710 Wilmer Ave, Anniston, AL"
                  src="https://www.google.com/maps?q=710+Wilmer+Ave,+Anniston,+AL+36201&output=embed"
                  className="h-full min-h-[26rem] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FAQ over dark texture ============ */}
      <section className="relative">
        <Image
          src="/images/tools.jpg"
          alt="Plumbing tools"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-soot/85" />
        <div className="container-x relative py-20 md:py-24">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold uppercase text-linen md:text-4xl">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-4xl gap-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 4) * 70}>
                <details className="group rounded-lg border border-white/15 bg-white/95 p-5 open:shadow-xl">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-soot [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-grad text-white transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-bark">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
