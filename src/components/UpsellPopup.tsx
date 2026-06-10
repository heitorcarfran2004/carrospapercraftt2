import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { upsell } from "@/data/content";
import { checkoutLinks } from "@/data/content";

interface UpsellPopupProps {
  open: boolean;
  onClose: () => void;
}

const UpsellPopup = ({ open, onClose }: UpsellPopupProps) => {
  const [seconds, setSeconds] = useState(upsell.countdownSeconds);

  // Reset and run the countdown only while the popup is open.
  useEffect(() => {
    if (!open) {
      setSeconds(upsell.countdownSeconds);
      return;
    }
    const interval = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [open]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-sm gap-0 overflow-hidden rounded-2xl border-none bg-background p-0 font-body">
        {/* Top banner */}
        <div className="relative flex items-center justify-center bg-craft-orange px-4 py-2.5 text-center text-white">
          <span className="text-xs font-bold uppercase tracking-widest">{upsell.banner}</span>
        </div>

        <DialogTitle className="sr-only">Oferta especial</DialogTitle>

        <div className="px-6 pb-5 pt-6 text-center">
          <h3 className="mb-3 text-2xl font-bold leading-tight text-foreground">
            {upsell.titleLead}{" "}
            <span className="bg-gradient-to-r from-craft-orange to-primary bg-clip-text text-transparent">
              {upsell.titleHighlight}
            </span>{" "}
            {upsell.titleTail}
          </h3>

          <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{upsell.description}</p>

          {/* Offer card */}
          <div className="border-craft-dashed mb-5 rounded-xl bg-craft-cream p-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {upsell.offerLabel}
            </p>
            <div className="mb-2 flex items-center justify-center gap-3">
              <span className="text-lg text-muted-foreground line-through">{upsell.priceFrom}</span>
              <span className="text-[2.2rem] font-bold text-primary">{upsell.price}</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>
                Expira em {mins}:{secs.toString().padStart(2, "0")}
              </span>
            </div>
          </div>

          <a href={checkoutLinks.upsellMaster} className="btn-cta-green mb-3">
            {upsell.ctaPrimary}
          </a>

          <a
            href={checkoutLinks.upsellBasic}
            className="block w-full rounded-full border border-border py-3 text-center text-sm font-medium text-foreground transition-colors hover:bg-secondary/30"
          >
            {upsell.ctaSecondary}
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpsellPopup;
