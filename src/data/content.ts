import { Printer, FileText, Scissors, type LucideIcon } from "lucide-react";

import heroImage from "@/assets/hero.jpg";
import benefitImage1 from "@/assets/benefit-1.jpg";
import benefitImage2 from "@/assets/benefit-2.jpg";
import benefitImage3 from "@/assets/benefit-3.jpg";
import benefitImage4 from "@/assets/benefit-4.jpg";
import bonusMotosImage from "@/assets/bonus-motos.png";
import testimonialShot1 from "@/assets/depoimento-1.png";
import testimonialShot2 from "@/assets/depoimento-2.png";
import testimonialShot3 from "@/assets/depoimento-3.png";
import testimonialShot4 from "@/assets/depoimento-4.png";

/**
 * Single source of truth for every piece of copy, price, image and checkout
 * link on the page. Edit content here — components only handle layout.
 */

/** Checkout / payment links. Swap these when the offer or platform changes. */
export const checkoutLinks = {
  master: "https://ggcheckout.app/checkout/v5/ln3lfTp9i5sWyPz55zHx",
  upsellMaster: "https://ggcheckout.app/checkout/v5/Vp9C0Itwf2SzfygDyCVw",
  upsellBasic: "https://ggcheckout.app/checkout/v5/pquoPNmTIbbIxMZI1ule",
} as const;

export const hero = {
  badgeCount: "+1000",
  badgeLabel: "Moldes Aprovados",
  titleLead: "Transforme Papel em",
  titleHighlight: "Carros 3D",
  titleTail: "incríveis",
  subtitle:
    "Mais de 1000 moldes prontos para baixar, imprimir e montar sua própria coleção de carros em miniatura.",
  cta: "QUERO COMEÇAR AGORA",
  image: heroImage,
  imageWidth: 2752,
  imageHeight: 1536,
  imageAlt: "Caixa de papercraft com personagens montados em 3D",
};

export interface Benefit {
  title: string;
  description: string;
  image: string;
}

export const benefits: Benefit[] = [
  {
    title: "Ótimo para colecionar e decorar",
    description:
      "Monte carros que viram destaque na estante, no escritório ou no setup gamer — e vá crescendo sua coleção sem limite.",
    image: benefitImage1,
  },
  {
    title: "+1000 carros pra todo gosto",
    description:
      "De clássicos a superesportivos: mais de 1000 moldes pra você sempre ter um carro novo esperando.",
    image: benefitImage2,
  },
  {
    title: "Mais família e menos telas",
    description:
      "Troca o tempo de tela por horas montando junto — sozinho pra relaxar ou com a família toda na mesa.",
    image: benefitImage3,
  },
  {
    title: "Realismo que impressiona",
    description:
      "Acabamento tão detalhado que parece miniatura de coleção — ninguém acredita que é papel.",
    image: benefitImage4,
  },
];

export interface GalleryCategory {
  title: string;
  subtitle: string;
  slug: string;
  images: string[];
}

/** Build public image URLs for a category, in the given numeric order. */
const categoryImages = (slug: string, numbers: number[]): string[] =>
  numbers.map((n) => `/carrosseis/${slug}/${n}.jpeg`);

