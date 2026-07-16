import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  GraduationCap,
  Award,
  CalendarCheck,
  ShieldCheck,
  BookOpen,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "О враче — Врач-гинеколог",
  description:
    "Квалифицированный врач-гинеколог с более чем 10-летним опытом работы. Образование, квалификация, профессиональный путь.",
};

const education = [
  {
    year: "20XX",
    title: "Медицинский университет",
    description: "Лечебное дело, диплом с отличием",
  },
  {
    year: "20XX",
    title: "Ординатура",
    description: "Акушерство и гинекология",
  },
  {
    year: "20XX",
    title: "Повышение квалификации",
    description: "Ультразвуковая диагностика в акушерстве и гинекологии",
  },
  {
    year: "20XX",
    title: "Сертификация",
    description: "Высшая квалификационная категория по акушерству и гинекологии",
  },
];

const expertise = [
  "Ведение беременности высокого риска",
  "Лечение бесплодия",
  "Малоинвазивная гинекологическая хирургия",
  "Эндокринная гинекология",
  "Диагностика и лечение патологии шейки матки",
  "Планирование семьи и контрацепция",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/doctor-main.jpg"
                  alt="Врач-гинеколог"
                  width={800}
                  height={1200}
                  className="h-full w-full object-cover object-top"
                  priority
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                <Award className="h-4 w-4" />
                Врач высшей категории
              </div>
              <h1 className="font-[family-name:var(--font-figtree)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Имя Отчество Фамилия
              </h1>
              <p className="mt-1 text-lg font-medium text-primary">
                Врач акушер-гинеколог
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Более 10 лет практики в области акушерства и гинекологии. За это
                время помогла тысячам женщин сохранить и укрепить своё здоровье.
                Применяю современные методы диагностики и лечения, постоянно
                повышаю свою квалификацию.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Мой принцип — внимательное отношение к каждой пациентке,
                доступное объяснение диагноза и плана лечения, создание
                доверительной атмосферы на приёме.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { value: "10+", label: "Лет опыта" },
                  { value: "5000+", label: "Пациентов" },
                  { value: "1000+", label: "Родов" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border/60 bg-muted/50 px-4 py-3 text-center"
                  >
                    <div className="font-[family-name:var(--font-figtree)] text-xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="border-t border-border/60 bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                <Heart className="h-4 w-4" />
                Специализация
              </div>
              <h2 className="font-[family-name:var(--font-figtree)] text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Области экспертизы
              </h2>
              <ul className="mt-6 space-y-3">
                {expertise.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                <GraduationCap className="h-4 w-4" />
                Образование
              </div>
              <h2 className="font-[family-name:var(--font-figtree)] text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Образование и квалификация
              </h2>
              <div className="mt-6 space-y-6">
                {education.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <div className="mt-2 h-full w-px bg-border" />
                    </div>
                    <div className="pb-6">
                      <span className="text-xs font-medium text-primary">
                        {item.year}
                      </span>
                      <h3 className="mt-1 text-sm font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="font-[family-name:var(--font-figtree)] text-2xl font-bold text-foreground sm:text-3xl">
            Запишитесь на консультацию
          </h2>
          <p className="mt-3 text-muted-foreground">
            Задайте вопросы и получите профессиональную помощь в комфортной
            обстановке.
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
