import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { testimonialShots } from "@/data/content";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 3500;

const Testimonials = () => {
  const shots = testimonialShots;
  const n = shots.length;
  const [active, setActive] = useState(0);

  const go = (i: number) => setActive(((i % n) + n) % n);

  // Auto-rotate; the timer resets whenever `active` changes (incl. manual nav).
  useEffect(() => {
    const t = setTimeout(() => setActive((a) => (a + 1) % n), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [active, n]);

  // Basic swipe support (touch + mouse drag).
  const startX = useRef<number | null>(null);
  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (dx > 40) go(active - 1);
    else if (dx < -40) go(active + 1);
  };

  return (
    <section className="bg-card px-4 py-16">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-2 text-[35px] font-bold leading-[1.2] text-foreground">
          Quem monta,<span className="text-craft-orange">se apaixona!</span>
        </h2>
        <p className="mb-10 text-muted-foreground">
          Alguns relatos de quem já comprou e aprovou a Coleção
        </p>

        {/* Coverflow carousel */}
        <div className="relative mx-auto max-w-md">
          <div
            className="relative h-[500px] touch-pan-y select-none overflow-hidden"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            {shots.map((src, i) => {
              // Normalised offset from the active slide, wrapped to (-n/2, n/2].
              let d = i - active;
              if (d > n / 2) d -= n;
              if (d < -n / 2) d += n;
              const abs = Math.abs(d);

              const x = abs === 0 ? 0 : abs === 1 ? d * 62 : d > 0 ? 100 : -100; // % of own width
              const scale = abs === 0 ? 1 : abs === 1 ? 0.8 : 0.6;
              const opacity = abs === 0 ? 1 : abs === 1 ? 0.55 : 0;
              const zIndex = abs === 0 ? 30 : abs === 1 ? 20 : 10;

              return (
                <div
                  key={src}
                  className="absolute left-1/2 top-1/2 w-[230px] sm:w-[250px]"
                  style={{
                    transform: `translate(-50%, -50%) translateX(${x}%) scale(${scale})`,
                    opacity,
                    zIndex,
                    transition: "transform 500ms ease, opacity 500ms ease",
                  }}
                  aria-hidden={abs !== 0}
                >
                  <div className="border-craft-dashed overflow-hidden rounded-2xl bg-white p-1 shadow-lg">
                    <img
                      src={src}
                      alt={`Depoimento de cliente no WhatsApp ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      className="w-full rounded-xl"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Arrows */}
          <button
            onClick={() => go(active - 1)}
            aria-label="Anterior"
            className="absolute left-1 top-1/2 z-40 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow backdrop-blur-sm transition-colors hover:bg-background"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={() => go(active + 1)}
            aria-label="Próximo"
            className="absolute right-1 top-1/2 z-40 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow backdrop-blur-sm transition-colors hover:bg-background"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {shots.map((src, i) => (
            <button
              key={src}
              onClick={() => go(i)}
              aria-label={`Ir para depoimento ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all",
                i === active ? "w-5 bg-craft-orange" : "w-2 bg-muted-foreground/30",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
