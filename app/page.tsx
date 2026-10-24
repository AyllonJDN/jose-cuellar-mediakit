import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";
import DownloadPdfButton from "@/components/DownloadPdfButton";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "var(--paper)" }}>
      {/* Sticky action bar — outside the captured document, never in the PDF */}
      <div
        className="no-print sticky top-0 z-50 flex items-center justify-between px-5 py-3 sm:px-8"
        style={{ background: "rgba(6,36,45,0.92)", backdropFilter: "blur(6px)" }}
      >
        <span
          className="text-xs tracking-[0.18em] text-white/70"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          JOSÉ CUELLAR · MEDIA KIT
        </span>
        <DownloadPdfButton targetId="mediakit-doc" fileName="Media-Kit-Jose-Cuellar.pdf" />
      </div>

      {/* ============ DOCUMENT (this is what gets captured to PDF) ============ */}
      <div id="mediakit-doc" className="mx-auto max-w-[880px]" style={{ background: "var(--paper)" }}>
        {/* ---------- HERO ---------- */}
        <section className="relative overflow-hidden px-6 pb-16 pt-12 sm:px-12 sm:pt-16" style={{ background: "var(--gradient)" }}>
          <div className="ripple ripple-pulse" style={{ width: 420, height: 420, background: "#5fe3cf", top: -140, right: -140 }} />
          <div className="ripple ripple-pulse" style={{ width: 300, height: 300, background: "#19b7cf", bottom: -100, left: -100, animationDelay: "2.2s" }} />

          <div className="relative flex items-center justify-between" style={{ color: "rgba(255,255,255,0.7)" }}>
            <span className="text-[0.68rem] tracking-[0.2em]" style={{ fontFamily: "var(--font-sans)" }}>
              MEDIA KIT · COLABORACIONES DE CONTENIDO
            </span>
            <span className="text-[0.68rem] tracking-[0.2em]" style={{ fontFamily: "var(--font-sans)" }}>
              2026
            </span>
          </div>

          <div className="relative mt-10 flex flex-col-reverse items-center gap-8 sm:mt-14 sm:flex-row sm:items-end sm:justify-between">
            <div className="text-center sm:text-left">
              <p className="text-sm" style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.75)" }}>
                Economista y especialista en gestión y comunicación del agua
              </p>
              <h1
                className="mt-3 text-[2.6rem] leading-[0.98] font-light text-white sm:text-[3.6rem]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                José
                <br />
                Cuellar
              </h1>
              <p className="mt-4 text-base" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.85)" }}>
                Creador de <span className="accent-word-dark">El Pez en el Agua</span>
              </p>
            </div>

            <div
              className="h-40 w-32 shrink-0 overflow-hidden rounded-2xl sm:h-56 sm:w-44"
              style={{ border: "2px solid rgba(255,255,255,0.25)", boxShadow: "0 25px 60px -20px rgba(0,0,0,0.6)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/photos/jose.jpg" alt="José Cuellar" className="h-full w-full object-cover" />
            </div>
          </div>

          <p
            className="relative mt-10 text-lg italic text-white sm:text-xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            “Todo en tu vida es agua.”
          </p>
        </section>

        <WaveDivider color="var(--paper)" />

        {/* ---------- QUIÉN ES ---------- */}
        <section className="sheet sheet-pull px-6 py-14 sm:px-12 sm:py-16" style={{ background: "var(--paper)" }}>
          <Reveal>
            <span className="pill" style={{ background: "var(--paper-2)", color: "var(--teal)" }}>
              01 · QUIÉN ES
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2
              className="mt-5 text-[1.9rem] leading-[1.1] font-light sm:text-[2.3rem]"
              style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
            >
              Del sector del agua a una <span className="accent-word">conversación pública</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-[1.05rem] leading-relaxed" style={{ color: "rgba(6,36,45,0.75)" }}>
              José Cuellar es economista, con formación de posgrado vinculada a la gestión del agua
              y experiencia en recursos hídricos, saneamiento, regulación y articulación
              institucional. Su recorrido combina el conocimiento del sector con una vocación por
              investigar, comunicar y acercar temas técnicos a la vida cotidiana.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 text-[1.05rem] leading-relaxed" style={{ color: "rgba(6,36,45,0.75)" }}>
              Es creador de <strong>El Pez en el Agua</strong>, un espacio de divulgación desde el
              que explica cómo el agua se relaciona con las decisiones públicas, las ciudades, la
              economía y la vida de las personas. Su estilo une rigor, ejemplos cercanos y una
              comunicación dinámica.
            </p>
          </Reveal>
        </section>

        {/* ---------- PLATAFORMAS ---------- */}
        <section className="px-6 py-14 sm:px-12 sm:py-16" style={{ background: "var(--paper-2)" }}>
          <Reveal>
            <span className="pill" style={{ background: "#ffffff", color: "var(--teal)" }}>
              02 · CONTENIDO Y PLATAFORMAS
            </span>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-[1.05rem] leading-relaxed" style={{ color: "rgba(6,36,45,0.8)" }}>
              Colaboraciones de contenido vinculadas con el agua, la prevención, la vida cotidiana y
              temas de interés público, desarrolladas con un enfoque informativo y accesible.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="pill" style={{ background: "var(--ink)", color: "white" }}>
                Instagram
              </span>
              <span className="pill" style={{ background: "var(--ink)", color: "white" }}>
                TikTok
              </span>
            </div>
          </Reveal>
        </section>

        {/* ---------- PRESENCIA EN MEDIOS ---------- */}
        <section className="relative overflow-hidden px-6 py-14 sm:px-12 sm:py-16" style={{ background: "var(--gradient)" }}>
          <div className="ripple ripple-pulse" style={{ width: 320, height: 320, background: "#5fe3cf", bottom: -120, right: -80, animationDelay: "1.1s" }} />
          <Reveal>
            <span className="pill" style={{ background: "rgba(255,255,255,0.15)", color: "white" }}>
              03 · PRESENCIA EN MEDIOS
            </span>
          </Reveal>
          <Reveal delay={90}>
            <h2
              className="mt-5 text-[1.7rem] leading-[1.15] font-light text-white sm:text-[2rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Su conocimiento ya circula <span className="accent-word-dark">fuera de sus propias redes</span>
            </h2>
          </Reveal>

          <div className="relative mt-8 grid grid-cols-2 gap-4">
            {[
              { medio: "ATV", nota: "Entrevistas sobre El Niño." },
              { medio: "RORO Network", nota: "Conversación sobre El Niño, abastecimiento, cuencas y economía." },
              { medio: "Todo Good", nota: "Conversación sobre riesgo, medidas para familias y responsabilidad pública." },
              { medio: "Latina", nota: "Participación sobre infraestructura de agua y saneamiento en Lima Sur." },
            ].map((m, i) => (
              <Reveal key={m.medio} delay={140 + i * 70}>
                <div
                  className="h-full rounded-2xl p-4"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <p className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-sans)" }}>
                    {m.medio}
                  </p>
                  <p className="mt-1.5 text-[0.82rem] leading-snug" style={{ color: "rgba(255,255,255,0.8)" }}>{m.nota}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={480}>
            <p className="relative mt-6 text-[0.78rem] italic" style={{ color: "rgba(255,255,255,0.6)" }}>
              La validación final incorporará clips, fechas y capturas autorizadas.
            </p>
          </Reveal>
        </section>

        <WaveDivider color="var(--paper)" flip />

        {/* ---------- TARIFARIO ---------- */}
        <section className="sheet sheet-pull px-6 py-14 sm:px-12 sm:py-16" style={{ background: "var(--paper)" }}>
          <Reveal>
            <span className="pill" style={{ background: "var(--paper-2)", color: "var(--teal)" }}>
              04 · TARIFARIO DE COLABORACIONES
            </span>
          </Reveal>
          <Reveal delay={90}>
            <h2
              className="mt-5 text-[1.9rem] leading-[1.1] font-light sm:text-[2.2rem]"
              style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
            >
              Formatos disponibles <span className="accent-word">para marcas</span>
            </h2>
            <p className="mt-3 text-[0.95rem]" style={{ color: "rgba(6,36,45,0.6)" }}>
              En Instagram y TikTok.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <table className="rate-table mt-8">
              <thead>
                <tr>
                  <th>Formato</th>
                  <th>Incluye</th>
                  <th style={{ textAlign: "right" }}>Inversión</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pr-4 font-medium" style={{ color: "var(--ink)" }}>
                    Historia en Instagram
                  </td>
                  <td className="pr-4 text-[0.92rem]" style={{ color: "rgba(6,36,45,0.65)" }}>
                    Una historia con mención de marca y enlace, cuando corresponda.
                  </td>
                  <td className="text-right font-semibold whitespace-nowrap" style={{ fontFamily: "var(--font-display)", color: "var(--teal)" }}>
                    S/ 500
                  </td>
                </tr>
                <tr>
                  <td className="pr-4 font-medium" style={{ color: "var(--ink)" }}>
                    Reel en Instagram o video en TikTok
                  </td>
                  <td className="pr-4 text-[0.92rem]" style={{ color: "rgba(6,36,45,0.65)" }}>
                    Una pieza de contenido publicada en una de las dos plataformas.
                  </td>
                  <td className="text-right font-semibold whitespace-nowrap" style={{ fontFamily: "var(--font-display)", color: "var(--teal)" }}>
                    S/ 1,800
                  </td>
                </tr>
                <tr>
                  <td className="pr-4 font-medium" style={{ color: "var(--ink)" }}>
                    Video en ambas redes
                  </td>
                  <td className="pr-4 text-[0.92rem]" style={{ color: "rgba(6,36,45,0.65)" }}>
                    La misma pieza publicada en Instagram y TikTok.
                  </td>
                  <td className="text-right font-semibold whitespace-nowrap" style={{ fontFamily: "var(--font-display)", color: "var(--teal)" }}>
                    S/ 2,300
                  </td>
                </tr>
              </tbody>
            </table>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 rounded-2xl p-5" style={{ background: "var(--paper-2)" }}>
              <p className="text-[0.88rem]" style={{ color: "rgba(6,36,45,0.75)" }}>
                Todas las tarifas están expresadas en soles y son más IGV.
              </p>
              <p className="mt-2 text-[0.88rem]" style={{ color: "rgba(6,36,45,0.75)" }}>
                La inversión publicitaria con ads se cotiza de manera semanal y por separado. No
                está incluida en las tarifas de publicación.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ---------- FOOTER / CONTACTO ---------- */}
        <section className="relative overflow-hidden px-6 py-14 text-center sm:px-12 sm:py-16" style={{ background: "var(--gradient)" }}>
          <div className="ripple ripple-pulse" style={{ width: 380, height: 380, background: "#19b7cf", top: -160, left: "50%", marginLeft: -190 }} />
          <Reveal className="relative">
            <p
              className="text-xl italic leading-snug text-white sm:text-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Todo en tu vida es agua.
              <br />Y entenderla cambia la manera de actuar.
            </p>
          </Reveal>

          <Reveal delay={120} className="relative mt-9 flex flex-col items-center gap-1.5" style={{ color: "rgba(255,255,255,0.85)" }}>
            <span className="text-sm" style={{ fontFamily: "var(--font-sans)" }}>
              Instagram · @_elpezenelagua
            </span>
            <span className="text-sm" style={{ fontFamily: "var(--font-sans)" }}>
              Coordinación comercial · karla@matizuno.com
            </span>
          </Reveal>

          <Reveal delay={200} className="relative mt-10 text-[0.68rem] tracking-[0.18em]" style={{ color: "rgba(255,255,255,0.45)" }}>
            JOSÉ CUELLAR · EL PEZ EN EL AGUA · MEDIA KIT 2026
          </Reveal>
        </section>
      </div>
    </div>
  );
}
