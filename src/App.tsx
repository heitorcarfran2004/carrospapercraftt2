import { lazy, Suspense } from "react";

import TopBanner from "@/components/sections/TopBanner";
import Hero from "@/components/sections/Hero";

// Below-the-fold sections are code-split so the first paint stays light.
const Benefits = lazy(() => import("@/components/sections/Benefits"));
const Gallery = lazy(() => import("@/components/sections/Gallery"));
const Steps = lazy(() => import("@/components/sections/Steps"));
const Testimonials = lazy(() => import("@/components/sections/Testimonials"));
const Bonus = lazy(() => import("@/components/sections/Bonus"));
const Pricing = lazy(() => import("@/components/sections/Pricing"));
const Guarantee = lazy(() => import("@/components/sections/Guarantee"));
const Faq = lazy(() => import("@/components/sections/Faq"));

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Hero />
      <Suspense fallback={null}>
        <Benefits />
        <Gallery />
        <Steps />
        <Testimonials />
        <Bonus />
        <Pricing />
        <Guarantee />
        <Faq />
      </Suspense>
    </div>
  );
};

export default App;
