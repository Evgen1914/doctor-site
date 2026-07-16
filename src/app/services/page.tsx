import Link from "next/link";
import type { Metadata } from "next";
import {
  Stethoscope,
  Baby,
  ScanLine,
  ShieldCheck,
  Microscope,
  Pill,
  HeartPulse,
  Syringe,
  CalendarCheck,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export const metadata: Metadata = {
  title: "Услуги — Врач-гинеколог",
  description:
    "Полный спектр гинекологических услуг: консультации, УЗИ, ведение беременности, лечение заболеваний.",
};

const services = [
  {
    icon: Stethoscope,
    title: "Первичная консультация",
    description:
      "Комплексный осмотр, сбор анамнеза, постановка диагноза и план лечения. Ответы на все ваши вопросы в спокойной обстановке.",
    price: "от 2 500 р.",
  },
  {
    icon: HeartPulse,
    title: "Повторный приём",
    description:
      "Контроль динамики лечения, коррекция назначений, оценка результатов анализов и обследований.",
    price: "от 2 000 р.",
  },
  {
    icon: Baby,
    title: "Ведение беременности",
    description:
      "Полное сопровождение от планирования до родов: осмотры, анализы, скрининги, рекомендации.",
    price: "от 30 000 р.",
  },
  {
    icon: ScanLine,
    title: "УЗИ органов малого таза",
    description:
      "Ультразвуковая диагностика на современном оборудовании. Трансабдоминальное и трансвагинальное исследование.",
    price: "от 2 000 р.",
  },
  {
    icon: Microscope,
    title: "Лабораторная диагностика",
    description:
      "Забор мазков, анализы на инфекции, гормональные исследования, онкоцитология.",
    price: "от 500 р.",
  },
  {
    icon: ShieldCheck,
    title: "Лечение воспалительных заболеваний",
    description:
      "Диагностика и лечение кольпитов, цервицитов, аднекситов и других воспалительных процессов.",
    price: "от 3 000 р.",
  },
  {
    icon: Pill,
    title: "Подбор контрацепции",
    description:
      "Индивидуальный подбор метода контрацепции с учётом вашего здоровья, возраста и планов.",
    price: "от 2 000 р.",
  },
  {
    icon: Syringe,
    title: "Малые гинекологические процедуры",
    description:
      "Кольпоскопия, биопсия, установка/удаление ВМС, радиоволновое лечение эрозии.",
    price: "от 1 500 р.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-[family-name:var(--font-figtree)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Наши услуги
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Полный спектр гинекологической помощи с использованием современных
              методик и оборудования
            </p>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                      <span className="text-sm font-semibold text-primary">
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
            ))}
          </ul>

          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">
              Точная стоимость определяется на консультации. Цены указаны
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
            Свяжитесь с нами для уточнения — мы поможем подобрать оптимальный
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
