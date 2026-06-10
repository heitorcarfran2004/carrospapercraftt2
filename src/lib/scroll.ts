/** Id of the pricing section, used as the smooth-scroll target for CTAs. */
export const PRICING_SECTION_ID = "planos";

/** Smoothly scroll the pricing section into view. */
export function scrollToPricing() {
  document
    .getElementById(PRICING_SECTION_ID)
    ?.scrollIntoView({ behavior: "smooth" });
}
