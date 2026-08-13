import { Cpu, HeartHandshake, Gem, LucideIcon } from 'lucide-react';

interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: Cpu,
    title: 'Diagnóstico Avançado',
    description:
      'A melhor tecnologia a favor da sua saúde, garantindo tratamentos mais rápidos, precisos e totalmente sem surpresas.',
  },
  {
    icon: HeartHandshake,
    title: 'Atmosfera Acolhedora',
    description:
      'Deixamos de lado o clima frio de hospital. Nosso espaço foi criado com um design focado em fazer você relaxar e se sentir em casa.',
  },
  {
    icon: Gem,
    title: 'Odontologia sem Medo',
    description:
      'Uma equipe dedicada a ouvir você de verdade, tornando sua jornada odontológica leve, livre de ansiedade e cheia de confiança.',
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
            Cuidar do seu sorriso nunca foi tão confortável e seguro
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
