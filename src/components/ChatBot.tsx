"use client";

import { useEffect, useRef, useState } from "react";
import { Droplets, X, Phone, MessageSquare, Send } from "lucide-react";
import { site } from "@/lib/site";

type Msg = { from: "bot" | "user"; text: string };
type Stage = "menu" | "name" | "phone" | "detail" | "done";

const QUICK = [
  { key: "stock", label: "🔎 Check stock / a part" },
  { key: "account", label: "🧾 Contractor account" },
  { key: "order", label: "📦 Special order" },
  { key: "visit", label: "📍 Location & hours" },
  { key: "human", label: "💬 Talk to a person" },
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "bot", text: "Hey there! 👋 Welcome to Banks & Head plumbing supply. What can we help you find?" },
  ]);
  const [stage, setStage] = useState<Stage>("menu");
  const [input, setInput] = useState("");
  const [lead, setLead] = useState({ topic: "", name: "", phone: "", detail: "" });
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, open]);

  function bot(text: string) {
    setMsgs((m) => [...m, { from: "bot", text }]);
  }
  function user(text: string) {
    setMsgs((m) => [...m, { from: "user", text }]);
  }

  function pick(key: string, label: string) {
    user(label.replace(/^[^ ]+ /, ""));
    if (key === "visit") {
      bot(`We're at ${site.address}. ${site.hours}. Want us to call you back instead? Tap "Talk to a person".`);
      return;
    }
    const topicMap: Record<string, string> = {
      stock: "Check stock / a part",
      account: "Contractor account",
      order: "Special order",
      human: "General question",
    };
    setLead((l) => ({ ...l, topic: topicMap[key] || key }));
    bot("Great — we can help with that. What's your name?");
    setStage("name");
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    user(text);
    setInput("");

    if (stage === "name") {
      setLead((l) => ({ ...l, name: text }));
      bot(`Thanks, ${text}! What's the best phone number to reach you?`);
      setStage("phone");
    } else if (stage === "phone") {
      setLead((l) => ({ ...l, phone: text }));
      bot("Got it. Briefly, what do you need — a part, a list of items, or setting up an account?");
      setStage("detail");
    } else if (stage === "detail") {
      setLead((l) => ({ ...l, detail: text }));
      bot("Perfect — you're all set. The fastest way to get this moving is a quick call, or send it straight to our inbox below. We'll get right back to you. 🔥");
      setStage("done");
    }
  }

  const mailHref = `mailto:${site.email}?subject=${encodeURIComponent(
    `Website chat lead — ${lead.topic}`
  )}&body=${encodeURIComponent(
    `Name: ${lead.name}\nPhone: ${lead.phone}\nTopic: ${lead.topic}\nDetails: ${lead.detail}`
  )}`;

  return (
    <>
      {/* launcher — bottom LEFT (FloatingCall owns bottom right) */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Chat with us"}
        className="fixed bottom-5 left-5 z-50 grid h-14 w-14 place-items-center rounded-md bg-char text-glow shadow-xl ring-1 ring-flame/40 transition-transform hover:scale-105"
      >
        {open ? <X size={22} /> : <Droplets size={24} className="flicker" />}
      </button>

      {open && (
        <div className="fixed bottom-24 left-5 z-50 flex max-h-[70vh] w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-lg border border-sand bg-cream shadow-2xl">
          <div className="bg-grad-deep px-4 py-3">
            <p className="text-sm font-bold text-linen">Banks &amp; Head Plumbing Supply</p>
            <p className="text-[0.7rem] text-sand/70">Usually replies within the hour</p>
          </div>

          <div className="flex-1 space-y-2.5 overflow-y-auto p-4">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-lg px-3.5 py-2.5 text-[0.83rem] leading-snug ${
                  m.from === "bot"
                    ? "bg-sand/50 text-char"
                    : "bg-grad ml-auto text-white"
                }`}
              >
                {m.text}
              </div>
            ))}

            {stage === "menu" && (
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK.map((q) => (
                  <button
                    key={q.key}
                    onClick={() => pick(q.key, q.label)}
                    className="rounded-md border border-sand bg-cream px-3 py-1.5 text-xs font-semibold text-char transition-colors hover:border-flame hover:text-ember"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            )}

            {stage === "done" && (
              <div className="flex flex-col gap-2 pt-1">
                <a
                  href={site.phoneHref}
                  className="bg-grad inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-xs font-bold text-white"
                >
                  <Phone size={13} /> Call {site.phone}
                </a>
                <a
                  href={mailHref}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-sand px-4 py-2.5 text-xs font-bold text-char hover:border-flame hover:text-ember"
                >
                  <MessageSquare size={13} /> Email my request
                </a>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {(stage === "name" || stage === "phone" || stage === "detail") && (
            <form onSubmit={submit} className="flex items-center gap-2 border-t border-sand p-3">
              <input
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type here…"
                className="w-full rounded-md border border-sand bg-cream px-4 py-2 text-sm outline-none focus:border-flame"
                aria-label="Chat message"
              />
              <button
                type="submit"
                aria-label="Send"
                className="bg-grad grid h-9 w-9 shrink-0 place-items-center rounded-md text-white"
              >
                <Send size={14} />
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
}
