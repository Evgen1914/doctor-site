"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Главная", href: "/" },
  { name: "Услуги", href: "/services" },
  { name: "О враче", href: "/about" },
  { name: "Контакты", href: "/contacts" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Heart className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold font-[family-name:var(--font-figtree)] text-foreground">
            Рипсиме Налбандян
          </span>
        </Link>

        <div className="hidden md:flex md:items-center md:gap-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer",
                pathname === item.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md cursor-pointer"
          >
            Записаться
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden rounded-lg p-2 text-muted-foreground hover:bg-muted cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="space-y-1 px-4 py-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200 cursor-pointer",
                  pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/appointment"
              onClick={() => setMobileOpen(false)}
              className="mt-2 block rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 cursor-pointer"
            >
              Записаться на приём
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
