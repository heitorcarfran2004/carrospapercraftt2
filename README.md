# Carros Papercraft

Landing page de vendas dos moldes de carros em papercraft — página única com Hero,
benefícios, galeria de categorias (carrosséis), passos, depoimentos, bônus, planos,
garantia e FAQ.

## Stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) + utilitários "craft" (bordas tracejadas, cut-lines)
- [Radix UI](https://www.radix-ui.com/) (accordion, dialog) e [lucide-react](https://lucide.dev/) (ícones)

## Como rodar

```bash
npm install
npm run dev      # servidor de desenvolvimento (http://localhost:8080)
npm run build    # build de produção (type-check + bundle em dist/)
npm run preview  # serve o build de produção
```

> Requer Node 18+ e npm.

## Estrutura

```
src/
  data/content.ts        # todo o conteúdo: textos, preços, imagens, links, FAQ
  components/sections/    # uma seção por arquivo (Hero, Gallery, Pricing, ...)
  components/ui/          # componentes base (accordion, dialog)
  index.css               # design tokens + utilitários craft
public/carrosseis/        # imagens das categorias da galeria
```

Para ajustar conteúdo (preços, textos, imagens), edite `src/data/content.ts`.
