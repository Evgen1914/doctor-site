import Link from "next/link";
import { Heart, Phone, MapPin } from "lucide-react";
import { TelegramIcon, InstagramIcon, social } from "@/components/social-icons";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold font-[family-name:var(--font-figtree)] text-foreground">
                Рипсиме Налбандян
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Профессиональная гинекологическая помощь с заботой о вашем здоровье
              и комфорте.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Навигация</h3>
            <ul className="mt-3 space-y-2">
              {[
                { name: "Главная", href: "/" },
                { name: "Услуги", href: "/services" },
                { name: "О враче", href: "/about" },
                { name: "Запись на приём", href: "/appointment" },
                { name: "Контакты", href: "/contacts" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Контакты</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={`tel:${social.phone}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-primary cursor-pointer"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>{social.phoneDisplay}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>г. Город, ул. Улица, д. 1</span>
              </li>
            </ul>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={social.telegramWrite}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Написать в Telegram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted text-muted-foreground transition-all duration-200 hover:border-primary hover:text-primary cursor-pointer"
              >
                <TelegramIcon className="h-4 w-4" />
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted text-muted-foreground transition-all duration-200 hover:border-primary hover:text-primary cursor-pointer"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Документы
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary cursor-pointer"
                >
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link
                  href="/offer"
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary cursor-pointer"
                >
                  Договор оферты
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Все права защищены. Имеются противопоказания, необходима консультация специалиста.</p>
        </div>
      </div>
    </footer>
  );
}
