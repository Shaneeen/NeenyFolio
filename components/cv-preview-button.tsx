"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

import docIcon from "@/assets/docIcon.png";

type CVPreviewButtonProps = {
  cvUrl?: string;
  fileName?: string;
  updatedLabel?: string;
  buttonLabel?: string;
};

export function CVPreviewButton({
  cvUrl = "/shaneenResume.pdf",
  fileName = "shaneenResume.pdf",
  updatedLabel = "Last updated - 2026",
  buttonLabel = "View Resume"
}: CVPreviewButtonProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const previewUrl = `${cvUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="interactive-link-pill inline-flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-rust/20 bg-white/82 px-4 py-3 text-[14px] font-semibold text-ink"
      >
        <Image
          src={docIcon}
          alt="Document icon"
          width={22}
          height={22}
          className="h-[22px] w-[22px] object-contain"
        />
        <span>{buttonLabel}</span>
      </button>

      {mounted && open
        ? createPortal(
            <div
              className="fixed inset-0 z-[999] flex items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,245,238,.35),rgba(44,26,23,.5))] px-4 py-6 backdrop-blur-md"
              onClick={() => setOpen(false)}
            >
              <div
                className="w-full max-w-5xl overflow-hidden rounded-[30px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,.8),rgba(255,250,246,.68))] shadow-[0_28px_90px_rgba(95,63,58,.22)] backdrop-blur-xl"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-center justify-between gap-4 border-b border-rust/10 bg-[linear-gradient(180deg,rgba(255,255,255,.55),rgba(255,248,244,.25))] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label="Close preview"
                      onClick={() => setOpen(false)}
                      className="group flex h-3 w-3 items-center justify-center rounded-full bg-[#ff5f57]"
                    >
                      <span className="text-[8px] font-bold leading-none text-black/65 opacity-0 transition group-hover:opacity-100">
                        x
                      </span>
                    </button>
                    <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                  </div>

                  <div className="min-w-0 flex-1 text-center text-sm font-medium text-muted">
                    <span className="truncate">{fileName}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={cvUrl}
                      download
                      className="rounded-full border border-rust/10 bg-white px-4 py-2 text-xs font-semibold text-ink transition hover:bg-[#fff7f2]"
                    >
                      Download Resume
                    </a>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="rounded-full border border-rust/10 bg-white/55 px-3 py-2 text-xs font-semibold text-muted transition hover:bg-white hover:text-ink"
                    >
                      Close
                    </button>
                  </div>
                </div>

                <div className="bg-[radial-gradient(circle_at_top,rgba(231,196,188,.16),rgba(255,255,255,0))] p-3 sm:p-4">
                  <div className="h-[68vh] overflow-hidden rounded-[0px] border border-rust/10 bg-white shadow-[0_18px_40px_rgba(174,105,101,.08),inset_0_1px_0_rgba(255,255,255,.72)]">
                    <iframe
                      src={previewUrl}
                      title="Resume preview"
                      className="h-full w-full"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-rust/10 bg-[linear-gradient(180deg,rgba(255,255,255,.28),rgba(255,248,244,.48))] px-5 py-4 text-xs text-muted">
                  <p>{updatedLabel}</p>
                  <a
                    href={cvUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-rust transition hover:text-ink"
                  >
                    Open in new tab
                  </a>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
