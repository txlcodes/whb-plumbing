import type { Metadata } from "next";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site, areas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | WHB Plumbing — Anniston, AL",
  description:
    "Call (256) 235-9000 or visit our counter at 710 Wilmer Ave, Anniston, AL for pipe, fittings, fixtures, water heaters and plumbing repair parts.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Need a part? Let's talk."
        desc="Call your list in, visit the counter, or send the form — whichever is easiest. We'll confirm stock and have it ready."
      />

      <section className="container-x py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="space-y-5">
              {[
                {
                  icon: Phone,
                  label: "Call or text",
                  value: site.phone,
                  href: site.phoneHref,
                },
                {
                  icon: MapPin,
                  label: "Counter",
                  value: site.address,
                  href: site.mapsHref,
                },
                { icon: Clock, label: "Hours", value: site.hours },
                { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
              ].map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-lg border border-sand bg-cream p-5"
                >
                  <span className="bg-grad grid h-11 w-11 shrink-0 place-items-center rounded-lg text-white">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-bark/60">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="mt-0.5 block font-bold text-char hover:text-ember"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-0.5 font-bold text-char">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="rounded-lg border border-sand bg-cream p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-bark/60">
                  Service area
                </p>
                <p className="mt-2 text-sm leading-relaxed text-bark">
                  {areas.join(" · ")} and surrounding Calhoun County communities.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <div className="rounded-lg border border-sand bg-cream p-6 shadow-lg md:p-8">
              <h2 className="text-2xl font-bold">Check stock or start an account</h2>
              <p className="mb-6 mt-2 text-sm text-bark">
                Send your list or the part you need — we&apos;ll confirm price and availability and
                call you back.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>

        {/* map embed */}
        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-lg border border-sand shadow-md">
            <iframe
              title="WHB Plumbing — 710 Wilmer Ave, Anniston, AL"
              src="https://www.google.com/maps?q=710+Wilmer+Ave,+Anniston,+AL+36201&output=embed"
              className="h-[22rem] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
