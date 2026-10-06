"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
gsap.registerPlugin(ScrollTrigger);
export function StickyStack({ cards }: { cards: React.ReactNode[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce || !ref.current) return;
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>(".stack-card");
      els.forEach((card, i) => {
        if (i === els.length - 1) return;
        ScrollTrigger.create({ trigger: card, start: "top top", endTrigger: els[els.length - 1], end: "top top", pin: true, pinSpacing: false });
        gsap.to(card, { scale: 0.92, opacity: 0.5, ease: "none", scrollTrigger: { trigger: els[i + 1], start: "top bottom", end: "top top", scrub: true } });
      });
    }, ref);
    return () => ctx.revert();
  }, [reduce]);
  return (<div ref={ref} className="relative">{cards.map((c, i) => (<div key={i} className="stack-card sticky top-0 flex min-h-[100dvh] items-center">{c}</div>))}</div>);
}
