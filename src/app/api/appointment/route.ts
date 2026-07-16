import { NextRequest, NextResponse } from "next/server";

// Релей на Cloudflare пересылает заявку в Telegram
// (хостинг сайта не может обращаться к api.telegram.org напрямую).
const RELAY_URL = process.env.RELAY_URL;
const RELAY_SECRET = process.env.RELAY_SECRET;

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: NextRequest) {
  if (!RELAY_URL || !RELAY_SECRET) {
    console.error("Relay env vars are not configured");
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
    const relayRes = await fetch(RELAY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-relay-secret": RELAY_SECRET,
      },
      body: JSON.stringify({ text }),
    });

    if (!relayRes.ok) {
      const errText = await relayRes.text();
      console.error("Relay error:", relayRes.status, errText);
      return NextResponse.json(
        { error: "Не удалось отправить заявку. Позвоните нам, пожалуйста." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Relay request failed:", err);
    return NextResponse.json(
      { error: "Не удалось отправить заявку. Позвоните нам, пожалуйста." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
