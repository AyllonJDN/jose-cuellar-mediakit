import {
  PERSON,
  BIO,
  CAPACITIES,
  RATES,
  RATE_NOTES,
  CONTACT,
} from "@/lib/content";

export default function HorizontalDeck() {
  return (
    <div className="mx-auto flex max-w-[1120px] flex-col gap-6" style={{ background: "var(--paper)" }}>
      {/* ================= SLIDE 1 — COVER ================= */}
      <section
        id="deck-slide-1"
        className="relative grid w-full overflow-hidden rounded-[22px] grid-cols-[1.05fr_0.95fr]"
        style={{ aspectRatio: "16 / 9", background: "#fff" }}
      >
        <div className="relative flex h-full flex-col overflow-hidden px-10 py-8" style={{ background: "var(--ink)" }}>
          <div className="relative flex flex-1 flex-col justify-center">
            <p className="text-[0.85rem]" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "rgba(255,255,255,0.8)" }}>
              {PERSON.role}
            </p>
            <p className="display-statement mt-2 text-[2.9rem]" style={{ color: "#fff" }}>
              José <span style={{ color: "#8be9df" }}>Cuellar</span>
            </p>
            <p className="mt-3 text-[1rem]" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "#8be9df" }}>
              “{PERSON.tagline}”
            </p>
          </div>

          <div className="relative grid grid-cols-2 gap-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}>
            <div>
              <p className="text-[0.58rem] font-bold tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.7)" }}>CREADOR DE</p>
              <p className="mt-0.5 text-[0.82rem] font-semibold text-white">{PERSON.creatorOf}</p>
            </div>
            <div>
              <p className="text-[0.58rem] font-bold tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.7)" }}>MEDIA KIT</p>
              <p className="mt-0.5 text-[0.82rem] font-semibold text-white">Colaboraciones</p>
            </div>
          </div>
        </div>

        <div className="relative flex h-full items-end justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={PERSON.photo} alt={PERSON.name} className="h-full w-full object-cover" />
        </div>
      </section>

      {/* ================= SLIDE 2 — QUIÉN ES + DIFERENCIADORES ================= */}
      <section
        id="deck-slide-2"
        className="relative grid w-full overflow-hidden rounded-[22px] grid-cols-[1.2fr_0.8fr] px-10 py-8"
        style={{ aspectRatio: "16 / 9", background: "#fff", border: "1px solid var(--line)" }}
      >
        <div className="flex flex-col justify-center pr-6">
          <p className="text-[0.95rem] font-semibold" style={{ color: "var(--accent-deep)" }}>¿Quién es José Cuellar?</p>
          <h2 className="mt-6 text-[1.55rem] leading-[1.1]">
            <span className="heading-script">Del sector del agua</span>
            <br />
            <span className="heading-bold">a una conversación pública</span>
          </h2>
          <p className="mt-5 max-w-[32rem] text-[0.86rem] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            {BIO[0]}
          </p>
        </div>

        <div className="relative flex h-full items-center justify-center">
          {/* Pills hang off a fixed-size box sized to the photo itself —
              not the full-height column — so their offsets read from the
              photo's edges, matching the vertical layout's treatment. */}
          <div className="relative h-[20rem] w-[15rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PERSON.photoCutout}
              alt={PERSON.name}
              className="h-full w-full object-contain object-bottom"
              style={{ filter: "drop-shadow(0 18px 26px rgba(10,167,189,0.3))" }}
            />

            <div className="pill-solid absolute -left-16 top-8 !items-start !rounded-2xl !px-3.5 !py-2.5 text-left">
              <p className="text-[0.74rem] font-bold leading-tight">{CAPACITIES[0].title}</p>
            </div>
            <div className="pill-solid pill-dark absolute -right-16 top-[48%] !items-start !rounded-2xl !px-3.5 !py-2.5 text-left">
              <p className="text-[0.74rem] font-bold leading-tight">{CAPACITIES[1].title}</p>
            </div>
            <div className="pill-solid absolute -bottom-2 -left-10 !items-start !rounded-2xl !px-3.5 !py-2.5 text-left" style={{ background: "var(--sand)" }}>
              <p className="text-[0.74rem] font-bold leading-tight" style={{ color: "var(--ink)" }}>
                {CAPACITIES[2].title}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SLIDE 3 — TARIFARIO ================= */}
      <section
        id="deck-slide-3"
        className="relative grid w-full overflow-hidden rounded-[22px] grid-cols-[0.75fr_1.25fr]"
        style={{ aspectRatio: "16 / 9", background: "#fff" }}
      >
        <div className="relative flex h-full flex-col overflow-hidden px-7 py-8" style={{ background: "var(--panel-gradient)" }}>
          <div className="relative flex flex-1 flex-col justify-center">
            <p className="font-display text-[1.7rem] italic leading-[1.05] text-white">Tarifario</p>
            <p className="text-[1.7rem] font-extrabold leading-[1.05] text-white">de colaboraciones</p>
          </div>
          <p className="relative text-[0.82rem] font-medium text-white">
            Instagram · <span style={{ color: "#8be9df" }}>{CONTACT.instagram}</span>
          </p>
        </div>

        <div className="flex flex-col justify-center px-9 py-8">
          <div>
            {RATES.map((r, i) => (
              <div
                key={r.formato}
                className="flex items-baseline justify-between gap-4 py-3"
                style={{ borderTop: i > 0 ? "1px solid var(--line)" : "none" }}
              >
                <p>
                  <span className="text-[0.92rem] font-semibold" style={{ color: "var(--ink)" }}>{r.formato}</span>
                  <br />
                  <span className="text-[0.76rem]" style={{ color: "var(--ink-faint)" }}>{r.incluye}</span>
                </p>
                <p className="stat-number shrink-0 text-[1.6rem]" style={{ color: "var(--accent)" }}>
                  S/{r.precio}
                </p>
              </div>
            ))}
          </div>
          <div className="outline-box mt-5 p-4">
            {RATE_NOTES.map((n, i) => (
              <p key={i} className={`text-[0.76rem] ${i > 0 ? "mt-1.5" : ""}`} style={{ color: "var(--ink-soft)" }}>
                {n}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
