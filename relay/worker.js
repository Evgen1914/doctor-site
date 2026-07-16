/**
 * Cloudflare Worker — релей заявок с сайта в Telegram.
 *
 * Зачем: хостинг сайта (РФ) не может напрямую достучаться до api.telegram.org.
 * Cloudflare может. Сайт шлёт заявку сюда, воркер пересылает её в Telegram.
 *
 * Переменные окружения воркера (Settings → Variables):
 *   TELEGRAM_BOT_TOKEN  — токен бота от @BotFather
 *   TELEGRAM_CHAT_ID    — ваш chat_id
 *   RELAY_SECRET        — общий секрет (должен совпадать с сайтом)
 */
export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    const auth = request.headers.get("x-relay-secret");
    if (!env.RELAY_SECRET || auth !== env.RELAY_SECRET) {
      return new Response("Unauthorized", { status: 401 });
    }

    let data;
    try {
      data = await request.json();
    } catch {
      return new Response(JSON.stringify({ ok: false, error: "bad json" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const text = typeof data.text === "string" ? data.text : "";
    if (!text) {
      return new Response(JSON.stringify({ ok: false, error: "no text" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const tg = await fetch(
      `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: env.TELEGRAM_CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
      }
    );

    if (!tg.ok) {
      const detail = await tg.text();
      return new Response(JSON.stringify({ ok: false, detail }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
