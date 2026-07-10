"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

export default function HeroForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      "Free estimate request — website"
    )}&body=${body}`;
    setSent(true);
  }

  const field =
    "w-full rounded-md border border-white/25 bg-white/95 px-3.5 py-2.5 text-sm text-soot outline-none transition focus:border-white focus:ring-2 focus:ring-white/40 placeholder:text-bark/60";
  const label = "block text-[0.72rem] font-bold uppercase tracking-[0.12em] text-white/90 mb-1";

  return (
    <div className="bg-grad relative overflow-hidden rounded-lg p-6 shadow-2xl shadow-black/40 ring-1 ring-white/10 md:p-7">
      {/* subtle flame texture glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <div className="relative">
        <h3 className="text-2xl font-bold uppercase leading-tight text-white md:text-[1.7rem]">
          Request a Repair
        </h3>
        <p className="mt-1 text-sm text-white/85">
          Tell us what&apos;s going on — a repair, an install, or a part — and we&apos;ll call you
          back.
        </p>

        {sent ? (
          <div className="mt-5 rounded-md bg-white/95 p-6 text-center">
            <CheckCircle2 className="mx-auto text-ember" size={38} />
            <p className="mt-3 text-sm font-semibold text-soot">
              Your email app should have opened. Prefer to talk now? Call{" "}
              <a href={site.phoneHref} className="font-bold text-ember">
                {site.phone}
              </a>
              .
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-5 space-y-3.5">
            <div>
              <label className={label}>Name</label>
              <input
                required
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={field}
              />
            </div>
            <div className="grid gap-3.5 sm:grid-cols-2">
              <div>
                <label className={label}>Phone</label>
                <input
                  required
                  type="tel"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={field}
                />
              </div>
              <div>
                <label className={label}>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={field}
                />
              </div>
            </div>
            <div>
              <label className={label}>Message</label>
              <textarea
                rows={3}
                placeholder="What can we help with?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={field}
              />
            </div>
            <button
              type="submit"
              className="btn-shine w-full rounded-md bg-soot px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:scale-[1.02]"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
