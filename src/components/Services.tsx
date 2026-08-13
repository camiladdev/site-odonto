import { Sparkles, Anchor, Zap, Smile, ArrowRight, LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Sparkles,
    title: 'Lentes de Contato em Porcelana',
    description:
      'Camadas ultrafinas que corrigem forma, cor e alinhamento sem desgastar o dente natural.',
  },
  {
    icon: Anchor,
    title: 'Implantes Dentários',
    description:
      'Reabilitação completa com planejamento digital 3D e previsibilidade cirúrgica.',
  },
  {
    icon: Zap,
    title: 'Clareamento a Laser',
    description:
      'Resultados visíveis em uma única sessão, com sensibilidade minimizada.',
  },
  {
    icon: Smile,
    title: 'Ortodontia Invisível',
    description:
      'Alinhadores transparentes e removíveis para uma correção discreta e confortável.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mint-600">
            Nossos Serviços
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-navy-950 sm:text-4xl">
            Cuidado completo, do diagnóstico ao sorriso perfeito
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex flex-col rounded-3xl border border-navy-100 bg-offwhite p-8 transition hover:-translate-y-1 hover:border-mint-300 hover:shadow-xl hover:shadow-navy-900/5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-mint-400 transition group-hover:bg-mint-500 group-hover:text-navy-950">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 font-serif text-lg font-semibold text-navy-900">
                {title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-500">
                {description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition group-hover:gap-2.5 group-hover:text-mint-600">
                Saiba mais
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
