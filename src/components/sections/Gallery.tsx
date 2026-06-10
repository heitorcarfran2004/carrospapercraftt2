import { useEffect, useRef } from "react";

import { galleryCategories, type GalleryCategory } from "@/data/content";

const SCROLL_SPEED = 38; // px per second (frame-rate independent)

/**
 * Continuously slides a horizontal row to the left, looping seamlessly.
 *
 * The images are rendered twice; we keep the scroll position inside the first
 * copy and wrap back by exactly one copy's width once we pass it. Because the
 * two copies are identical, the wrap is invisible.
 *
 * Pauses only while the user is actively dragging/swiping, then resumes from
 * wherever they left it. Stays still for users who prefer reduced motion.
 */
function useSlideLeft<T extends HTMLElement>(itemCount: number) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Width of one full copy = where the duplicated set starts.
    const loopWidth = () => {
      const first = el.children[0] as HTMLElement | undefined;
      const dup = el.children[itemCount] as HTMLElement | undefined;
      return first && dup ? dup.offsetLeft - first.offsetLeft : 0;
    };

    let raf = 0;
    let paused = false;
    let last = 0;
    let pos = 0;
    el.scrollLeft = pos;

    const tick = (now: number) => {
      const dt = last ? now - last : 0;
      last = now;
      const lw = loopWidth();
      if (!paused && lw > 0) {
        // Increasing scrollLeft moves the strip to the left.
        pos += (SCROLL_SPEED * dt) / 1000;
        if (pos >= lw) pos -= lw;
        el.scrollLeft = pos;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
      pos = el.scrollLeft; // continue from wherever the manual swipe left it
    };

    el.addEventListener("pointerdown", pause);
    window.addEventListener("pointerup", resume);
    window.addEventListener("pointercancel", resume);
    el.addEventListener("touchstart", pause, { passive: true });
    window.addEventListener("touchend", resume, { passive: true });
    window.addEventListener("touchcancel", resume, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerdown", pause);
      window.removeEventListener("pointerup", resume);
      window.removeEventListener("pointercancel", resume);
      el.removeEventListener("touchstart", pause);
      window.removeEventListener("touchend", resume);
      window.removeEventListener("touchcancel", resume);
    };
  }, [itemCount]);

  return ref;
}

const CategoryRow = ({ category }: { category: GalleryCategory }) => {
  const rowRef = useSlideLeft<HTMLDivElement>(category.images.length);
  // Render the images twice so the leftward slide can loop without a jump.
  const items = [...category.images, ...category.images];

  return (
    <div>
      <h3 className="text-left text-[20px] font-bold text-[#da3827]">{category.title}</h3>
      <p className="mb-4 text-left text-sm text-muted-foreground">{category.subtitle}</p>

      <div ref={rowRef} className="no-scrollbar flex gap-4 overflow-x-auto pb-2">
        {items.map((src, i) => (
          <div key={i} className="w-56 shrink-0 sm:w-64">
            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border bg-white">
              <img
                src={src}
                alt={`${category.title} — exemplo ${(i % category.images.length) + 1}`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section className="bg-card px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="mb-2 inline-block text-[34px] font-bold leading-[1.2]">
            <span className="text-foreground">Veja o que</span>{" "}
            <span className="bg-gradient-to-r from-craft-orange to-primary bg-clip-text text-transparent">
              você pode criar
            </span>
          </h2>
          <p className="mb-10 text-muted-foreground">
            Confira alguns exemplos reais de montagens feitas com nossos moldes.
          </p>
        </div>

        <div className="space-y-12">
          {galleryCategories.map((category) => (
            <CategoryRow key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
