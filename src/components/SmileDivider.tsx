// Pequeno elemento de assinatura: uma curva em forma de sorriso
// que separa o Hero da seção de Serviços, reforçando o tema
// da página sem recorrer a ícones óbvios.
export default function SmileDivider() {
  return (
    <div className="relative bg-offwhite" aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="h-10 w-full sm:h-14"
      >
        <path d="M0,0 C240,80 1200,80 1440,0 L1440,80 L0,80 Z" fill="#FFFFFF" />
        <path
          d="M0,0 C240,72 1200,72 1440,0"
          fill="none"
          stroke="#2EC4B6"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
