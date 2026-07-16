import type { SVGProps } from "react";

export function TelegramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M21.94 4.36 18.9 19.1c-.23 1.02-.84 1.27-1.7.79l-4.7-3.47-2.27 2.18c-.25.25-.46.46-.95.46l.34-4.8 8.73-7.89c.38-.34-.08-.53-.59-.19L6.72 13.14l-4.65-1.45c-1.01-.32-1.03-1.01.21-1.5l18.2-7.02c.84-.31 1.58.2 1.31 1.19z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export const social = {
  // Прямой чат в Telegram по номеру телефона (можно писать сразу)
  telegramWrite: "https://t.me/+79637262202",
  // Telegram-канал (подписка)
  telegramChannel: "https://t.me/dr_ripsime",
  instagram: "https://www.instagram.com/n_ripsi?utm_source=qr",
  phone: "+79637262202",
  phoneDisplay: "+7 (963) 726-22-02",
};
