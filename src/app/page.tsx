import Link from "next/link";
import Image from "next/image";
import {
  Stethoscope,
  Baby,
  ScanLine,
  ShieldCheck,
  CalendarCheck,
  Award,
  Clock,
  Heart,
  ArrowRight,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { HeroBackground } from "@/components/hero-background";

const services = [
  {
    icon: Stethoscope,
    title: "Консультация гинеколога",
    description: "Комплексный осмотр, диагностика и рекомендации по лечению.",
  },
  {
    icon: Baby,
    title: "Ведение беременности",
    description: "Полное сопровождение от планирования до родов.",
  },
  {
    icon: ScanLine,
    title: "УЗИ-диагностика",
    description: "Современное ультразвуковое оборудование для точной диагностики.",
  },
  {
    icon: ShieldCheck,
    title: "Лечение заболеваний",
    description: "Индивидуальный подход к лечению гинекологических заболеваний.",
  },
];

const stats = [
  { value: "10+", label: "Лет опыта" },
  { value: "5000+", label: "Пациентов" },
  { value: "100%", label: "Довольных пациентов" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <HeroBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/30" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Heart className="h-4 w-4" />
              Забота о женском здоровье
            </div>
            <h1 className="font-[family-name:var(--font-figtree)] text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Ваш гинеколог —{" "}
              <span className="text-primary">рядом с вами</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Профессиональная помощь в комфортной обстановке. Современное
              оборудование, индивидуальный подход и внимание к каждой пациентке.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 cursor-pointer"
              >
                <CalendarCheck className="h-5 w-5" />
                Записаться на приём
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-8 py-3.5 text-base font-medium text-foreground transition-all duration-200 hover:bg-muted cursor-pointer"
              >
                Наши услуги
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-[family-name:var(--font-figtree)] text-3xl font-bold text-primary sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-[family-name:var(--font-figtree)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Наши услуги
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Полный спектр гинекологических услуг для заботы о вашем здоровье
            </p>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <li key={service.title} className="list-none">
                <div className="relative h-full rounded-2xl border border-border/60 p-2">
                  <GlowingEffect
                    spread={40}
                    glow
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                  <div className="relative flex h-full flex-col gap-4 rounded-xl border border-border/40 bg-card p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-muted">
                      <service.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-200 hover:text-primary/80 cursor-pointer"
            >
              Все услуги
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="border-t border-border/60 bg-card py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                <Award className="h-4 w-4" />
                Опыт и квалификация
              </div>
              <h2 className="font-[family-name:var(--font-figtree)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Врач, которому доверяют
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Более 10 лет практики в области акушерства и гинекологии.
                Постоянное повышение квалификации и применение современных
                методов диагностики и лечения.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Высшая квалификационная категория",
                  "Постоянное повышение квалификации",
                  "Индивидуальный подход к каждой пациентке",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-200 hover:text-primary/80 cursor-pointer"
              >
                Подробнее о враче
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/images/doctor-main.jpg"
                  alt="Налбандян Рипсиме Асатуровна — врач-гинеколог"
                  width={800}
                  height={1200}
                  className="h-full w-full object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-primary/80 px-6 py-16 text-center shadow-xl sm:px-12 sm:py-20">
            <h2 className="font-[family-name:var(--font-figtree)] text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Позаботьтесь о своём здоровье сегодня
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
              Запишитесь на приём онлайн — это быстро и удобно. Выберите
              подходящую дату и время.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-primary shadow-lg transition-all duration-200 hover:bg-white/90 hover:shadow-xl cursor-pointer"
              >
                <CalendarCheck className="h-5 w-5" />
                Записаться онлайн
              </Link>
              <a
                href="tel:+70000000000"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-8 py-3.5 text-base font-medium text-primary-foreground transition-all duration-200 hover:bg-white/10 cursor-pointer"
              >
                <Clock className="h-5 w-5" />
                Позвонить
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
