"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CalendarCheck,
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

const serviceOptions = [
  "Первичная консультация",
  "Повторный приём",
  "Ведение беременности",
  "УЗИ органов малого таза",
  "Лабораторная диагностика",
  "Подбор контрацепции",
  "Другое",
];

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
];

export default function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

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
            Спасибо за вашу заявку. Мы свяжемся с вами в ближайшее время для
            подтверждения записи.
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
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <CalendarCheck className="h-4 w-4" />
            Онлайн-запись
          </div>
          <h1 className="font-[family-name:var(--font-figtree)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Запись на приём
          </h1>
          <p className="mt-3 text-muted-foreground">
            Заполните форму и мы свяжемся с вами для подтверждения
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="mt-10 space-y-6"
        >
          {/* Name */}
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
              placeholder="Фамилия Имя Отчество"
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
            />
          </div>

          {/* Phone */}
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
              placeholder="+7 (___) ___-__-__"
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <Mail className="h-4 w-4 text-muted-foreground" />
              Email
              <span className="text-xs text-muted-foreground">(необязательно)</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@example.com"
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
            />
          </div>

          {/* Service */}
          <div>
            <label
              htmlFor="service"
              className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
              Услуга
            </label>
            <select
              id="service"
              name="service"
              required
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground transition-colors duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none cursor-pointer"
            >
              <option value="">Выберите услугу</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div>
            <label
              htmlFor="date"
              className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <CalendarCheck className="h-4 w-4 text-muted-foreground" />
              Желаемая дата
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground transition-colors duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none cursor-pointer"
            />
          </div>

          {/* Time Slots */}
          <div>
            <label className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
              <Clock className="h-4 w-4 text-muted-foreground" />
              Желаемое время
            </label>
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-6">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`rounded-lg border px-3 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${
                    selectedTime === time
                      ? "border-primary bg-primary text-primary-foreground shadow-sm"
                      : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-primary/5"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Comment */}
          <div>
            <label
              htmlFor="comment"
              className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
              Комментарий
              <span className="text-xs text-muted-foreground">(необязательно)</span>
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={3}
              placeholder="Опишите причину обращения или задайте вопрос..."
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none resize-none"
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
            <label htmlFor="consent" className="text-xs text-muted-foreground cursor-pointer">
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

          <button
            type="submit"
            className="w-full rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:bg-primary/90 hover:shadow-xl cursor-pointer"
          >
            Отправить заявку
          </button>

          <p className="text-center text-xs text-muted-foreground">
            Мы перезвоним в течение 30 минут в рабочее время
          </p>
        </form>
      </div>
    </section>
  );
}
