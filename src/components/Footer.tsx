import Link from "next/link";
import { Phone, MapPin, Clock, PackageCheck } from "lucide-react";
import Logo from "./Logo";
import { site, nav, areas } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-grad-deep text-sand/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo dark />
          <p className="mt-4 max-w-md text-sm leading-relaxed">
            The plumbing supply counter for Anniston and Calhoun County — pipe, fittings,
            fixtures, water heaters, tools and repair parts for contractors and homeowners
            alike. Call your list in and we&apos;ll have it pulled.
          </p>
          <a
            href={site.phoneHref}
            className="bg-grad mt-5 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-bold text-white shadow-lg shadow-ember/30"
          >
            <Phone size={15} />
            {site.phone}
          </a>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-linen">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-glow">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-linen">Visit Us</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 shrink-0 text-glow" />
              <a href={site.mapsHref} target="_blank" rel="noopener noreferrer" className="hover:text-glow">
                {site.address}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock size={15} className="mt-0.5 shrink-0 text-glow" />
              {site.hours}
            </li>
            <li className="flex items-start gap-2.5">
              <PackageCheck size={15} className="mt-0.5 shrink-0 text-glow" />
              Will-call pickup &amp; contractor accounts
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs text-sand/50">
          <p className="mb-2">
            Serving {areas.slice(0, 8).join(", ")} and surrounding Calhoun County, Alabama
            communities.
          </p>
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
