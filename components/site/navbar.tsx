"use client";

import Image from "next/image";
import Link from "next/link";
import ClubIcon from "@/assets/ClubIcon.png";
import { ThemeToggle } from "@/components/site/theme-toggle";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About us" },
  { href: "/#members", label: "Members" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-background/75 backdrop-blur">
      <div className="grid h-16 w-full grid-cols-[auto_1fr_auto] items-center gap-5 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="overflow-hidden rounded-sm border border-brand/60 bg-card">
            <Image
              src={ClubIcon}
              alt="Club logo"
              width={36}
              height={36}
              className="h-9 w-9 object-cover"
              priority
            />
          </div>
          <div className="leading-tight">
            <p className="text-xl font-semibold text-foreground">Generative AI</p>
            <p className="text-xs text-muted">From prompts to projects</p>
          </div>
        </Link>
        <nav className="hidden justify-self-end pr-4 text-[17px] font-medium text-muted md:flex md:gap-9">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-brand">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 justify-self-end">
          <ThemeToggle />

          <Link
            href="/admin/login"
            className="rounded-lg border border-brand/70 px-4 py-2 text-sm font-medium text-foreground transition hover:border-brand hover:text-brand"
          >
            Admin Login
          </Link>
        </div>
      </div>
    </header>
  );
}
