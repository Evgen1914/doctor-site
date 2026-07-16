# Cloudflare Worker — релей заявок в Telegram

Хостинг сайта (РФ) не может обращаться к `api.telegram.org` напрямую.
Этот воркер работает на Cloudflare (Telegram ему доступен) и пересылает
заявки с формы в Telegram.

## Развёртывание (через дашборд Cloudflare)

1. Зайдите на https://dash.cloudflare.com → раздел **Workers & Pages**
2. **Create application** → **Create Worker** → задайте имя (например `ripsime-relay`) → **Deploy**
3. Нажмите **Edit code**, вставьте содержимое `worker.js`, снова **Deploy**
4. Откройте **Settings → Variables and Secrets** и добавьте три переменные
   (тип **Secret**):
   - `TELEGRAM_BOT_TOKEN` — токен бота от @BotFather
   - `TELEGRAM_CHAT_ID` — ваш chat_id
   - `RELAY_SECRET` — общий секрет (тот же, что на сайте)
5. Скопируйте URL воркера вида `https://ripsime-relay.<логин>.workers.dev`

## Подключение сайта

В Dokploy → `doctor-site` → **Environment** добавьте:

```
RELAY_URL=https://ripsime-relay.<логин>.workers.dev
RELAY_SECRET=<тот же секрет, что в воркере>
```

Затем **Redeploy**.
