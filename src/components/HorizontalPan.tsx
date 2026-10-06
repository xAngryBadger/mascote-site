"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
gsap.registerPlugin(ScrollTrigger);
export function HorizontalPan({ children, id }: { children: React.ReactNode; id?: string }) {
  const wrap = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce || !wrap.current || !track.current) return;
    const ctx = gsap.context(() => {
      const distance = track.current!.scrollWidth - window.innerWidth;
      gsap.to(track.current, { x: -distance, ease: "none", scrollTrigger: { trigger: wrap.current, start: "top top", end: () => `+=${distance}`, pin: true, scrub: 1, invalidateOnRefresh: true } });
    }, wrap);
    return () => ctx.revert();
  }, [reduce]);
  if (reduce) return (<section id={id} className="overflow-x-auto"><div className="flex w-max">{children}</div></section>);
  return (<section id={id} ref={wrap} className="relative overflow-hidden"><div ref={track} className="flex h-[100dvh] w-max items-center">{children}</div></section>);
}
