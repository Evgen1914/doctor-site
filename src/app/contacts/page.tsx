import Link from "next/link";
import type { Metadata } from "next";
import {
  Phone,
  MapPin,
  Clock,
  CalendarCheck,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { TelegramIcon, InstagramIcon, social } from "@/components/social-icons";

export const metadata: Metadata = {
  title: "Контакты — Налбандян Рипсиме Асатуровна",
  description:
    "Контактная информация, адрес, часы работы. Свяжитесь с нами по телефону, в Telegram или Instagram, либо запишитесь на приём онлайн.",
};

const contacts = [
  {
    icon: Phone,
    title: "Телефон",
    value: social.phoneDisplay,
    description: "Звоните для записи и консультаций",
    href: `tel:${social.phone}`,
  },
  {
    icon: TelegramIcon,
    title: "Telegram",
    value: "@dr_ripsime",
    description: "Напишите или подпишитесь на канал",
    href: social.telegram,
  },
  {
    icon: InstagramIcon,
    title: "Instagram",
    value: "@n_ripsi",
    description: "Полезное о женском здоровье",
    href: social.instagram,
  },
  {
    icon: MapPin,
    title: "Адрес",
    value: "г. Город, ул. Улица, д. 1",
    description: "Кабинет 101, 1 этаж",
    href: "#",
  },
];

const schedule = [
  { day: "Понедельник", hours: "09:00 — 17:00" },
  { day: "Вторник", hours: "09:00 — 17:00" },
  { day: "Среда", hours: "09:00 — 17:00" },
  { day: "Четверг", hours: "09:00 — 17:00" },
  { day: "Пятница", hours: "09:00 — 16:00" },
  { day: "Суббота", hours: "10:00 — 14:00" },
  { day: "Воскресенье", hours: "Выходной" },
];

export default function ContactsPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-[family-name:var(--font-figtree)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Контакты
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {contacts.map((contact) => (
              <li key={contact.title} className="list-none">
                <a
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block cursor-pointer"
                >
                  <div className="relative h-full rounded-2xl border border-border/60 p-2">
                    <GlowingEffect
                      spread={40}
                      glow
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={3}
                    />
                    <div className="relative flex h-full items-start gap-4 rounded-xl border border-border/40 bg-card p-6 shadow-sm">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-muted">
                        <contact.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">
                          {contact.title}
                        </h3>
                        <p className="mt-1 text-base font-semibold text-foreground">
                          {contact.value}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Schedule */}
      <section className="border-t border-border/60 bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                <Clock className="h-4 w-4" />
                Расписание
              </div>
              <h2 className="font-[family-name:var(--font-figtree)] text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Часы работы
              </h2>
              <div className="mt-6 overflow-hidden rounded-xl border border-border">
                <table className="w-full">
                  <tbody>
                    {schedule.map((item, i) => (
                      <tr
                        key={item.day}
                        className={
                          i % 2 === 0 ? "bg-card" : "bg-muted/30"
                        }
                      >
                        <td className="px-4 py-3 text-sm font-medium text-foreground">
                          {item.day}
                        </td>
                        <td
                          className={`px-4 py-3 text-right text-sm ${
                            item.hours === "Выходной"
                              ? "text-muted-foreground"
                              : "font-medium text-primary"
                          }`}
                        >
                          {item.hours}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                <MapPin className="h-4 w-4" />
                Расположение
              </div>
              <h2 className="font-[family-name:var(--font-figtree)] text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Как нас найти
              </h2>
              <div className="mt-6 aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted">
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <MapPin className="mx-auto h-10 w-10 text-primary/30" />
                    <p className="mt-3 text-sm">
                      Здесь будет карта
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground/60">
                      Вставьте iframe Яндекс.Карт или Google Maps
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Удобный подъезд на автомобиле. Бесплатная парковка перед зданием.
                Ближайшая остановка общественного транспорта в 5 минутах ходьбы.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="font-[family-name:var(--font-figtree)] text-2xl font-bold text-foreground sm:text-3xl">
            Запишитесь на приём онлайн
          </h2>
          <p className="mt-3 text-muted-foreground">
            Это быстро и удобно — выберите дату, время и услугу.
          </p>
          <Link
            href="/appointment"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:bg-primary/90 hover:shadow-xl cursor-pointer"
          >
            <CalendarCheck className="h-5 w-5" />
            Записаться
          </Link>
        </div>
      </section>
    </>
  );
}
