import { Clock } from "lucide-react";

/** Sticky-feel urgency banner that shows today's date. */
const TopBanner = () => {
  const formattedDate = new Date().toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
  });

  return (
    <div className="w-full bg-primary px-4 py-2.5 text-center">
      <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
        <Clock className="h-4 w-4" />
        Oportunidade Única:
      </p>
      <p className="text-xs text-primary-foreground/80">
        Promoção válida somente até hoje, {formattedDate}
      </p>
    </div>
  );
};

export default TopBanner;
