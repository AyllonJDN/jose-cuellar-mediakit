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
      <section className="relative overflow-hidden px-7 pt-8 sm:px-12 sm:pt-10" style={{ background: "var(--panel-gradient)" }}>
        <div className="ripple" style={{ width: 360, height: 360, background: "#4fd9cb", top: -160, right: -140 }} />

        <div className="relative flex items-center justify-between">
          <span className="wordmark text-[0.95rem] text-white">
            JOSÉ <span style={{ color: "#8be9df" }}>CUELLAR</span>
          </span>
          <span className="text-[0.72rem] font-semibold tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.7)" }}>{YEAR}</span>
        </div>

        <div className="relative mt-6 text-center">
          <p className="text-[0.95rem]" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "rgba(255,255,255,0.85)" }}>
            {PERSON.role}
          </p>
          <h1
            className="mt-2 text-[3rem] leading-[0.92] font-extrabold text-white sm:text-[3.8rem]"
            style={{ fontFamily: "var(--font-sans)", letterSpacing: "-0.025em" }}
          >
            {PERSON.firstName} {PERSON.lastName}
          </h1>
        </div>

        {/* Large background-free cutout — the hero photo, not a thumbnail */}
        <div className="relative mx-auto mt-4 flex w-full max-w-[340px] justify-center sm:max-w-[400px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PERSON.photoCutout}
            alt={PERSON.name}
            className="w-full"
            style={{ filter: "drop-shadow(0 28px 36px rgba(0,0,0,0.35))" }}
          />
        </div>

        <p className="relative -mt-2 text-center text-base" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "#e9c77e" }}>
          “{PERSON.tagline}”
        </p>

        <div className="relative mt-7 grid grid-cols-2 gap-4 border-t pb-8 pt-5 text-left" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
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
          <h2 className="mt-4 text-[1.9rem] leading-[1.08] sm:text-[2.4rem]">
            <span className="heading-script">Del sector del agua</span>
            <br />
            <span className="heading-bold">a una conversación pública</span>
          </h2>
        </Reveal>
        <div className="mt-6 max-w-[42rem]">
          {BIO.map((p, i) => (
            <Reveal key={i} delay={140 + i * 70}>
              <p className={`text-[1.02rem] leading-relaxed ${i > 0 ? "mt-4" : ""}`} style={{ color: "var(--ink-soft)" }}>
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={320}>
          <p className="mt-6 max-w-[42rem] text-[0.95rem] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
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

      {/* ---------- EDITORIAL STATEMENT BREAK ---------- */}
      <section className="px-7 py-14 sm:px-12 sm:py-20" style={{ background: "var(--ink)" }}>
        <Reveal className="flex items-start gap-4 sm:gap-5">
          <span className="mt-3 hidden text-[1.3rem] sm:block" style={{ color: "#8be9df" }} aria-hidden>
            →
          </span>
          <p className="display-statement text-[2.5rem] sm:text-[3.4rem]" style={{ color: "#fff" }}>
            Todo en tu vida es <em style={{ color: "#8be9df" }}>agua</em>.
          </p>
        </Reveal>
        <Reveal delay={90}>
          <p className="mt-4 pl-0 text-[0.95rem] sm:pl-10" style={{ color: "rgba(255,255,255,0.6)" }}>
            Y entenderla cambia la manera de actuar.
          </p>
        </Reveal>
      </section>

      {/* ---------- QUÉ LO DIFERENCIA ---------- */}
      <section className="px-7 py-12 sm:px-12 sm:py-14" style={{ background: "var(--accent-pale)" }}>
        <Reveal>
          <span className="eyebrow-pill" style={{ background: "#fff" }}>02 · Qué lo diferencia</span>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="mt-4 text-[1.6rem] leading-[1.12] sm:text-[2rem]">
            <span className="heading-script">Tres capacidades</span>{" "}
            <span className="heading-bold">que rara vez aparecen juntas</span>
          </h2>
        </Reveal>

        <div className="relative mt-10 flex flex-col items-center">
          <Reveal className="relative w-full max-w-[280px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PERSON.photoCutout}
              alt={PERSON.name}
              className="w-full"
              style={{ filter: "drop-shadow(0 22px 30px rgba(10,167,189,0.28))" }}
            />
            <div className="pill-solid absolute -left-6 top-6 !items-start !rounded-2xl !px-3.5 !py-2.5 text-left sm:-left-16">
              <p className="text-[0.76rem] font-bold leading-tight">{CAPACITIES[0].title}</p>
            </div>
            <div className="pill-solid pill-dark absolute -right-4 top-[42%] !items-start !rounded-2xl !px-3.5 !py-2.5 text-left sm:-right-14">
              <p className="text-[0.76rem] font-bold leading-tight">{CAPACITIES[1].title}</p>
            </div>
            <div
              className="pill-solid absolute -bottom-3 left-2 !items-start !rounded-2xl !px-3.5 !py-2.5 text-left sm:left-10"
              style={{ background: "var(--sand)" }}
            >
              <p className="text-[0.76rem] font-bold leading-tight" style={{ color: "var(--ink)" }}>
                {CAPACITIES[2].title}
              </p>
            </div>
          </Reveal>

          <div className="mt-20 flex w-full flex-col gap-5 sm:mt-24">
            {CAPACITIES.map((c, i) => (
              <Reveal key={c.title} delay={120 + i * 80} className="flex gap-4 border-t pt-4" style={{ borderColor: "var(--line)" }}>
                <span className="ed-index shrink-0">0{i + 1}</span>
                <p className="text-[0.92rem] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  <span className="font-bold" style={{ color: "var(--ink)" }}>{c.title}.</span> {c.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PRESENCIA EN MEDIOS ---------- */}
      <section className="px-7 py-12 sm:px-12 sm:py-14">
        <Reveal>
          <div className="kicker">03 · Presencia en medios</div>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="mt-4 text-[1.6rem] leading-[1.12] sm:text-[2rem]">
            <span className="heading-script">Su conocimiento ya circula</span>
            <br />
            <span className="heading-bold">fuera de sus propias redes</span>
          </h2>
        </Reveal>

        <div className="mt-6">
          {MEDIA_PRESENCE.map((m, i) => (
            <Reveal key={m.medio} delay={120 + i * 60}>
              <div className="ed-row">
                <span className="ed-index">0{i + 1}</span>
                {/* One flex <p> with two <span> children — not two stacked
                    block <p>s — avoids html2canvas dropping the first line
                    (see the capacity-pill fix above). */}
                <p className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <span className="text-[1rem] font-bold" style={{ color: "var(--ink)" }}>
                    {m.medio}
                  </span>
                  <span className="text-[0.86rem] leading-snug sm:max-w-[22rem] sm:text-right" style={{ color: "var(--ink-soft)" }}>
                    {m.nota}
                  </span>
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
          <div className="kicker">04 · Tarifario de colaboraciones</div>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="mt-4 text-[1.6rem] leading-[1.12] sm:text-[2rem]">
            <span className="heading-script">Formatos disponibles</span>{" "}
            <span className="heading-bold">para marcas</span>
          </h2>
          <p className="mt-2 text-[0.88rem]" style={{ color: "var(--ink-faint)" }}>
            En Instagram y TikTok.
          </p>
        </Reveal>

        <div className="mt-6">
          {RATES.map((r, i) => (
            <Reveal key={r.formato} delay={120 + i * 70}>
              <div className="flex items-baseline justify-between gap-4 border-t py-4" style={{ borderColor: "var(--line)" }}>
                {/* One <p> with a <br/> instead of two stacked <p>s — see the
                    capacity-pill fix note above for why. */}
                <p>
                  <span className="text-[0.95rem] font-semibold" style={{ color: "var(--ink)" }}>
                    {r.formato}
                  </span>
                  <br />
                  <span className="text-[0.8rem]" style={{ color: "var(--ink-faint)" }}>
                    {r.incluye}
                  </span>
                </p>
                <p className="stat-number shrink-0 text-[1.7rem]" style={{ color: "var(--accent)" }}>
                  S/{r.precio}
                </p>
              </div>
            </Reveal>
          ))}
          <div style={{ borderTop: "1px solid var(--line)" }} />
        </div>

        <Reveal delay={320}>
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
