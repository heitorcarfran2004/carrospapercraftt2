import { benefits } from "@/data/content";

const Benefits = () => {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-2 text-sm uppercase tracking-wider text-muted-foreground">
          Mais que um hobby...
        </p>
        <h2 className="inline-block pb-[30px] text-[34px] font-bold leading-[1.2]">
          <span className="text-foreground">Por que você</span>{" "}
          <span className="bg-gradient-to-r from-craft-orange to-primary bg-clip-text text-transparent">
            deve começar hoje?
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="border-craft-dashed flex flex-col overflow-hidden rounded-2xl bg-white p-4 text-center transition-shadow hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden rounded-xl">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-1 pt-4">
                <h3 className="mb-1 text-lg font-bold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
