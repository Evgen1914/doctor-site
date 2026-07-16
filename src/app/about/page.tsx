import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  GraduationCap,
  Award,
  CalendarCheck,
  ShieldCheck,
  BookOpen,
  Baby,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "О враче — Налбандян Рипсиме Асатуровна",
  description:
    "Налбандян Рипсиме Асатуровна — врач акушер-гинеколог с более чем 10-летним опытом работы. Образование, квалификация, профессиональный путь.",
};

const education = [
  {
    year: "2010—2016",
    title: "МГМСУ имени А.И. Евдокимова",
    description:
      "Специальность «Лечебное дело». Именной стипендиат г. Москвы.",
  },
  {
    year: "2016—2018",
    title: "Клиническая ординатура — Родильный дом №68",
    description: "Специальность «Акушерство и гинекология».",
  },
];

const additionalEducation = [
  {
    year: "2018",
    title: "Ультразвуковая диагностика",
    description: "Современная научно-технологическая академия.",
  },
  {
    year: "2019",
    title: "Основные аспекты гинекологической эндокринологии",
    description: "",
  },
  {
    year: "2019",
    title: "Кольпоскопия",
    description: "",
  },
  {
    year: "2021",
    title: "Ультразвуковая диагностика в акушерстве и гинекологии",
    description:
      "ФНКЦ ФМБА, кафедра ультразвуковой и пренатальной диагностики.",
  },
  {
    year: "2023",
    title: "Акушерство и гинекология",
    description:
      "ФНКЦ ФМБА, кафедра ультразвуковой и пренатальной диагностики.",
  },
  {
    year: "2024",
    title: "Неврология и беременность",
    description: "Курс повышения квалификации.",
  },
];

const expertise = [
  "Планирование и ведение беременности",
  "Эндокринная гинекология",
  "Современные методы контрацепции",
  "Доказательная медицина без лишних назначений",
  "Лечение патологий шейки матки",
];

function TimelineItem({
  item,
  last,
}: {
  item: { year: string; title: string; description: string };
  last?: boolean;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <BookOpen className="h-4 w-4 text-primary" />
        </div>
        {!last && <div className="mt-2 h-full w-px bg-border" />}
      </div>
      <div className="pb-6">
        <span className="text-xs font-medium text-primary">{item.year}</span>
        <h3 className="mt-1 text-sm font-semibold text-foreground">
          {item.title}
        </h3>
        {item.description && (
          <p className="mt-1 text-sm text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
}

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
                  alt="Налбандян Рипсиме Асатуровна — врач-гинеколог"
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
                Ведущий специалист
              </div>
              <h1 className="font-[family-name:var(--font-figtree)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Налбандян Рипсиме Асатуровна
              </h1>
              <p className="mt-1 text-lg font-medium text-primary">
                Врач акушер-гинеколог
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Вы когда-нибудь чувствовали неловкость перед врачом? Со мной об
                этом можно забыть! В моём кабинете комфортно и спокойно — здесь
                заботятся не только о здоровье, но и о вашем душевном состоянии.
                Индивидуальный подход, уважение, отсутствие боли и стресса — мой
                принцип работы.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Я постоянно учусь и совершенствуюсь, чтобы предлагать своим
                пациентам современные, безопасные и эффективные методы лечения.
                Медицина не стоит на месте — и я тоже.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Но самое главное — это доверие между врачом и пациентом. Я всегда
                объясняю всё простыми словами, без сложных терминов, чтобы вы
                чувствовали себя уверенно и понимали своё здоровье.
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
                Как я могу помочь вам?
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
                Образование
              </h2>
              <div className="mt-6">
                {education.map((item, i) => (
                  <TimelineItem
                    key={item.title}
                    item={item}
                    last={i === education.length - 1}
                  />
                ))}
              </div>

              <h3 className="mt-8 font-[family-name:var(--font-figtree)] text-lg font-bold text-foreground">
                Дополнительное образование
              </h3>
              <div className="mt-6">
                {additionalEducation.map((item, i) => (
                  <TimelineItem
                    key={`${item.year}-${item.title}`}
                    item={item}
                    last={i === additionalEducation.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Babies statement */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Baby className="mx-auto h-8 w-8 text-primary/60" />
          <p className="mt-4 font-[family-name:var(--font-figtree)] text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
            Я помогла появиться на свет сотням малышей и знаю, как важно, чтобы
            беременность прошла комфортно, а рождение ребёнка стало радостным
            событием.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="font-[family-name:var(--font-figtree)] text-2xl font-bold text-foreground sm:text-3xl">
            Запишитесь на консультацию
          </h2>
          <p className="mt-3 text-muted-foreground">
            Если вы ищете врача, который поддержит вас на этом важном этапе
            жизни, поможет разобраться с любыми вопросами и будет вам поддержкой —
            записывайтесь на консультацию!
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
