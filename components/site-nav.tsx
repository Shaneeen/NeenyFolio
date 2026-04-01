"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { navItems } from "@/lib/site-data";

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-2rem)] max-w-max -translate-x-1/2 flex-wrap items-center justify-center gap-1 rounded-full border border-white/90 bg-white/75 px-4 py-2 shadow-[0_4px_24px_rgba(174,105,101,.1)] backdrop-blur-xl sm:w-auto sm:px-5">
      <span className="mr-2 whitespace-nowrap font-serif text-sm tracking-[-0.02em] text-rust">
        neenyfolio
      </span>
      {navItems.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "rounded-full px-3 py-1.5 text-[12.5px] font-medium transition",
              active
                ? "bg-rust text-white"
                : "text-muted hover:bg-rust/10 hover:text-ink"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
