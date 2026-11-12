# Meu Ponto — Landing Page

Landing page premium AAA do app [Meu Ponto](https://github.com/eibragaa/meu-ponto-android), fiel ao brand book e pronto para publicação no Netlify com atualização automática a partir deste repositório.

## Stack

- [Astro](https://astro.build/) — HTML estático, performance máxima
- [Tailwind CSS](https://tailwindcss.com/) — estilização consistente com o branding
- [Netlify](https://www.netlify.com/) — hospedagem com deploy contínuo

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra `http://localhost:4321`

## Build

```bash
npm run build
npm run preview
```

## Deploy no Netlify (automático)

1. Crie um novo site no [Netlify](https://app.netlify.com/) conectando este repositório.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. A cada `git push` no branch principal, o Netlify fará o deploy automático.

## Branding

Cores e identidade seguem [`docs/brand-book.md`](../meu-ponto-android/docs/brand-book.md) do repositório principal.

- Logo: `public/logo.svg`
- Paleta: Ink, Coral, Teal, Mint, Cream, Mist
- Tom: preciso, acolhedor, discreto e contemporâneo

## TODO: Screenshots reais
- Adicionar galeria/carrossel com prints reais do app quando disponíveis.
- Formatos otimizados: `.webp` (prioritário) + fallback.
- Colocar em `public/screenshots/` e integrar ao `index.astro`.
