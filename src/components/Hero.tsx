import { MessageCircle, Star, Image as ImageIcon, ShieldCheck } from 'lucide-react';

const WHATSAPP_LINK =
  'https://wa.me/5511912345678?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-offwhite">
      {/* blobs decorativos */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-mint-100 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-navy-50 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        {/* Coluna de texto */}
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-mint-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy-700">
            <ShieldCheck className="h-3.5 w-3.5" />
            Odontologia Estética Avançada
          </span>

          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] text-navy-950 sm:text-5xl lg:text-[3.4rem]">
            Cada sorriso conta uma história.{' '}
            <span className="italic text-mint-600">Vamos escrever a sua.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-navy-500 sm:text-lg">
            Unimos tecnologia de ponta, design odontológico e um cuidado
            verdadeiramente humano para transformar não só o seu sorriso, mas
            a forma como você se sente diante do espelho.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-mint-500 px-7 py-4 text-base font-semibold text-navy-950 shadow-lg shadow-mint-500/30 transition hover:-translate-y-0.5 hover:bg-mint-600 hover:shadow-xl"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
              Falar com a clínica agora
            </a>
            <span className="text-sm text-navy-400">
              Resposta em minutos, via WhatsApp
            </span>
          </div>

          {/* Faixa de confiança */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-navy-100 pt-8">
            <div>
              <p className="font-serif text-2xl font-semibold text-navy-900">
                15+
              </p>
              <p className="text-xs text-navy-400">anos de experiência</p>
            </div>
            <div className="h-8 w-px bg-navy-100" />
            <div>
              <p className="font-serif text-2xl font-semibold text-navy-900">
                5.000+
              </p>
              <p className="text-xs text-navy-400">sorrisos transformados</p>
            </div>
            <div className="h-8 w-px bg-navy-100" />
            <div>
              <div className="flex items-center gap-1 text-mint-600">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-mint-500 text-mint-500"
                  />
                ))}
              </div>
              <p className="text-xs text-navy-400">avaliação dos pacientes</p>
            </div>
          </div>
        </div>

        {/* Coluna de imagem (placeholder) */}
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-navy-900 to-navy-700" />
            <div className="absolute inset-3 flex flex-col items-center justify-center gap-3 rounded-[2rem] border-2 border-dashed border-white/20 text-white/70">
              <ImageIcon className="h-10 w-10" strokeWidth={1.5} />
              <p className="px-8 text-center text-sm">
                [Foto de paciente sorrindo — substitua por imagem real]
              </p>
            </div>

            {/* Selo flutuante */}
            <div className="absolute -left-6 bottom-8 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mint-100">
                <ShieldCheck className="h-5 w-5 text-mint-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-900">
                  Biossegurança
                </p>
                <p className="text-xs text-navy-400">Protocolo hospitalar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
