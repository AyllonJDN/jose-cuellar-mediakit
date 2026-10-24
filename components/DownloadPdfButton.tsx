"use client";

import { useState } from "react";

export default function DownloadPdfButton({
  targetId,
  fileName,
}: {
  targetId: string;
  fileName: string;
}) {
  const [busy, setBusy] = useState(false);

  async function handleDownload() {
    if (busy) return;
    setBusy(true);
    try {
      const el = document.getElementById(targetId);
      if (!el) return;

      // Force every scroll-reveal element visible so the capture shows everything.
      const revealEls = Array.from(el.querySelectorAll<HTMLElement>(".reveal"));
      const prevTransitions = revealEls.map((n) => n.style.transition);
      revealEls.forEach((n) => {
        n.style.transition = "none";
        n.classList.add("is-visible");
      });

      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);

      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#fbfdfd",
        windowWidth: el.scrollWidth,
      });

      revealEls.forEach((n, i) => {
        n.style.transition = prevTransitions[i];
      });

      const pageWidthMm = 210; // A4
      const maxPageHeightMm = 297;
      const pxPerMm = canvas.width / pageWidthMm;
      const maxPageHeightPx = maxPageHeightMm * pxPerMm;

      // Slice the full capture into page-sized chunks first, so the LAST
      // page can be sized to its actual remaining content instead of a
      // full A4 sheet — avoids a near-blank trailing page.
      const slices: { heightPx: number }[] = [];
      let remainingPx = canvas.height;
      while (remainingPx > 0) {
        const h = Math.min(maxPageHeightPx, remainingPx);
        slices.push({ heightPx: h });
        remainingPx -= h;
      }

      let pdf: InstanceType<typeof jsPDF> | null = null;
      let renderedPx = 0;

      for (let i = 0; i < slices.length; i++) {
        const sliceHeightPx = slices[i].heightPx;
        const sliceHeightMm = sliceHeightPx / pxPerMm;

        const pageCanvas = document.createElement("canvas");
        pageCanvas.width = canvas.width;
        pageCanvas.height = sliceHeightPx;
        const ctx = pageCanvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(
            canvas,
            0,
            renderedPx,
            canvas.width,
            sliceHeightPx,
            0,
            0,
            canvas.width,
            sliceHeightPx
          );
        }
        const imgData = pageCanvas.toDataURL("image/jpeg", 0.95);

        // jsPDF infers orientation from the format array, but if the
        // orientation string we pass disagrees with width vs. height it
        // silently swaps them back to match — so derive it from the
        // actual dimensions instead of hardcoding "portrait".
        const orientation = sliceHeightMm >= pageWidthMm ? "portrait" : "landscape";

        if (!pdf) {
          pdf = new jsPDF({ unit: "mm", format: [pageWidthMm, sliceHeightMm], orientation });
        } else {
          pdf.addPage([pageWidthMm, sliceHeightMm], orientation);
        }
        pdf.addImage(imgData, "JPEG", 0, 0, pageWidthMm, sliceHeightMm);

        renderedPx += sliceHeightPx;
      }

      pdf?.save(fileName);
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={busy}
      className="pill no-print cursor-pointer border-0"
      style={{
        background: "var(--gradient-soft)",
        color: "#06242d",
        fontWeight: 600,
        boxShadow: "0 10px 30px -12px rgba(12,122,147,0.55)",
      }}
    >
      {busy ? "Generando PDF…" : "Descargar PDF ↓"}
    </button>
  );
}
