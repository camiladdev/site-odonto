import { MessageCircle } from 'lucide-react';

const WHATSAPP_LINK =
  'https://wa.me/55999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.';

// Botão fixo, sempre visível, para maximizar a conversão em WhatsApp
// enquanto o usuário navega pela página.
export default function WhatsAppFloatButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-mint-500 text-navy-950 shadow-lg shadow-mint-500/40 transition hover:scale-105 hover:bg-mint-600 sm:h-16 sm:w-16"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-500 opacity-40" />
      <MessageCircle
        className="relative h-6 w-6 sm:h-7 sm:w-7"
        strokeWidth={2.5}
      />
    </a>
  );
}
