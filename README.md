# Lumina Odontologia Estética — Landing Page

Landing page de página única para clínica odontológica de alto padrão,
construída em React + TypeScript + Tailwind CSS + lucide-react, focada em
conversão via WhatsApp. Landing Page teste para compor portfólio.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço que o Vite mostrar no terminal.

## O que ajustar antes de publicar

- **Número de WhatsApp**: troque `5511912345678` nos arquivos
  `src/components/Header.tsx`, `src/components/Hero.tsx` e
  `src/components/WhatsAppFloatButton.tsx` pelo número real (formato
  `55DDDNUMERO`, sem espaços ou símbolos).
- **Foto do Hero**: o bloco com borda tracejada em `Hero.tsx` é o
  placeholder da foto do paciente sorrindo. Troque a `div` decorativa por
  uma tag `<img src="..." />` com a foto real, mantendo a classe
  `rounded-[2.5rem]` para preservar o estilo.
- **Dados de contato e redes sociais**: em `src/components/Footer.tsx`
  (telefone, e-mail, endereço, Instagram/Facebook, CRO fictício).

## Estrutura

```
src/
  App.tsx                       -> monta a página inteira
  components/
    Header.tsx                  -> topo fixo com logo + CTA
    Hero.tsx                    -> seção de impacto com CTA principal
    SmileDivider.tsx            -> divisor SVG (elemento de assinatura)
    Services.tsx                -> grid de 4 serviços
    WhyChooseUs.tsx             -> 3 diferenciais (fundo navy)
    Footer.tsx                  -> contato, endereço, redes sociais
    WhatsAppFloatButton.tsx     -> botão flutuante fixo de WhatsApp
```

## Paleta e tipografia (definidas em `tailwind.config.js`)

- **Navy** (`navy-950` a `navy-50`): confiança, textos e seção de
  diferenciais.
- **Mint** (`mint-600` a `mint-50`): CTAs, ícones e destaques.
- **Off-white** (`#FAF9F6`): fundo principal, mais suave que branco puro.
- **Fraunces** (serif): títulos — transmite sofisticação sem ser frio.
- **Inter** (sans): textos corridos — legibilidade em qualquer tamanho.
