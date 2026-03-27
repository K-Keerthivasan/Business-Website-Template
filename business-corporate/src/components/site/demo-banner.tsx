"use client";

import { useState } from "react";
import { ExternalLink, MonitorDot, X } from "lucide-react";
import { cn } from "@/lib/utils";

const BACK_URL = "https://k2digitalmedia.ca";
const LOGO_URL = "/Logo.png";

export function DemoBanner() {
  const [desktopOpen, setDesktopOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[70] border-b border-[#2fa8c7]/20 bg-[linear-gradient(90deg,#0b1224,#0d1a30)] text-[10px] uppercase tracking-[0.18em] text-white/62 shadow-[0_10px_30px_rgba(3,8,18,0.16)] sm:text-[11px]">
        <div className="mx-auto flex min-h-12 max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-2 px-3 py-2 text-center sm:px-6">
          <span className="size-2 rounded-full bg-[#2fa8c7] shadow-[0_0_10px_#2fa8c7]" />
          <span className="whitespace-nowrap">This is a demo site built by</span>
          <a
            href={BACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#61d7f4] underline decoration-[#61d7f4]/35 underline-offset-4 transition hover:text-white"
          >
            K2 Digital Media
          </a>
          <span className="hidden text-white/25 sm:inline">|</span>
          <a
            href={BACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-[#2fa8c7]/35 px-3 py-1 font-semibold text-white/78 transition hover:border-[#2fa8c7]/70 hover:text-white"
          >
            Go Back
            <ExternalLink className="size-3" />
          </a>
        </div>
      </div>

      <div className="fixed right-0 top-1/2 z-[69] hidden -translate-y-1/2 items-center md:flex">
        <button
          type="button"
          onClick={() => setDesktopOpen((value) => !value)}
          aria-expanded={desktopOpen}
          aria-controls="k2-desktop-demo-panel"
          className="flex h-32 items-center justify-center rounded-l-xl border border-r-0 border-[#2fa8c7]/30 bg-[#0d1a30] px-2 text-[10px] uppercase tracking-[0.22em] text-[#61d7f4] transition hover:bg-[#13233f]"
        >
          <span
            className={cn(
              "mr-1 text-base transition-transform",
              desktopOpen ? "rotate-0" : "rotate-180",
            )}
          >
            &rsaquo;
          </span>
          <span className="[writing-mode:vertical-rl]">Demo</span>
        </button>
        <aside
          id="k2-desktop-demo-panel"
          className={cn(
            "overflow-hidden border border-r-0 border-[#2fa8c7]/25 bg-[linear-gradient(135deg,#08101d,#0d1a30)] shadow-[-10px_0_35px_rgba(0,0,0,0.28)] transition-all duration-300",
            desktopOpen ? "w-[220px] px-5 py-6" : "w-0 px-0 py-0",
          )}
        >
          <div
            className={cn(
              "flex flex-col items-center gap-4 text-center transition-opacity duration-200",
              desktopOpen ? "opacity-100" : "pointer-events-none opacity-0",
            )}
          >
            <div className="flex size-16 items-center justify-center rounded-2xl border border-[#2fa8c7]/22 bg-[#2fa8c7]/8">
              <img src={LOGO_URL} alt="K2 Digital Media" className="size-12 object-contain" />
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2fa8c7]/30 bg-[#2fa8c7]/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#61d7f4]">
              <MonitorDot className="size-3.5" />
              Demo Site
            </div>
            <p className="text-sm leading-6 text-white/66">
              This site is a live demo built by <strong className="font-semibold text-white">K2 Digital Media</strong>.
            </p>
            <a
              href={BACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#2fa8c7,#1d7a99)] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:scale-[0.985] hover:opacity-90"
            >
              Back to K2DM
              <ExternalLink className="size-3.5" />
            </a>
          </div>
        </aside>
      </div>

      <div className="fixed inset-x-4 bottom-4 z-[69] md:hidden">
        {mobileOpen ? (
          <div className="rounded-[28px] border border-[#2fa8c7]/25 bg-[linear-gradient(160deg,rgba(8,15,30,0.97),rgba(13,26,48,0.97))] p-4 text-white shadow-[0_16px_40px_rgba(0,0,0,0.32)] backdrop-blur-xl">
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-[#2fa8c7]/22 bg-[#2fa8c7]/8">
                  <img src={LOGO_URL} alt="K2 Digital Media" className="size-9 object-contain" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#61d7f4]">Demo Site</p>
                  <p className="mt-1 text-sm leading-5 text-white/74">
                    Built by <span className="font-semibold text-white">K2 Digital Media</span>
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="rounded-full border border-white/10 p-2 text-white/70 transition hover:text-white"
                aria-label="Close demo banner"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <a
                href={BACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#2fa8c7,#1d7a99)] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white"
              >
                Visit Main Site
                <ExternalLink className="size-3.5" />
              </a>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-[#2fa8c7]/30 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/74"
              >
                Keep Browsing
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-[#2fa8c7]/30 bg-[linear-gradient(135deg,rgba(8,15,30,0.96),rgba(13,26,48,0.96))] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#61d7f4] shadow-[0_12px_30px_rgba(0,0,0,0.22)] backdrop-blur-xl"
            >
              <span className="size-2 rounded-full bg-[#2fa8c7] shadow-[0_0_10px_#2fa8c7]" />
              Demo Site
            </button>
          </div>
        )}
      </div>

      <div className="fixed inset-x-0 bottom-0 z-[68] hidden border-t border-[#2fa8c7]/15 bg-[rgba(8,15,30,0.94)] px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-white/38 backdrop-blur-xl md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3">
          <img src={LOGO_URL} alt="K2 Digital Media" className="size-5 object-contain opacity-80" />
          <span>Demo by</span>
          <a
            href={BACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#61d7f4] transition hover:text-white"
          >
            K2 Digital Media
          </a>
          <span className="text-white/16">|</span>
          <a
            href={BACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/52 transition hover:text-white"
          >
            Visit Main Site
          </a>
        </div>
      </div>
    </>
  );
}
