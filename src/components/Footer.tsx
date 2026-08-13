import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-offwhite">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-serif text-2xl font-semibold text-navy-950">
              Lumina
            </span>
            <span className="ml-1 text-[11px] font-medium uppercase tracking-[0.2em] text-navy-400">
              Odontologia
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-500">
              Referência em odontologia estética avançada. Transformando sorrisos com precisão, conforto e tecnologia de ponta.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-navy-900">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-navy-500">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-mint-600" />
                (99) 99999-9999
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-mint-600" />
                contato@seuemail.com.br
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-mint-600" />
                Av. Nome da Avenida, Nº - Rio de Janeiro/RJ
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-navy-900">
              Horário
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-navy-500">
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-mint-600" />
                Seg – Sex: 08h às 19h
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-mint-600" />
                Sábado: 09h às 12h (Atendimento Exclusivo)
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-navy-900">
              Redes Sociais
            </h4>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-white transition hover:bg-mint-500 hover:text-navy-950"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-white transition hover:bg-mint-500 hover:text-navy-950"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-navy-100 pt-8 text-xs text-navy-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Lumina Odontologia Avançada. Todos os
            direitos reservados. | Desenvolvido por <a href="https://ddevcamila.netlify.app" target='_blank'>Camila Diniz</a>
          </p>
          <p>CRO-SP 00000 · Responsável Técnico: Dr(a). Fictício da Silva</p>
        </div>
      </div>
    </footer>
  );
}
