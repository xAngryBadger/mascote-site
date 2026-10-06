"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
export function Magnetic({ children, href }: { children: React.ReactNode; href: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14 });
  const sy = useSpring(y, { stiffness: 180, damping: 14 });
  const reduce = useReducedMotion();
  const box = useRef<HTMLAnchorElement>(null);
  if (reduce) return (<a href={href} target="_blank" className="inline-block rounded-full bg-[#2DD3C0] px-8 py-4 font-extrabold text-[#06201F]">{children}</a>);
  return (<motion.a ref={box} href={href} target="_blank" style={{ x: sx, y: sy }} onMouseMove={(e) => { const r = box.current!.getBoundingClientRect(); x.set((e.clientX - (r.left + r.width / 2)) * 0.25); y.set((e.clientY - (r.top + r.height / 2)) * 0.35); }} onMouseLeave={() => { x.set(0); y.set(0); }} className="inline-block rounded-full bg-[#2DD3C0] px-8 py-4 font-extrabold text-[#06201F] transition-[background] hover:brightness-110">{children}</motion.a>);
}
