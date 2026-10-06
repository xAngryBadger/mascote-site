"use client";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
const LINKS = [{ h: "#capitulos", t: "A casa" },{ h: "#especialidades", t: "Especialidades" },{ h: "#silvestres", t: "Silvestres" },{ h: "#equipe", t: "Equipe" },{ h: "#contato", t: "Onde fica" }];
export function Menu({ cta }: { cta: string }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  return (<><button onClick={() => setOpen(!open)} aria-label="Abrir menu" className="fixed right-4 top-4 z-[70] grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/60 text-2xl font-black text-white backdrop-blur">{open ? "×" : "≡"}</button><AnimatePresence>{open && (<motion.nav initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="fixed inset-0 z-[65] flex flex-col justify-center bg-[#06201F]/97 px-8 backdrop-blur-xl">{LINKS.map((l, i) => (<motion.a key={l.h} href={l.h} onClick={() => setOpen(false)} initial={reduce ? false : { opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="font-display border-b border-white/10 py-3 text-5xl font-extrabold uppercase text-[#F4EFE3] transition hover:text-[#2DD3C0]">{l.t}</motion.a>))}<motion.a href={cta} target="_blank" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-8 inline-block w-fit rounded-full bg-[#2DD3C0] px-8 py-4 font-extrabold text-[#06201F]">Agendar no WhatsApp</motion.a></motion.nav>)}</AnimatePresence></>);
}
