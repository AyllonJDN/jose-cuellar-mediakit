"use client";

import { useState } from "react";
import VerticalDoc from "@/components/VerticalDoc";
import HorizontalDeck from "@/components/HorizontalDeck";
import DownloadPdfButton from "@/components/DownloadPdfButton";

const DECK_SLIDE_IDS = ["deck-slide-1", "deck-slide-2", "deck-slide-3", "deck-slide-4", "deck-slide-5"];

export default function Home() {
  const [tab, setTab] = useState<"vertical" | "horizontal">("vertical");

  return (
    <div className="min-h-screen" style={{ background: "var(--wash), var(--paper)" }}>
      {/* Sticky action bar — outside both captured documents, never in the PDF */}
      <div
        className="no-print sticky top-0 z-50 flex flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-8"
        style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", borderBottom: "1px solid var(--line)" }}
      >
        <span className="wordmark text-[0.85rem]">
          JOSÉ <span className="accent">CUELLAR</span> <span style={{ color: "var(--ink-faint)", fontWeight: 500 }}>· Media Kit</span>
        </span>

        <div className="flex items-center gap-2">
          <div className="flex rounded-full p-1" style={{ background: "var(--accent-pale)" }}>
            <button
              onClick={() => setTab("vertical")}
              className="tab-btn cursor-pointer border-0"
              style={{
                background: tab === "vertical" ? "var(--ink)" : "transparent",
                color: tab === "vertical" ? "#fff" : "var(--ink-soft)",
              }}
            >
              Vertical
            </button>
            <button
              onClick={() => setTab("horizontal")}
              className="tab-btn cursor-pointer border-0"
              style={{
                background: tab === "horizontal" ? "var(--ink)" : "transparent",
                color: tab === "horizontal" ? "#fff" : "var(--ink-soft)",
              }}
            >
              Horizontal
            </button>
          </div>

          {tab === "vertical" ? (
            <DownloadPdfButton mode="flow" targetId="doc-vertical" fileName="Media-Kit-Jose-Cuellar-vertical.pdf" />
          ) : (
            <DownloadPdfButton mode="slides" slideIds={DECK_SLIDE_IDS} fileName="Media-Kit-Jose-Cuellar-horizontal.pdf" />
          )}
        </div>
      </div>

      <div className="px-4 py-8 sm:px-8 sm:py-12">
        {tab === "vertical" ? (
          <div id="doc-vertical">
            <VerticalDoc />
          </div>
        ) : (
          <div className="overflow-x-auto pb-4">
            <HorizontalDeck />
          </div>
        )}
      </div>
    </div>
  );
}
