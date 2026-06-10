import { cn } from "@/lib/utils";
import { scrollToPricing } from "@/lib/scroll";

interface ScrollCtaProps {
  children: React.ReactNode;
  className?: string;
}

/** Green CTA button that smooth-scrolls to the pricing section. */
const ScrollCta = ({ children, className }: ScrollCtaProps) => (
  <button onClick={scrollToPricing} className={cn("btn-cta-green", className)}>
    {children}
  </button>
);

export default ScrollCta;
