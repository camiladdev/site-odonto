import { MessageCircle } from 'lucide-react';

const WHATSAPP_LINK =
  'https://wa.me/5511912345678?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-offwhite/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#" className="flex items-baseline gap-1.5">
          <span className="font-serif text-2xl font-semibold tracking-tight text-navy-950">
            Lumina
          </span>
          <span className="hidden font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-navy-400 sm:inline">
            Odontologia Avançada
          </span>
        </a>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-mint-500 px-4 py-2.5 text-sm font-semibold text-navy-950 shadow-sm shadow-mint-500/30 transition hover:-translate-y-0.5 hover:bg-mint-600 hover:shadow-md sm:px-5 sm:py-3"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
          <span className="hidden sm:inline">Falar no WhatsApp</span>
          <span className="sm:hidden">Agendar</span>
        </a>
      </div>
    </header>
  );
}
