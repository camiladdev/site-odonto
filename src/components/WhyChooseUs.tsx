import { Cpu, HeartHandshake, Gem, LucideIcon } from 'lucide-react';

interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: Cpu,
    title: 'Tecnologia de Ponta',
    description:
      'Scanner intraoral, tomografia 3D e planejamento digital em todas as etapas do tratamento.',
  },
  {
    icon: HeartHandshake,
    title: 'Atendimento Humanizado',
    description:
      'Cada plano de tratamento é único, pensado para a sua rotina, expectativas e conforto.',
  },
  {
    icon: Gem,
    title: 'Ambiente Premium',
    description:
      'Um espaço pensado nos mínimos detalhes para que sua visita seja tranquila do início ao fim.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-navy-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mint-400">
            Por que nos escolher
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
            Excelência clínica com alma de estúdio de design
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div key={title} className="sm:pt-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-mint-500/30 bg-mint-500/10 text-mint-400">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
