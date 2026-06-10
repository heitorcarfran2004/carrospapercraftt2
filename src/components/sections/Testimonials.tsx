import { Star } from "lucide-react";

import { testimonials } from "@/data/content";

const Testimonials = () => {
  return (
    <section className="bg-card px-4 py-16">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-2 text-[35px] font-bold leading-[1.2] text-foreground">
          Quem monta,<span className="text-craft-orange">se apaixona!</span>
        </h2>
        <p className="mb-8 text-muted-foreground">
          Alguns relatos de quem já comprou e aprovou a Coleção
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="border-craft-dashed rounded-2xl bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex justify-center">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  decoding="async"
                  className="border-craft-dotted h-16 w-16 rounded-full object-cover"
                />
              </div>
              <div className="mb-3 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-craft-orange text-craft-orange" />
                ))}
              </div>
              <p className="mb-4 text-sm italic text-foreground">"{t.text}"</p>
              <p className="text-sm font-bold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
