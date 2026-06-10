import { steps } from "@/data/content";

const Steps = () => {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-2 text-sm uppercase tracking-wider text-muted-foreground">
          Simples assim!
        </p>
        <h2 className="mb-8 text-[35px] font-bold leading-[1.2] text-foreground">
          Do celular <span className="text-craft-orange">para suas mãos</span>
        </h2>

        <div className="relative grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Dashed connecting line between the step cards */}
          <div className="scissors-line cut-line absolute left-[20%] right-[20%] top-16 hidden md:block" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="border-craft-dashed flex flex-col items-center rounded-2xl bg-white p-6"
              >
                <div className="border-craft-dashed-primary relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-background text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">{step.title}</h3>
                <p className="max-w-xs text-sm text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Steps;