export const galleryCategories: GalleryCategory[] = [
  {
    title: "Esportivos & Superesportivos",
    subtitle: "As máquinas dos sonhos, de pista e de rua",
    slug: "esportivos-superesportivos",
    images: categoryImages("esportivos-superesportivos", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  },
  {
    title: "Clássicos & Antigos",
    subtitle: "Os que marcaram outras décadas",
    slug: "classicos-antigos",
    images: categoryImages("classicos-antigos", [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15]),
  },
  {
    title: "Cinema & Séries",
    subtitle: "Os carros que marcaram as telas",
    slug: "cinema-series",
    images: categoryImages("cinema-series", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  },
  {
    title: "Populares do Dia a Dia",
    subtitle: "Aqueles que todo mundo conhece",
    slug: "populares",
    images: categoryImages("populares", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
  },
  {
    title: "Serviço & Cidade",
    subtitle: "Da ambulância à viatura",
    slug: "servico-cidade",
    images: categoryImages("servico-cidade", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  },
  {
    title: "Corrida F1",
    subtitle: "Direto das pistas de corrida",
    slug: "corrida-f1",
    images: categoryImages("corrida-f1", [1, 2, 3, 4, 5, 6, 7, 8, 9]),
  },
];

export interface Step {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const steps: Step[] = [
  {
    title: "Impressora Comum",
    description: "Funciona em qualquer impressora doméstica A4 (Jato de tinta ou Laser).",
    icon: Printer,
  },
  {
    title: "Papel Acessível",
    description:
      "Use sulfite 75g para treinar ou papel 180g (encontrado em qualquer papelaria) para maior durabilidade.",
    icon: FileText,
  },
  {
    title: "Cola e Tesoura",
    description:
      "Cola branca escolar, tesoura sem ponta e régua. Materiais simples que você já tem em casa.",
    icon: Scissors,
  },
];

/** Screenshots of real WhatsApp conversations, shown in the coverflow carousel. */
export const testimonialShots: string[] = [
  testimonialShot1,
  testimonialShot2,
  testimonialShot3,
  testimonialShot4,
];

export interface Bonus {
  title: string;
  description: string;
  price: string;
  image: string;
}

export const bonuses: Bonus[] = [
  {
    title: "Moldes de Motos",
    description: "+200 Moldes de Motos Populares, Superesportivas e Antigas",
    price: "R$ 29,90",
    image: bonusMotosImage,
  },
  {
    title: "Moldes de Máquinas Pesadas",
    description: "+150 Moldes de Caminhões, Tratores e Máquinas de Construção",
    price: "R$ 32,00",
    image: "https://i.imgur.com/qnjPY2Z.png",
  },
  {
    title: "Moldes de Animais 3D",
    description: "+250 moldes com animais selvagens e domésticos para montar.",
    price: "R$ 27,00",
    image: "https://i.imgur.com/BvuaRyc.jpg",
  },
];

/** The three bonuses, as listed inside the pricing cards. */
export const bonusItems = [
  "BÔNUS 1: +200 Moldes de Motos",
  "BÔNUS 2: +150 Moldes de Máquinas Pesadas",
  "BÔNUS 3: +250 Moldes de Animais 3D",
];

export const pricing = {
  basic: {
    name: "Kit Iniciante",
    tagline: "Quero só o básico",
    price: "R$ 10",
    features: [
      "100 Moldes de Carros",
      "Instruções de Montagem",
      "Acesso Vitalício e Downloads Ilimitados",
    ],
    cta: "QUERO SÓ O BÁSICO",
  },
  master: {
    name: "Coleção Mestre",
    badge: "Mais popular",
    priceFrom: "De R$ 149,90",
    price: "R$ 19,90",
    savings: "Economize R$ 135,00",
    features: [
      "+1000 Moldes de Carros",
      "Carros de todos os modelos: Superesportivos, Populares, Militares, Clássicos e Antigos",
      "Instruções detalhadas de Montagem",
      "Acesso Vitalício e Downloads Ilimitados",
    ],
    extras: [
      { label: "BÔNUS 1: +200 Moldes de Motos", isBonus: true },
      { label: "BÔNUS 2: +150 Moldes de Máquinas Pesadas", isBonus: true },
      { label: "BÔNUS 3: +250 Moldes de Animais 3D", isBonus: true },
      { label: "Entrega Imediata no WhatsApp", isBonus: false },
      { label: "Área de Membros Premium", isBonus: false },
      { label: "Suporte Prioritário", isBonus: false },
    ],
    cta: "SIM! EU QUERO TUDO",
  },
};

export const upsell = {
  banner: "ESPERE! NÃO VÁ EMBORA AINDA",
  titleLead: "Desbloqueamos um",
  titleHighlight: "Desconto Secreto",
  titleTail: "pra você!",
  description:
    "Você mostrou interesse no Pacote Básico. Antes de continuar, que tal ver a oferta especial do Pacote Completo (Mestre) com um preço exclusivo?",
  offerLabel: "OFERTA RELÂMPAGO",
  priceFrom: "R$ 19,90",
  price: "R$ 14,90",
  countdownSeconds: 299, // 4:59
  ctaPrimary: "QUERO APROVEITAR AGORA",
  ctaSecondary: "Continuar com Pacote Básico",
};

export const guarantee = {
  badge: "Risco Zero",
  title: "Garantia de 7 dias",
  signature: "Oficina Criativa",
  signatureNote: "Assinatura autorizada",
};

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "Como vou receber os moldes depois da compra?",
    answer:
      "Assim que o pagamento for aprovado, você recebe o acesso imediatamente para baixar os arquivos. Os moldes são enviados no WhatsApp e também no e-mail.",
  },
  {
    question: "Posso imprimir quantas vezes eu quiser?",
    answer: "Sim! Depois de comprar, você pode imprimir os moldes quantas vezes quiser.",
  },
  {
    question: "É difícil montar os carros?",
    answer: "Não. Basta recortar, dobrar e colar. Com o primeiro modelo você já pega o jeito.",
  },
  {
    question: "Qual papel devo usar para montar os carros? Posso usar sulfite normal?",
    answer:
      'Sim! O papel sulfite normal já funciona muito bem e dá pra montar tranquilamente. Porém, se você quiser um resultado mais resistente e com acabamento mais "premium", o ideal é usar papel mais firme, como 180g a 230g.',
  },
  {
    question: "Qual cola é melhor para montar?",
    answer:
      "Cola branca escolar funciona perfeitamente. Cola bastão também pode ajudar em peças menores.",
  },
  {
    question: "Os moldes são coloridos ou preciso pintar?",
    answer:
      "A maioria já vem colorida e pronta. Alguns modelos podem ser personalizados se você quiser pintar.",
  },
  {
    question: "Os carros ficam realistas mesmo?",
    answer:
      "Sim! Os modelos são feitos para ficarem com aparência bem detalhada, com dobras e encaixes visíveis.",
  },
  {
    question: "Preciso ter impressora em casa? Funciona em impressora comum?",
    answer:
      "Não precisa ter impressora em casa. Você pode imprimir em qualquer gráfica rápida da sua cidade. E se tiver impressora, funciona perfeitamente em qualquer impressora doméstica A4.",
  },
  {
    question: "Tem tutorial ensinando a montar?",
    answer:
      "Sim. A montagem é simples e alguns moldes incluem instruções passo a passo.",
  },
  {
    question: "Tem carros esportivos, clássicos e populares?",
    answer: "Sim. A coleção inclui superesportivos, clássicos e carros populares.",
  },
  {
    question: "O acesso expira?",
    answer: "Não. O acesso é vitalício.",
  },
  {
    question: "Se eu perder os arquivos, posso baixar de novo?",
    answer: "Sim. Você pode acessar novamente e baixar quando quiser.",
  },
  {
    question: "Tem garantia?",
    answer: "Sim. Você tem 7 dias de garantia para pedir reembolso se não gostar.",
  },
  {
    question: "Como funciona o reembolso?",
    answer:
      "Basta solicitar dentro do prazo de 7 dias e você recebe o dinheiro de volta.",
  },
  {
    question: "O pagamento é seguro?",
    answer: "Sim. O pagamento é feito por plataforma segura com Pix e cartão.",
  },
];
