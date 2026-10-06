"use client";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useInView, animate } from "motion/react";
const EASE: [number, number, number, number] = [0.34, 1.4, 0.64, 1];
export function FadeUp({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (<motion.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay, ease: EASE }}>{children}</motion.div>);
}
export function Clip({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (<motion.div className={className} initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0.4 }} whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.9, ease: EASE }}>{children}</motion.div>);
}
export function Odometer({ to, suffix = "", className }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!inView || !ref.current) return;
    if (reduce) { ref.current.textContent = `${to.toLocaleString("pt-BR")}${suffix}`; return; }
    const c = animate(0, to, { duration: 1.4, ease: EASE, onUpdate: (v) => { if (ref.current) ref.current.textContent = `${Math.round(v).toLocaleString("pt-BR")}${suffix}`; } });
    return () => c.stop();
  }, [inView, reduce, to, suffix]);
  return (<span ref={ref} className={className}>0{suffix}</span>);
}
export { Reveal } from "./Reveal";
