"use client";

import { useState } from "react";

async function forceRevealVisible(root: Document | HTMLElement) {
  const revealEls = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
  const prevTransitions = revealEls.map((n) => n.style.transition);
  revealEls.forEach((n) => {
    n.style.transition = "none";
    n.classList.add("is-visible");
  });
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  return () => revealEls.forEach((n, i) => (n.style.transition = prevTransitions[i]));
}

export default function DownloadPdfButton({
  mode,
  targetId,
  slideIds,
  fileName,
}: {
  /** "flow": one tall element, sliced into A4-portrait pages.
   *  "slides": a list of discrete elements, one PDF page per element, each
   *  sized to that element's own aspect ratio (for the 16:9 deck). */
  mode: "flow" | "slides";
  targetId?: string;
  slideIds?: string[];
  fileName: string;
}) {
  const [busy, setBusy] = useState(false);

  async function handleDownload() {
    if (busy) return;
    setBusy(true);
    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);

      // Ensures every @fontsource weight is fully loaded before capture —
      // otherwise html2canvas can reserve a text box without painting its
      // glyphs if the weight finishes loading mid-capture.
      if (typeof document !== "undefined" && "fonts" in document) {
        await document.fonts.ready;
      }

      if (mode === "flow" && targetId) {
        const el = document.getElementById(targetId);
        if (!el) return;
        const restore = await forceRevealVisible(el);

        const canvas = await html2canvas(el, {
          scale: 2,
          useCORS: true,
          backgroundColor: "#fffefc",
          windowWidth: el.scrollWidth,
        });
        restore();

        const pageWidthMm = 210;
        const maxPageHeightMm = 297;
        const pxPerMm = canvas.width / pageWidthMm;
        const maxPageHeightPx = maxPageHeightMm * pxPerMm;

        const slices: number[] = [];
        let remainingPx = canvas.height;
        while (remainingPx > 0) {
          const h = Math.min(maxPageHeightPx, remainingPx);
          slices.push(h);
          remainingPx -= h;
        }

        let pdf: InstanceType<typeof jsPDF> | null = null;
        let renderedPx = 0;

        for (const sliceHeightPx of slices) {
          const sliceHeightMm = sliceHeightPx / pxPerMm;
          const pageCanvas = document.createElement("canvas");
          pageCanvas.width = canvas.width;
          pageCanvas.height = sliceHeightPx;
          const ctx = pageCanvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(canvas, 0, renderedPx, canvas.width, sliceHeightPx, 0, 0, canvas.width, sliceHeightPx);
          }
          const imgData = pageCanvas.toDataURL("image/jpeg", 0.95);
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
        return;
      }

      if (mode === "slides" && slideIds && slideIds.length > 0) {
        const restore = await forceRevealVisible(document);
        let pdf: InstanceType<typeof jsPDF> | null = null;

        for (const id of slideIds) {
          const el = document.getElementById(id);
          if (!el) continue;
          const canvas = await html2canvas(el, { scale: 2, useCORS: true, backgroundColor: "#ffffff" });

          const pageWidthMm = 297; // landscape A4 width as the page frame
          const pxPerMm = canvas.width / pageWidthMm;
          const pageHeightMm = canvas.height / pxPerMm;
          const imgData = canvas.toDataURL("image/jpeg", 0.95);

          if (!pdf) {
            pdf = new jsPDF({ unit: "mm", format: [pageWidthMm, pageHeightMm], orientation: "landscape" });
          } else {
            pdf.addPage([pageWidthMm, pageHeightMm], "landscape");
          }
          pdf.addImage(imgData, "JPEG", 0, 0, pageWidthMm, pageHeightMm);
        }
        restore();
        pdf?.save(fileName);
      }
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={busy}
      className="tab-btn no-print cursor-pointer border-0"
      style={{ background: "var(--accent)", color: "#fff", boxShadow: "0 10px 24px -12px rgba(10,167,189,0.6)" }}
    >
      {busy ? "Generando PDF…" : "Descargar PDF ↓"}
    </button>
  );
}
