// components/WhatsAppButton.tsx
"use client";

import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  phone: string; // in international format, e.g. "5511999998888"
  message?: string; // optional prefilled message
}

export default function WhatsAppButton({ phone, message = "" }: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const href = `https://wa.me/${phone}${message ? `?text=${encodedMessage}` : ""}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed 
        bottom-5 
        right-5 
        z-50 
        bg-green-500 
        hover:bg-green-600 
        text-white 
        py-4 
        rounded-full 
        shadow-lg 
        transition 
        duration-200 
        ease-in-out
        p-4
      "
      aria-label="Chat on WhatsApp">
      <FaWhatsapp size={24} />
    </a>
  );
}
