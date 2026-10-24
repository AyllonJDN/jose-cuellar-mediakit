import {
  PERSON,
  BIO,
  PLATFORMS_BLURB,
  PLATFORMS,
  CAPACITIES,
  MEDIA_PRESENCE,
  MEDIA_NOTE,
  RATES,
  RATE_NOTES,
  CONTACT,
  YEAR,
} from "@/lib/content";

function Wordmark({ dark = false }: { dark?: boolean }) {
  return (
    <span className="wordmark text-[0.82rem]" style={{ color: dark ? "#fff" : "var(--ink)" }}>
      JOSÉ{" "}
      <span style={{ color: dark ? "#8be9df" : "var(--accent)" }}>CUELLAR</span>
    </span>
  );
}

export default function HorizontalDeck() {
  return (
    <div className="mx-auto flex max-w-[1120px] flex-col gap-6" style={{ background: "var(--paper)" }}>
      {/* ================= SLIDE 1 — COVER ================= */}
      <section
        id="deck-slide-1"
        className="relative grid w-full overflow-hidden rounded-[22px] grid-cols-[1.05fr_0.95fr]"
        style={{ aspectRatio: "16 / 9", background: "#fff" }}
      >
        <div className="relative flex flex-col justify-between overflow-hidden px-10 py-8" style={{ background: "var(--panel-gradient)" }}>
          <div className="ripple" style={{ width: 280, height: 280, background: "#4fd9cb", top: -120, left: -100 }} />
          <div className="relative flex items-center justify-between">
            <Wordmark dark />
            <span className="text-[0.68rem] font-semibold tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.7)" }}>
              {YEAR}
            </span>
          </div>

          <div className="relative">
            <p className="text-[0.85rem]" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "rgba(255,255,255,0.85)" }}>
              {PERSON.role}
            </p>
            <h1 className="mt-2 text-[2.9rem] leading-[0.92] font-extrabold text-white" style={{ letterSpacing: "-0.02em" }}>
              José
              <br />
              Cuellar
            </h1>
            <p className="mt-3 text-[1rem]" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "#e9c77e" }}>
              “{PERSON.tagline}”
            </p>
          </div>

          <div className="relative grid grid-cols-2 gap-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}>
            <div>
              <p className="text-[0.58rem] font-bold tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.55)" }}>CREADOR DE</p>
              <p className="mt-0.5 text-[0.82rem] font-semibold text-white">{PERSON.creatorOf}</p>
            </div>
            <div>
              <p className="text-[0.58rem] font-bold tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.55)" }}>MEDIA KIT</p>
              <p className="mt-0.5 text-[0.82rem] font-semibold text-white">Colaboraciones</p>
            </div>
          </div>
        </div>

        <div className="relative flex h-full items-end justify-center overflow-hidden" style={{ background: "var(--accent-pale)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PERSON.photoCutout}
            alt={PERSON.name}
            className="h-[108%] w-auto object-contain object-bottom"
            style={{ filter: "drop-shadow(0 20px 26px rgba(10,167,189,0.3))" }}
          />
        </div>
      </section>

      {/* ================= SLIDE 2 — QUIÉN ES + DIFERENCIADORES ================= */}
      <section
        id="deck-slide-2"
        className="relative grid w-full overflow-hidden rounded-[22px] grid-cols-[1.2fr_0.8fr] px-10 py-8"
        style={{ aspectRatio: "16 / 9", background: "#fff", border: "1px solid var(--line)" }}
      >
        <div className="flex flex-col justify-center pr-6">
          <div className="flex items-center justify-between">
            <Wordmark />
            <span className="text-[0.68rem] font-semibold tracking-[0.1em]" style={{ color: "var(--ink-faint)" }}>{YEAR}</span>
          </div>

          <span className="eyebrow-pill mt-6 w-fit">01 · Quién es</span>
          <h2 className="mt-4 text-[1.55rem] leading-[1.1]">
            <span className="heading-script">Del sector del agua</span>
            <br />
            <span className="heading-bold">a una conversación pública</span>
          </h2>
          <p className="mt-3 max-w-[32rem] text-[0.86rem] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            {BIO[0]}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {PLATFORMS.map((p) => (
              <span key={p} className="pill-solid pill-dark !px-3 !py-1.5 !text-[0.74rem]">
                {p}
              </span>
            ))}
          </div>
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

      {/* ================= SLIDE 3 — EDITORIAL STATEMENT BREAK ================= */}
      <section
        id="deck-slide-3"
        className="relative flex w-full flex-col justify-center overflow-hidden rounded-[22px] px-12 py-8"
        style={{ aspectRatio: "16 / 9", background: "var(--ink)" }}
      >
        <div className="flex items-center justify-between">
          <Wordmark dark />
          <span className="text-[0.68rem] font-semibold tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.55)" }}>{YEAR}</span>
        </div>
        <div className="mt-8 flex items-start gap-5">
          <span className="mt-3 text-[1.3rem]" style={{ color: "#8be9df" }} aria-hidden>→</span>
          <div>
            <p className="display-statement text-[3.4rem]" style={{ color: "#fff" }}>
              Todo en tu vida es <em style={{ color: "#8be9df" }}>agua</em>.
            </p>
            <p className="mt-4 text-[1rem]" style={{ color: "rgba(255,255,255,0.6)" }}>
              Y entenderla cambia la manera de actuar.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SLIDE 4 — PRESENCIA EN MEDIOS ================= */}
      <section
        id="deck-slide-4"
        className="relative flex w-full flex-col overflow-hidden rounded-[22px] px-10 py-8"
        style={{ aspectRatio: "16 / 9", background: "#fff", border: "1px solid var(--line)" }}
      >
        <div className="flex items-center justify-between">
          <Wordmark />
          <span className="text-[0.68rem] font-semibold tracking-[0.1em]" style={{ color: "var(--ink-faint)" }}>{YEAR}</span>
        </div>

        <div className="kicker mt-6">02 · Presencia en medios</div>
        <h2 className="mt-4 text-[1.55rem] leading-[1.1]">
          <span className="heading-script">Su conocimiento ya circula</span>{" "}
          <span className="heading-bold">fuera de sus propias redes</span>
        </h2>

        <div className="mt-7 grid flex-1 grid-cols-4">
          {MEDIA_PRESENCE.map((m, i) => (
            <div
              key={m.medio}
              className="flex flex-col px-5 first:pl-0"
              style={{ borderLeft: i > 0 ? "1px solid var(--line)" : "none" }}
            >
              <span className="ed-index">0{i + 1}</span>
              <p className="mt-2 text-[0.92rem] font-bold" style={{ color: "var(--ink)" }}>
                {m.medio}
              </p>
              <p className="mt-1.5 text-[0.78rem] leading-snug" style={{ color: "var(--ink-soft)" }}>
                {m.nota}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[0.74rem] italic" style={{ color: "var(--ink-faint)" }}>
          {MEDIA_NOTE}
        </p>
      </section>

      {/* ================= SLIDE 5 — TARIFARIO ================= */}
      <section
        id="deck-slide-5"
        className="relative grid w-full overflow-hidden rounded-[22px] grid-cols-[0.75fr_1.25fr]"
        style={{ aspectRatio: "16 / 9", background: "#fff" }}
      >
        <div className="relative flex flex-col justify-between overflow-hidden px-7 py-8" style={{ background: "var(--panel-gradient)" }}>
          <Wordmark dark />
          <div className="relative">
            <p className="font-display text-[1.7rem] italic leading-[1.05] text-white">Tarifario</p>
            <p className="text-[1.7rem] font-extrabold leading-[1.05] text-white">de colaboraciones</p>
          </div>
          <div className="relative h-32 w-24 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PERSON.photoCutout}
              alt={PERSON.name}
              className="h-full w-full object-contain object-bottom"
            />
          </div>
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

      {/* ================= SLIDE 6 — CONTACTO ================= */}
      <section
        id="deck-slide-6"
        className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-[22px] px-10 py-8 text-center"
        style={{ aspectRatio: "16 / 9", background: "var(--panel-gradient)" }}
      >
        <div className="ripple" style={{ width: 300, height: 300, background: "#4fd9cb", bottom: -140, right: -100 }} />
        <div className="absolute left-10 top-8">
          <Wordmark dark />
        </div>
        <div className="absolute right-10 top-8 text-[0.68rem] font-semibold tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.7)" }}>
          {YEAR}
        </div>

        <p className="whitespace-pre-line text-[1.5rem] leading-snug text-white" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
          {CONTACT.closing}
        </p>
        <div className="relative mt-7 flex items-center gap-6">
          <span className="text-[0.86rem] font-medium text-white">
            Instagram · <span style={{ color: "#8be9df" }}>{CONTACT.instagram}</span>
          </span>
          <span className="text-[0.86rem] font-medium text-white">
            {CONTACT.emailLabel} · <span style={{ color: "#8be9df" }}>{CONTACT.email}</span>
          </span>
        </div>
      </section>
    </div>
  );
}
