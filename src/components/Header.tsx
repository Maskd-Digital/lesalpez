"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/nav";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="container-page flex items-center justify-between py-5 md:py-7">
        <Link href="/" className="relative block h-12 w-[190px] md:h-14 md:w-[220px]">
          <Image
            src="/assets/logo.png"
            alt="Les Alpes D’Azur — Holiday Accommodation"
            fill
            priority
            sizes="220px"
            className="object-contain object-left"
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active =
              "match" in link && link.match
                ? pathname === link.match || pathname.startsWith(`${link.match}/`)
                : false;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.9375rem] font-normal text-white/95 transition-opacity hover:opacity-75 ${
                  active ? "underline decoration-1 underline-offset-8" : ""
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-6 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-white transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-white/20 bg-ink/90 px-[var(--page-pad-x)] py-4 backdrop-blur md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const active =
                "match" in link && link.match
                  ? pathname === link.match ||
                    pathname.startsWith(`${link.match}/`)
                  : false;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-2 text-white ${
                      active ? "underline decoration-1 underline-offset-4" : ""
                    }`}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
