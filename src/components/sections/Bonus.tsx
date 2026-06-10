import { bonuses } from "@/data/content";

const Bonus = () => {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-2 text-sm uppercase tracking-wider text-muted-foreground">
          Presentes pra você
        </p>
        <h2 className="mb-8 text-[35px] font-bold leading-[1.2] text-foreground">
          Leve Tudo<span className="text-craft-orange"> De Graça</span>
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {bonuses.map((bonus) => (
            <div
              key={bonus.title}
              className="border-craft-dotted group overflow-hidden rounded-2xl bg-white transition-all hover:shadow-lg"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-1 font-bold text-foreground">{bonus.title}</h3>
                <p className="mb-3 text-xs text-muted-foreground">{bonus.description}</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-xs text-muted-foreground line-through">{bonus.price}</span>
                  <span className="rounded-full bg-craft-green px-3 py-1 text-xs font-bold text-craft-green-foreground">
                    Grátis hoje
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonus;
