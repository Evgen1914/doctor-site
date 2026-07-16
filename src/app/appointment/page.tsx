"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CalendarCheck,
  User,
  Phone,
  Stethoscope,
  Clock,
  CheckCircle,
  ArrowLeft,
  Loader2,
} from "lucide-react";
import { TelegramIcon, social } from "@/components/social-icons";

const serviceGroups = [
  {
    label: "Онлайн-консультации",
    options: [
      "Первичная онлайн-консультация",
      "Повторная онлайн-консультация",
      "Расшифровка анализов и УЗИ",
      "Ведение беременности онлайн",
      "Подбор контрацепции",
      "Второе мнение",
    ],
  },
  {
    label: "Очный приём (Москва)",
    options: [
      "Первичный приём (осмотр)",
      "Повторный приём",
      "Кольпоскопия",
      "Установка / удаление ВМС",
      "Введение подкожного импланта",
    ],
  },
  {
    label: "Другое",
    options: ["Другое / уточню при звонке"],
  },
];

export default function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      time: String(formData.get("time") ?? ""),
    };

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Не удалось отправить заявку");
      }
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Не удалось отправить заявку. Попробуйте позвонить нам."
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-lg px-4 text-center sm:px-6">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="font-[family-name:var(--font-figtree)] text-2xl font-bold text-foreground sm:text-3xl">
            Заявка отправлена!
          </h1>
          <p className="mt-4 text-muted-foreground">
            Спасибо! Я получила вашу заявку и свяжусь с вами в ближайшее время
            для подтверждения записи.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-200 hover:text-primary/80 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            Вернуться на главную
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <CalendarCheck className="h-4 w-4" />
            Запись на приём
          </div>
          <h1 className="font-[family-name:var(--font-figtree)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Запишитесь удобным способом
          </h1>
          <p className="mt-3 text-muted-foreground">
            Быстрее всего — написать в Telegram. Или оставьте короткую заявку, и
            я перезвоню.
          </p>
        </div>

        {/* Primary: Telegram + Phone */}
        <div className="mt-10 flex flex-col gap-3">
          <a
            href={social.telegramWrite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:bg-primary/90 hover:shadow-xl cursor-pointer"
          >
            <TelegramIcon className="h-5 w-5" />
            Написать в Telegram
          </a>
          <a
            href={`tel:${social.phone}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-8 py-4 text-base font-medium text-foreground transition-all duration-200 hover:bg-muted cursor-pointer"
          >
            <Phone className="h-5 w-5 text-primary" />
            Позвонить {social.phoneDisplay}
          </a>
        </div>

        {/* Divider */}
        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            или оставьте заявку
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Short form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <User className="h-4 w-4 text-muted-foreground" />
              Ваше имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              maxLength={100}
              placeholder="Как к вам обращаться"
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <Phone className="h-4 w-4 text-muted-foreground" />
              Телефон
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              maxLength={30}
              placeholder="+7 (___) ___-__-__"
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="service"
              className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <Stethoscope className="h-4 w-4 text-muted-foreground" />
              Услуга
              <span className="text-xs text-muted-foreground">(необязательно)</span>
            </label>
            <select
              id="service"
              name="service"
              defaultValue=""
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground transition-colors duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none cursor-pointer"
            >
              <option value="">Выберите услугу</option>
              {serviceGroups.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {group.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="time"
              className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <Clock className="h-4 w-4 text-muted-foreground" />
              Удобное время
              <span className="text-xs text-muted-foreground">(необязательно)</span>
            </label>
            <input
              type="text"
              id="time"
              name="time"
              maxLength={100}
              placeholder="Например: будни после 17:00"
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
            />
          </div>

          {/* Privacy consent */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              required
              className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary/20 cursor-pointer"
            />
            <label
              htmlFor="consent"
              className="text-xs text-muted-foreground cursor-pointer"
            >
              Нажимая кнопку, я даю согласие на обработку{" "}
              <Link
                href="/privacy"
                className="text-primary underline hover:text-primary/80"
              >
                персональных данных
              </Link>{" "}
              и принимаю условия{" "}
              <Link
                href="/offer"
                className="text-primary underline hover:text-primary/80"
              >
                договора оферты
              </Link>
              .
            </label>
          </div>

          {error && (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:bg-primary/90 hover:shadow-xl cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading && <Loader2 className="h-5 w-5 animate-spin" />}
            {loading ? "Отправляем..." : "Отправить заявку"}
          </button>

          <p className="text-center text-xs text-muted-foreground">
            Я перезвоню в рабочее время для подтверждения записи
          </p>
        </form>
      </div>
    </section>
  );
}
