import Reveal from "@/components/Reveal";
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

export default function VerticalDoc() {
  return (
    <div className="mx-auto max-w-[760px]" style={{ background: "var(--paper)" }}>
      {/* ---------- COVER (the one solid-color panel in the whole doc) ---------- */}
      <section className="relative overflow-hidden px-7 pb-12 pt-8 sm:px-12 sm:pt-10" style={{ background: "var(--panel-gradient)" }}>
        <div className="ripple" style={{ width: 360, height: 360, background: "#4fd9cb", top: -160, right: -140 }} />

        <div className="relative flex items-center justify-between">
          <span className="wordmark text-[0.95rem] text-white">
            JOSÉ <span style={{ color: "#8be9df" }}>CUELLAR</span>
          </span>
          <span className="text-[0.72rem] font-semibold tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.7)" }}>{YEAR}</span>
        </div>

        <div className="relative mt-8 flex flex-col items-center gap-6 text-center sm:mt-10">
          <div
            className="h-36 w-28 overflow-hidden rounded-2xl sm:h-44 sm:w-36"
            style={{ border: "3px solid rgba(255,255,255,0.9)", boxShadow: "0 20px 44px -16px rgba(0,0,0,0.5)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PERSON.photo} alt={PERSON.name} className="h-full w-full object-cover" />
          </div>

          <div>
            <p className="text-[0.95rem]" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "rgba(255,255,255,0.85)" }}>
              {PERSON.role}
            </p>
            <h1
              className="mt-2 text-[2.6rem] leading-[0.96] font-extrabold text-white sm:text-[3.2rem]"
              style={{ fontFamily: "var(--font-sans)", letterSpacing: "-0.02em" }}
            >
              {PERSON.firstName} {PERSON.lastName}
            </h1>
          </div>

          <p className="text-base" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "#e9c77e" }}>
            “{PERSON.tagline}”
          </p>
        </div>

        <div className="relative mt-9 grid grid-cols-2 gap-4 pt-5 text-left" style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}>
          <div>
            <p className="text-[0.62rem] font-bold tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.55)" }}>CREADOR DE</p>
            <p className="mt-1 text-sm font-semibold text-white">{PERSON.creatorOf}</p>
          </div>
          <div>
            <p className="text-[0.62rem] font-bold tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.55)" }}>MEDIA KIT</p>
            <p className="mt-1 text-sm font-semibold text-white">Colaboraciones de contenido</p>
          </div>
        </div>
      </section>

      {/* ---------- QUIÉN ES ---------- */}
      <section className="px-7 py-12 sm:px-12 sm:py-14">
        <Reveal>
          <span className="eyebrow-pill">01 · Quién es</span>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="mt-4 text-[1.7rem] leading-[1.12] sm:text-[2.05rem]">
            <span className="heading-script">Del sector del agua</span>
            <br />
            <span className="heading-bold">a una conversación pública</span>
          </h2>
        </Reveal>
        {BIO.map((p, i) => (
          <Reveal key={i} delay={140 + i * 70}>
            <p className="mt-4 text-[1rem] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              {p}
            </p>
          </Reveal>
        ))}

        <Reveal delay={320}>
          <p className="mt-6 text-[0.95rem] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            {PLATFORMS_BLURB}
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {PLATFORMS.map((p) => (
              <span key={p} className="pill-solid pill-dark">
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---------- QUÉ LO DIFERENCIA ---------- */}
      <section className="px-7 py-12 sm:px-12 sm:py-14" style={{ background: "var(--accent-pale)" }}>
        <Reveal>
          <span className="eyebrow-pill" style={{ background: "#fff" }}>02 · Qué lo diferencia</span>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="mt-4 text-[1.5rem] leading-[1.15] sm:text-[1.85rem]">
            <span className="heading-script">Tres capacidades</span>{" "}
            <span className="heading-bold">que rara vez aparecen juntas</span>
          </h2>
        </Reveal>

        <div className="mt-7 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          <Reveal delay={120} className="shrink-0">
            <div
              className="h-32 w-32 overflow-hidden rounded-full sm:h-36 sm:w-36"
              style={{ border: "4px solid #fff", boxShadow: "0 16px 32px -14px rgba(10,167,189,0.4)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={PERSON.photo} alt={PERSON.name} className="h-full w-full object-cover" />
            </div>
          </Reveal>

          <div className="flex w-full flex-col gap-3">
            {CAPACITIES.map((c, i) => (
              <Reveal key={c.title} delay={180 + i * 80}>
                <div className="pill-solid w-full !items-start !rounded-2xl !px-4 !py-3 text-left">
                  {/* A single text block (not two stacked <p>s) — html2canvas's
                      own text-layout engine silently drops the first of two
                      stacked block paragraphs inside a flex pill under some
                      conditions; one <p> with a <br/> sidesteps that bug. */}
                  <p>
                    <span className="text-[0.92rem] font-bold">{c.title}</span>
                    <br />
                    <span className="text-[0.8rem] font-normal opacity-90">{c.body}</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PRESENCIA EN MEDIOS ---------- */}
      <section className="px-7 py-12 sm:px-12 sm:py-14">
        <Reveal>
          <span className="eyebrow-pill">03 · Presencia en medios</span>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="mt-4 text-[1.5rem] leading-[1.15] sm:text-[1.85rem]">
            <span className="heading-script">Su conocimiento ya circula</span>
            <br />
            <span className="heading-bold">fuera de sus propias redes</span>
          </h2>
        </Reveal>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {MEDIA_PRESENCE.map((m, i) => (
            <Reveal key={m.medio} delay={140 + i * 70}>
              <div className="flat-card h-full p-4">
                <p className="text-[0.86rem] font-bold" style={{ color: "var(--accent-deep)" }}>
                  {m.medio}
                </p>
                <p className="mt-1.5 text-[0.78rem] leading-snug" style={{ color: "var(--ink-soft)" }}>
                  {m.nota}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={420}>
          <p className="mt-5 text-[0.78rem] italic" style={{ color: "var(--ink-faint)" }}>
            {MEDIA_NOTE}
          </p>
        </Reveal>
      </section>

      {/* ---------- TARIFARIO ---------- */}
      <section className="px-7 py-12 sm:px-12 sm:py-14" style={{ background: "var(--accent-pale)" }}>
        <Reveal>
          <span className="eyebrow-pill" style={{ background: "#fff" }}>04 · Tarifario de colaboraciones</span>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="mt-4 text-[1.5rem] leading-[1.15] sm:text-[1.85rem]">
            <span className="heading-script">Formatos disponibles</span>{" "}
            <span className="heading-bold">para marcas</span>
          </h2>
          <p className="mt-2 text-[0.88rem]" style={{ color: "var(--ink-faint)" }}>
            En Instagram y TikTok.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-6 flex flex-col gap-3">
            {RATES.map((r) => (
              <div key={r.formato} className="flat-card flex items-center justify-between gap-4 p-4">
                <div>
                  <p className="text-[0.92rem] font-semibold" style={{ color: "var(--ink)" }}>
                    {r.formato}
                  </p>
                  <p className="mt-1 text-[0.8rem]" style={{ color: "var(--ink-faint)" }}>
                    {r.incluye}
                  </p>
                </div>
                <p className="stat-number shrink-0 text-[1.5rem]" style={{ color: "var(--accent)" }}>
                  S/{r.precio}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={260}>
          <div className="outline-box mt-6 p-5">
            {RATE_NOTES.map((n, i) => (
              <p key={i} className={`text-[0.84rem] ${i > 0 ? "mt-2" : ""}`} style={{ color: "var(--ink-soft)" }}>
                {n}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---------- CONTACTO ---------- */}
      <section className="px-7 py-12 text-center sm:px-12 sm:py-14">
        <Reveal>
          <p className="whitespace-pre-line text-[1.2rem] leading-snug sm:text-[1.4rem]" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--ink)" }}>
            {CONTACT.closing}
          </p>
        </Reveal>
        <Reveal delay={100} className="mt-7 flex flex-col items-center gap-1.5">
          <span className="text-sm font-medium" style={{ color: "var(--ink-soft)" }}>
            Instagram · <span style={{ color: "var(--accent-deep)" }}>{CONTACT.instagram}</span>
          </span>
          <span className="text-sm font-medium" style={{ color: "var(--ink-soft)" }}>
            {CONTACT.emailLabel} · <span style={{ color: "var(--accent-deep)" }}>{CONTACT.email}</span>
          </span>
        </Reveal>
        <Reveal delay={180} className="mt-8 text-[0.68rem] tracking-[0.18em]" style={{ color: "var(--ink-faint)" }}>
          JOSÉ CUELLAR · EL PEZ EN EL AGUA · MEDIA KIT {YEAR}
        </Reveal>
      </section>
    </div>
  );
}
