export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="relative grid h-10 w-10 place-items-center rounded-lg bg-grad-deep ring-1 ring-flame/40">
        {/* water droplet mark */}
        <svg viewBox="0 0 40 40" className="h-7 w-7" aria-hidden>
          <path
            d="M20 6 C20 6 30 17 30 24 a10 10 0 0 1 -20 0 C10 17 20 6 20 6 Z"
            fill="url(#dropGrad)"
          />
          <path
            d="M16 24 a4 4 0 0 0 4 4"
            fill="none"
            stroke="#fff"
            strokeOpacity="0.7"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="dropGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#b40000" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="leading-tight">
        <span
          className={`font-display block text-[1.05rem] font-bold tracking-tight ${
            dark ? "text-linen" : "text-soot"
          }`}
        >
          Banks &amp; Head
        </span>
        <span
          className={`block text-[0.62rem] font-semibold uppercase tracking-[0.28em] ${
            dark ? "text-sand/70" : "text-bark/70"
          }`}
        >
          Plumbing Supply · Anniston, AL
        </span>
      </span>
    </span>
  );
}
