import { useState } from "react";
import { Check, X, Shield, Download, ThumbsUp, Gift } from "lucide-react";

import { pricing, bonusItems, checkoutLinks } from "@/data/content";
import { PRICING_SECTION_ID } from "@/lib/scroll";
import UpsellPopup from "@/components/UpsellPopup";

const trustBadges = [
  { icon: Shield, label: "Compra 100% segura" },
  { icon: Download, label: "Download imediato" },
  { icon: ThumbsUp, label: "Garantia de satisfação" },
];

const Pricing = () => {
  const [showUpsell, setShowUpsell] = useState(false);

  return (
    <>
      <section id={PRICING_SECTION_ID} className="bg-card px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm uppercase tracking-wider text-muted-foreground">
            Sem mensalidades
          </p>
          <h2 className="mb-2 text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-craft-orange to-primary bg-clip-text text-transparent">
              Escolha seu kit
            </span>
          </h2>
          <p className="mb-8 text-muted-foreground">Pague uma vez, é seu para sempre.</p>

          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-2">
            {/* Kit Iniciante */}
            <div className="rounded-2xl border border-border bg-white p-8">
              <h3 className="mb-1 text-2xl font-bold text-foreground">{pricing.basic.name}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{pricing.basic.tagline}</p>

              <div className="mb-6">
                <p className="text-4xl font-bold text-foreground">{pricing.basic.price}</p>
              </div>

              <ul className="mb-6 space-y-2 text-left text-sm">
                {pricing.basic.features.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-foreground">
                    <Check className="h-4 w-4 flex-shrink-0 text-craft-green" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mb-4 border-t border-border" />

              <p className="mb-3 text-xs font-semibold text-muted-foreground">
                Bônus não inclusos neste kit
              </p>
              <ul className="mb-6 space-y-2 text-left text-sm">
                {bonusItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <X className="h-4 w-4 flex-shrink-0 text-primary/50" />
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setShowUpsell(true)}
                className="w-full rounded-full border border-border bg-transparent py-3 font-bold uppercase text-foreground transition-colors hover:bg-secondary/30"
              >
                {pricing.basic.cta}
              </button>
            </div>

            {/* Coleção Mestre */}
            <div className="border-craft-dashed-primary relative mt-4 overflow-visible rounded-2xl bg-white p-8">
              <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-craft-orange to-primary px-4 py-1.5 text-xs font-bold text-primary-foreground">
                {pricing.master.badge}
              </div>

              <h3 className="mb-1 mt-2 text-2xl font-bold text-foreground">{pricing.master.name}</h3>

              <div className="mb-[0.3rem]">
                <p className="text-sm text-muted-foreground line-through">
                  {pricing.master.priceFrom}
                </p>
                <p className="text-[2.75rem] font-bold text-primary">{pricing.master.price}</p>
              </div>
              <p className="mb-6 text-sm font-semibold">
                <span className="rounded-full bg-craft-green/15 px-3 py-1 text-craft-green">
                  {pricing.master.savings}
                </span>
              </p>

              <ul className="mb-6 space-y-2 text-left text-sm">
                {pricing.master.features.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-foreground">
                    <Check className="h-4 w-4 flex-shrink-0 text-craft-green" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mb-4 border-t border-border" />

              <p className="mb-3 text-[0.9rem] font-semibold text-craft-green">Bônus inclusos</p>
              <ul className="mb-6 space-y-2 text-left text-sm">
                {pricing.master.extras.map((item) => (
                  <li key={item.label} className="flex items-center gap-2 text-foreground">
                    {item.isBonus ? (
                      <Gift className="h-4 w-4 flex-shrink-0 text-craft-green" />
                    ) : (
                      <Check className="h-4 w-4 flex-shrink-0 text-craft-green" />
                    )}
                    {item.label}
                  </li>
                ))}
              </ul>

              <a href={checkoutLinks.master} className="btn-cta-green">
                {pricing.master.cta}
              </a>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 md:grid-cols-3">
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.label}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-white p-6"
                >
                  <Icon className="h-6 w-6 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <UpsellPopup open={showUpsell} onClose={() => setShowUpsell(false)} />
    </>
  );
};

export default Pricing;
