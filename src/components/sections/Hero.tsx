import { hero } from "@/data/content";
import ScrollCta from "@/components/ScrollCta";

const Hero = () => {
  return (
    <section className="paper-texture relative overflow-hidden px-4 py-12 text-center">
      {/* Badge */}
      <div className="border-craft-dashed mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1">
        <span className="rounded-full bg-primary px-2.5 py-0.5 text-[12px] font-bold text-primary-foreground">
          {hero.badgeCount}
        </span>
        <span className="text-[12px] font-semibold uppercase tracking-wider text-foreground">
          {hero.badgeLabel}
        </span>
      </div>

      {/* Title */}
      <h1 className="mb-4 text-[36px] font-bold leading-[1.15] text-foreground">
        {hero.titleLead}{" "}
        <span className="bg-gradient-to-r from-craft-orange to-primary bg-clip-text text-transparent">
          {hero.titleHighlight}
        </span>{" "}
        {hero.titleTail}
      </h1>

      <p className="mx-auto mb-6 max-w-xl text-lg text-muted-foreground">{hero.subtitle}</p>

      {/* CTA */}
      <div className="mb-8">
        <ScrollCta className="mx-auto max-w-xl">{hero.cta}</ScrollCta>
      </div>

      {/* Hero image */}
      <div className="relative mx-auto max-w-xl">
        <div className="border-craft-dashed overflow-hidden rounded-2xl bg-card p-2">
          <img
            src={hero.image}
            alt={hero.imageAlt}
            fetchPriority="high"
            decoding="sync"
            width={hero.imageWidth}
            height={hero.imageHeight}
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
