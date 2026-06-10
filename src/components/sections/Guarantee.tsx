import { guarantee } from "@/data/content";

const Guarantee = () => {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <div className="border-craft-dashed rounded-2xl bg-white p-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-craft-orange">
            {guarantee.badge}
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">{guarantee.title}</h2>

          <p className="mb-6 text-sm leading-relaxed text-foreground">
            Temos tanta certeza que você vai amar os moldes que oferecemos uma garantia
            incondicional. Se você não conseguir montar, não gostar dos modelos ou simplesmente
            mudar de ideia, nós devolvemos <strong>100% do seu dinheiro</strong>. Sem perguntas, sem
            letras miúdas. Basta um e-mail.
          </p>

          <div className="mb-6 border-t border-border" />

          <div className="flex justify-center gap-8">
            <div className="flex flex-col items-center">
              <p className="text-sm font-semibold text-foreground">{guarantee.signature}</p>
              <p className="text-xs italic text-muted-foreground">{guarantee.signatureNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
