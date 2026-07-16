import Link from "next/link";
import type { Metadata } from "next";
import {
  Video,
  MessageSquare,
  FileText,
  Baby,
  Pill,
  ClipboardCheck,
  Stethoscope,
  HeartPulse,
  Microscope,
  Syringe,
  CalendarCheck,
  Phone,
  MapPin,
  Monitor,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { TelegramIcon } from "@/components/social-icons";

export const metadata: Metadata = {
  title: "Услуги — Налбандян Рипсиме Асатуровна",
  description:
    "Онлайн-консультации гинеколога и очный приём в Москве. Первичная консультация, ведение беременности онлайн, расшифровка анализов, кольпоскопия и другое.",
};

const onlineServices = [
  {
    icon: Video,
    title: "Первичная онлайн-консультация",
    description:
      "Разбор жалоб и истории, ответы на вопросы, план обследования и лечения. Удобно из любой точки мира.",
    price: "5 000 ₽",
  },
  {
    icon: MessageSquare,
    title: "Повторная онлайн-консультация",
    description:
      "Контроль динамики, коррекция назначений, обсуждение результатов лечения.",
    price: "4 000 ₽",
  },
  {
    icon: FileText,
    title: "Расшифровка анализов и УЗИ",
    description:
      "Профессиональная интерпретация результатов анализов и обследований с рекомендациями.",
    price: "2 000 ₽",
  },
  {
    icon: Baby,
    title: "Ведение беременности онлайн",
    description:
      "Онлайн-сопровождение беременности: контроль анализов, скринингов и самочувствия на каждом сроке.",
    price: "7 000 ₽ / мес",
  },
  {
    icon: Pill,
    title: "Подбор контрацепции",
    description:
      "Индивидуальный подбор метода контрацепции с учётом здоровья, возраста и ваших планов.",
    price: "5 000 ₽",
  },
  {
    icon: ClipboardCheck,
    title: "Второе мнение",
    description:
      "Независимая оценка поставленного диагноза и назначенного лечения перед важным решением.",
    price: "5 000 ₽",
  },
];

const inPersonServices = [
  {
    icon: Stethoscope,
    title: "Первичный приём (осмотр)",
    description:
      "Комплексный гинекологический осмотр, сбор анамнеза, постановка диагноза и план лечения.",
    price: "11 500 ₽",
  },
  {
    icon: HeartPulse,
    title: "Повторный приём",
    description:
      "Контроль лечения, оценка результатов обследований, коррекция назначений.",
    price: "10 000 ₽",
  },
  {
    icon: Microscope,
    title: "Кольпоскопия",
    description:
      "Детальное исследование шейки матки под увеличением для ранней диагностики патологий.",
    price: "7 200 ₽",
  },
  {
    icon: Syringe,
    title: "Установка / удаление ВМС",
    description:
      "Введение или удаление внутриматочной спирали в стерильных условиях.",
    price: "11 900 ₽",
  },
  {
    icon: Syringe,
    title: "Введение подкожного импланта",
    description:
      "Установка подкожного контрацептивного импланта — надёжная долгосрочная контрацепция.",
    price: "11 900 ₽",
  },
];

type Service = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  price: string;
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <li className="list-none">
      <div className="relative h-full rounded-2xl border border-border/60 p-2">
        <GlowingEffect
          spread={40}
          glow
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-4 rounded-xl border border-border/40 bg-card p-6 shadow-sm">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-muted">
              <service.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-border/40 pt-4">
            <span className="text-base font-bold text-primary">
              {service.price}
            </span>
            <Link
              href="/appointment"
              className="text-xs font-medium text-muted-foreground transition-colors duration-200 hover:text-primary cursor-pointer"
            >
              Записаться
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-[family-name:var(--font-figtree)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Мои услуги
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Основной формат — онлайн-консультации из любой точки мира. Также
              веду очный приём в Москве.
            </p>
          </div>

          {/* Онлайн */}
          <div className="mt-14 rounded-3xl border border-primary/20 bg-primary/[0.03] p-5 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  <Monitor className="h-3.5 w-3.5" />
                  Основной формат
                </div>
                <h2 className="mt-3 font-[family-name:var(--font-figtree)] text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Онлайн-консультации
                </h2>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Video className="h-4 w-4 text-primary" /> Видео
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <TelegramIcon className="h-4 w-4 text-primary" /> Telegram
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Phone className="h-4 w-4 text-primary" /> Телефон
                </span>
              </div>
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {onlineServices.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </ul>
          </div>

          {/* Очно */}
          <div className="mt-12">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  Очный приём
                </div>
                <h2 className="mt-3 font-[family-name:var(--font-figtree)] text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Приём в Москве
                </h2>
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Клиника Фомина</span> · Ленинский проспект, 107, корп. 1 · м. Новаторская
              </p>
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {inPersonServices.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </ul>
          </div>

          <div className="mt-14 text-center">
            <p className="text-sm text-muted-foreground">
              Точный объём помощи определяется на консультации. Цены указаны
              справочно.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="font-[family-name:var(--font-figtree)] text-2xl font-bold text-foreground sm:text-3xl">
            Не нашли нужную услугу?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Свяжитесь со мной для уточнения — я помогу подобрать оптимальный
            план обследования и лечения.
          </p>
          <Link
            href="/appointment"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:bg-primary/90 hover:shadow-xl cursor-pointer"
          >
            <CalendarCheck className="h-5 w-5" />
            Записаться на приём
          </Link>
        </div>
      </section>
    </>
  );
}
