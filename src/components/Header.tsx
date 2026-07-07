"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { site, nav, socials } from "@/lib/site";

function SocialIcon({ name }: { name: string }) {
  if (name === "facebook")
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
        <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3 0-1.3-.13-2.45-.13-2.42 0-4.05 1.48-4.05 4.2v2.34H7.8V13h2.7v8h3z" />
      </svg>
    );
  if (name === "youtube")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  // google
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
      <path d="M21.35 11.1H12v3.2h5.35c-.25 1.5-1.85 4.4-5.35 4.4-3.2 0-5.8-2.65-5.8-5.9S9 6.9 12 6.9c1.8 0 3 .77 3.7 1.43l2.5-2.4C16.6 4.4 14.55 3.5 12 3.5 6.9 3.5 2.8 7.6 2.8 12.8S6.9 22 12 22c5.55 0 9.2-3.9 9.2-9.4 0-.63-.07-1.1-.15-1.5z" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      {/* red tagline bar */}
      <div className="bg-grad text-white">
        <div className="container-x flex h-10 items-center justify-between gap-3">
          <p className="truncate text-[0.72rem] font-semibold uppercase tracking-[0.08em] sm:text-[0.8rem]">
            Anniston &amp; Calhoun County&apos;s plumbing supply counter
          </p>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-6 w-6 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30"
              >
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* black main bar */}
      <div className="bg-soot">
        <div className="container-x flex h-[4.75rem] items-center justify-between">
          <Link href="/" aria-label="Banks & Head Agency — home">
            <Logo dark />
          </Link>

          <div className="hidden items-center gap-5 md:flex">
            <a href={site.phoneHref} className="group flex items-center gap-2.5">
              <span className="bg-grad grid h-10 w-10 place-items-center rounded-full text-white">
                <Phone size={17} />
              </span>
              <span className="leading-tight">
                <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ember">
                  Call us
                </span>
                <span className="block text-[1.05rem] font-bold text-linen group-hover:text-glow">
                  {site.phone}
                </span>
              </span>
            </a>
            <Link
              href="/contact"
              className="bg-grad btn-shine hidden rounded-md px-5 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-ember/30 transition-transform hover:scale-[1.03] lg:inline-flex"
            >
              Check Stock
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-md border border-white/20 text-linen md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* nav row */}
        <div className="hidden border-t border-white/10 md:block">
          <nav className="container-x flex h-12 items-center justify-center gap-8">
            {nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-bold uppercase tracking-wide transition-colors ${
                    active ? "text-ember" : "text-linen hover:text-ember"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-[13px] left-0 h-[3px] w-full bg-grad transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                    style={{ transformOrigin: "left" }}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* mobile menu */}
        {open && (
          <div className="border-t border-white/10 bg-soot md:hidden">
            <div className="container-x flex flex-col py-3">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-3 text-sm font-bold uppercase tracking-wide text-linen last:border-0"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={site.phoneHref}
                className="bg-grad mt-3 inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold uppercase text-white"
              >
                <Phone size={15} />
                Call {site.phone}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
