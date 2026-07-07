"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

const SERVICES = [
  "Pipe & Fittings",
  "Faucets & Fixtures",
  "Water Heater & Parts",
  "Tools & Repair Parts",
  "Contractor Account",
  "Special Order",
  "Something Else",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: SERVICES[0], message: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nInterested in: ${form.service}\n\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Estimate request — ${form.service}`
    )}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-lg border border-sand bg-cream p-8 text-center">
        <CheckCircle2 className="mx-auto text-ember" size={40} />
        <h3 className="mt-4 text-xl font-bold">Almost there!</h3>
        <p className="mt-2 text-sm text-bark">
          Your email app should have opened with your request. Prefer to talk? Call us at{" "}
          <a href={site.phoneHref} className="font-bold text-ember">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  const input =
    "w-full rounded-lg border border-sand bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-flame";

  return (
    <form onSubmit={submit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={input}
          aria-label="Your name"
        />
        <input
          required
          type="tel"
          placeholder="Phone number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className={input}
          aria-label="Phone number"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="email"
          placeholder="Email (optional)"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={input}
          aria-label="Email"
        />
        <select
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className={input}
          aria-label="What do you need?"
        >
          {SERVICES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <textarea
        rows={4}
        placeholder="Tell us a little about your project…"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className={input}
        aria-label="Message"
      />
      <button
        type="submit"
        className="bg-grad inline-flex items-center justify-center gap-2 rounded-md px-7 py-3.5 font-bold text-white shadow-lg shadow-ember/25 transition-transform hover:scale-[1.02]"
      >
        <Send size={16} />
        Check Stock &amp; Pricing
      </button>
      <p className="text-center text-xs text-bark/70">
        No spam, no pressure — we&apos;ll just call you back to talk it through.
      </p>
    </form>
  );
}
