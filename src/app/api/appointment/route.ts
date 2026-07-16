import { NextRequest, NextResponse } from "next/server";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: NextRequest) {
  if (!BOT_TOKEN || !CHAT_ID) {
    console.error("Telegram env vars are not configured");
    return NextResponse.json(
      { error: "Сервис записи временно недоступен. Позвоните нам, пожалуйста." },
      { status: 503 }
    );
  }

  let data: { name?: string; phone?: string; time?: string; service?: string };
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Некорректный запрос" }, { status: 400 });
  }

  const name = (data.name ?? "").trim();
  const phone = (data.phone ?? "").trim();
  const time = (data.time ?? "").trim();
  const service = (data.service ?? "").trim();

  if (!name || !phone) {
    return NextResponse.json(
      { error: "Укажите имя и телефон" },
      { status: 400 }
    );
  }

  if (name.length > 100 || phone.length > 30 || time.length > 100 || service.length > 100) {
    return NextResponse.json({ error: "Слишком длинные данные" }, { status: 400 });
  }

  const lines = [
    "🔔 <b>Новая заявка с сайта</b>",
    "",
    `👤 <b>Имя:</b> ${escapeHtml(name)}`,
    `📞 <b>Телефон:</b> ${escapeHtml(phone)}`,
  ];
  if (service) lines.push(`💉 <b>Услуга:</b> ${escapeHtml(service)}`);
  if (time) lines.push(`🕒 <b>Удобное время:</b> ${escapeHtml(time)}`);

  const text = lines.join("\n");

  try {
    const tgRes = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
      }
    );

    if (!tgRes.ok) {
      const errText = await tgRes.text();
      console.error("Telegram API error:", errText);
      return NextResponse.json(
        {
          error: "Не удалось отправить заявку. Позвоните нам, пожалуйста.",
          detail: errText,
          tokenLen: (BOT_TOKEN ?? "").length,
          chatId: CHAT_ID,
        },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Telegram request failed:", err);
    return NextResponse.json(
      { error: "Не удалось отправить заявку. Позвоните нам, пожалуйста." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
