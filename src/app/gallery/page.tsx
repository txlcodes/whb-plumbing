import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { gallery } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery | Banks & Head Agency — Plumbing Supplies in Anniston, AL",
  description:
    "A look at the pipe, fittings, faucets, fixtures, water heaters, tools and repair parts stocked at Banks & Head Agency in Anniston, AL.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="Gallery"
        title="The stuff that keeps water flowing."
        desc="A look at the kinds of pipe, fittings, fixtures and parts we keep on the shelf for Calhoun County's plumbers and homeowners."
      />

      <section className="container-x py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal key={g.img} delay={(i % 3) * 80}>
              <figure className="group overflow-hidden rounded-lg border border-sand bg-cream shadow-sm">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={g.img}
                    alt={g.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-4 text-sm font-bold text-char">{g.title}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-bark/70">
          Looking for something specific? Give us a call — if it&apos;s not on the shelf, we&apos;ll
          order it and have it ready fast.
        </p>
      </section>

      <CTA />
    </>
  );
}
