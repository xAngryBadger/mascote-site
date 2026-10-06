import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  InstagramLogo,
  Phone,
  Star,
  ShieldCheck,
  Stethoscope,
  Microscope,
  Syringe,
  Heartbeat,
  Heart,
  Scissors,
  Buildings,
  PawPrint,
  Clock,
  Bird,
  Cat,
  Dog,
  CalendarCheck,
} from "@phosphor-icons/react/dist/ssr";

const WA = "https://wa.me/553135571724?text=Oi!%20Vim%20pelo%20site%20e%20quero%20agendar.";
const U = (id: string, w: number) => `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b bg-[#FAF6EE]/95 backdrop-blur" style={{ borderColor: "var(--color-line)" }}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">
        <Link href="#topo" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0E9B94] text-white">
            <PawPrint size={19} weight="fill" />
          </span>
          <span className="font-display text-2xl">Mascote</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-bold lg:flex">
          <a href="#servicos" className="transition hover:text-[#0E9B94]">Serviços</a>
          <a href="#casa" className="transition hover:text-[#0E9B94]">A casa</a>
          <a href="#equipe" className="transition hover:text-[#0E9B94]">Equipe</a>
          <a href="#contato" className="transition hover:text-[#0E9B94]">Onde fica</a>
        </nav>
        <a href={WA} target="_blank" className="btn-primary rounded-full bg-[#0E9B94] px-5 py-2.5 text-sm font-extrabold text-white">
          Agendar no WhatsApp
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="topo" className="overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-10 pt-10 md:pt-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <p className="mono-label inline-flex items-center gap-2 text-[#0A5E59]">
            <ShieldCheck size={15} weight="bold" className="text-[#0E9B94]" />
            Mariana · MG — Bom Jesus, 39
          </p>
          <h1 className="hero-title font-display mt-4 text-5xl leading-[1.04] sm:text-6xl lg:text-7xl">
            <span className="block">Saúde boa se vê</span>
            <span className="line-2 block italic text-[#0A5E59]">no rabo abanando.</span>
          </h1>
          <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-[#3D5A57]">
            Clínica, petshop e banho {"&"} tosa na Bom Jesus, 39. Cães, gatos e silvestres.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href={WA} target="_blank" className="btn-primary rounded-full bg-[#0E9B94] px-7 py-3.5 font-extrabold text-white">
              Agendar no WhatsApp
            </a>
            <a href="#servicos" className="btn-ghost group inline-flex items-center gap-2 rounded-full border px-6 py-3 font-extrabold" style={{ borderColor: "var(--color-line)" }}>
              Ver serviços
              <ArrowRight size={17} weight="bold" className="transition group-hover:translate-x-1" />
            </a>
          </div>
          <div className="ficha mt-8 flex gap-3 rounded-[20px] border bg-white/70 p-4" style={{ borderColor: "var(--color-line)" }}>
            <div className="flex flex-1 flex-col gap-1 text-sm">
              <p className="flex items-center gap-2 font-extrabold">
                <CalendarCheck size={17} weight="bold" className="shrink-0 text-[#0E9B94]" />
                Consulta, exame e cirurgia na mesma casa
              </p>
              <p className="pl-6 font-semibold text-[#3D5A57]">Chama no WhatsApp e a gente organiza o horário.</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <figure className="img-frame overflow-hidden rounded-[20px] border" style={{ borderColor: "var(--color-line)" }}>
              <img
                src={U("photo-1587300003388-59208cc962cb", 900)}
                alt="Cachorro em consulta veterinária"
                className="aspect-[4/5] w-full object-cover sm:aspect-[16/11] lg:aspect-[4/5]"
                loading="eager"
              />
            </figure>
            <div className="mt-3 flex items-center justify-between gap-3 text-sm">
              <p className="font-mono text-xs text-[#3D5A57]">Ficha nº 001 — recepção, Bom Jesus 39</p>
              <p className="flex items-center gap-1.5 font-bold">
                <Clock size={16} className="text-[#0E9B94]" />
                Hoje: chama no zap
              </p>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="border-t" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-2 px-4 py-4 font-mono text-xs text-[#3D5A57]">
          <span className="flex items-center gap-2"><PawPrint size={15} weight="fill" className="text-[#0E9B94]" /> Clínica · Petshop · Banho {"&"} tosa</span>
          <span className="flex items-center gap-2"><Heart size={15} weight="fill" className="text-[#0E9B94]" /> Cães · Gatos · Silvestres</span>
          <span className="flex items-center gap-2"><InstagramLogo size={15} className="text-[#0E9B94]" /> 1,9 mil no Instagram</span>
        </div>
      </div>
    </section>
  );
}

const SERV = [
  { n: "01", icon: Stethoscope, t: "Clínica geral", d: "Consulta com calma, prevenção em dia e aquele olhar treinado para o detalhe." },
  { n: "02", icon: Microscope, t: "Exames", d: "Diagnóstico completo para tratar com certeza, não no achismo." },
  { n: "03", icon: Syringe, t: "Cirurgias", d: "Centro cirúrgico com protocolo de dor e pós-operatório acompanhado." },
  { n: "04", icon: ShieldCheck, t: "Oncologia", d: "Cuidado em etapas, com honestidade sobre cada decisão." },
  { n: "05", icon: Heart, t: "Dermatologia", d: "Pele e pelo: coceira, ferida e alergia têm investigação de verdade." },
  { n: "06", icon: Heartbeat, t: "Cardiologia", d: "Coração monitorado antes, durante e depois do tratamento." },
];

function Servicos() {
  return (
    <section id="servicos" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-14 md:py-20">
      <Reveal>
        <p className="mono-label text-[#0E9B94]">Livro de serviços</p>
        <h2 className="font-display mt-3 max-w-2xl text-4xl leading-[1.05] md:text-5xl">
          Do check-up <span className="italic text-[#0A5E59]">ao tratamento delicado.</span>
        </h2>
      </Reveal>
      <div className="mt-8 border-t" style={{ borderColor: "var(--color-line)" }}>
        {SERV.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.n} delay={Math.min(i * 0.04, 0.2)}>
              <a
                href={WA}
                target="_blank"
                className="service-row grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b px-2 py-5 sm:gap-6 md:grid-cols-[64px_56px_1fr_auto] md:px-4"
                style={{ borderColor: "var(--color-line)" }}
              >
                <span className="font-mono text-sm text-[#0E9B94]">{s.n}</span>
                <span className="grid h-12 w-12 place-items-center rounded-[20px] bg-[#0E9B94]/10">
                  <Icon size={24} weight="bold" className="text-[#0A5E59]" />
                </span>
                <span>
                  <span className="font-display block text-2xl">{s.t}</span>
                  <span className="mt-1 block max-w-[62ch] text-sm font-semibold leading-relaxed text-[#3D5A57]">{s.d}</span>
                </span>
                <ArrowUpRight size={22} weight="bold" className="service-arrow text-[#3D5A57]" />
              </a>
            </Reveal>
          );
        })}
      </div>
      <p className="mt-4 text-sm font-bold text-[#3D5A57]">E muito mais — pergunta no WhatsApp.</p>
    </section>
  );
}

function Casa() {
  return (
    <section id="casa" className="scroll-mt-20 border-t bg-[#F1EADD]" style={{ borderColor: "var(--color-line)" }}>
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <Reveal>
          <h2 className="font-display max-w-3xl text-4xl leading-[1.05] md:text-5xl">
            A casa toda, <span className="italic text-[#0A5E59]">num endereço só.</span>
          </h2>
          <p className="mt-3 max-w-[58ch] font-semibold text-[#3D5A57]">Saúde, sacola e banho sem atravessar a cidade.</p>
        </Reveal>
        <div className="mt-8 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <figure className="img-frame h-full overflow-hidden rounded-[20px] border bg-white" style={{ borderColor: "var(--color-line)" }}>
              <img src={U("photo-1601758228041-f3b2795255f1", 1000)} alt="Família com cães e gato" loading="lazy" className="aspect-[16/10] w-full object-cover lg:aspect-auto lg:h-[340px]" />
              <figcaption className="flex items-start gap-3 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[20px] bg-[#0E9B94]/10">
                  <Buildings size={22} weight="bold" className="text-[#0A5E59]" />
                </span>
                <span>
                  <span className="font-display block text-2xl">Petshop</span>
                  <span className="block text-sm font-semibold text-[#3D5A57]">Ração, petisco e farmacinha — a sacola resolve na saída da consulta.</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
          <div className="grid gap-5 lg:col-span-5">
            <Reveal delay={0.06}>
              <figure className="img-frame flex items-center gap-4 overflow-hidden rounded-[20px] border bg-white p-4" style={{ borderColor: "var(--color-line)" }}>
                <img src={U("photo-1543466835-00a7907e9de1", 500)} alt="Cachorro sorrindo após tosa" loading="lazy" className="h-28 w-28 shrink-0 rounded-[20px] object-cover sm:h-32 sm:w-32" />
                <figcaption>
                  <span className="flex items-center gap-2 font-extrabold"><Scissors size={18} weight="bold" className="text-[#0E9B94]" /> Banho {"&"} tosa</span>
                  <span className="mt-1 block text-sm font-semibold text-[#3D5A57]">Banho quentinho e tosa com paciência, do jeito que cada pelo pede.</span>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.1}>
              <figure className="img-frame flex items-center gap-4 overflow-hidden rounded-[20px] bg-[#0A5E59] p-4 text-white">
                <img src={U("photo-1425082661705-1834bfd09dca", 500)} alt="Silvestre pequeno" loading="lazy" className="h-28 w-28 shrink-0 rounded-[20px] object-cover sm:h-32 sm:w-32" />
                <figcaption>
                  <span className="flex items-center gap-2 font-extrabold"><Bird size={18} weight="bold" className="text-[#5EEAD4]" /> Silvestres têm vez</span>
                  <span className="mt-1 block text-sm font-semibold text-white/75">Pouca clínica recebe — calopsita, coelho e cia. são bem-vindos aqui.</span>
                </figcaption>
              </figure>
            </Reveal>
            <div className="flex flex-wrap gap-2.5">
              <span className="flex items-center gap-1.5 rounded-full border bg-white px-4 py-2 text-sm font-bold" style={{ borderColor: "var(--color-line)" }}><Dog size={17} className="text-[#0E9B94]" /> cães</span>
              <span className="flex items-center gap-1.5 rounded-full border bg-white px-4 py-2 text-sm font-bold" style={{ borderColor: "var(--color-line)" }}><Cat size={17} className="text-[#0E9B94]" /> gatos</span>
              <span className="flex items-center gap-1.5 rounded-full border bg-white px-4 py-2 text-sm font-bold" style={{ borderColor: "var(--color-line)" }}><Bird size={17} className="text-[#0E9B94]" /> silvestres</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Equipe() {
  const people = [
    { img: "photo-1559839734-2b71ea197ec2", n: "Clínica geral", r: "Consulta com calma", cls: "" },
    { img: "photo-1622253692010-333f2da6031d", n: "Cirurgia", r: "Mão firme e cuidado", cls: "lg:mt-12" },
    { img: "photo-1576091160399-df8dccb8e05b", n: "Atendimento", r: "Ninguém espera sozinho", cls: "lg:mt-24" },
  ];
  return (
    <section id="equipe" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-14 md:py-20">
      <Reveal>
        <h2 className="font-display max-w-2xl text-4xl leading-[1.05] md:text-5xl">
          Gente que <span className="italic text-[#0A5E59]">ama bicho.</span>
        </h2>
        <p className="mt-3 max-w-[58ch] font-semibold text-[#3D5A57]">Quem recebe você e seu pet na Bom Jesus, 39.</p>
      </Reveal>
      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        {people.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.06} className={p.cls}>
            <figure className="img-frame overflow-hidden rounded-[20px] border bg-white" style={{ borderColor: "var(--color-line)" }}>
              <img src={U(p.img, 600)} alt={p.n} loading="lazy" className="aspect-[3/4] w-full object-cover" />
              <figcaption className="border-t p-4" style={{ borderColor: "var(--color-line)" }}>
                <p className="font-mono text-xs text-[#0E9B94]">0{i + 1} — equipe</p>
                <p className="font-display mt-1 text-2xl">{p.n}</p>
                <p className="text-sm font-semibold text-[#3D5A57]">{p.r}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <p className="mt-4 text-xs font-bold text-[#3D5A57]/70">Fotos ilustrativas — vamos trocar pela equipe real.</p>
    </section>
  );
}

function Depoimento() {
  return (
    <section className="border-t" style={{ borderColor: "var(--color-line)" }}>
      <div className="mx-auto max-w-4xl px-4 py-14 text-center md:py-20">
        <Reveal>
          <div className="flex justify-center gap-1 text-[#0E9B94]">
            {[0, 1, 2, 3, 4].map((s) => (
              <Star key={s} size={18} weight="fill" />
            ))}
          </div>
          <blockquote className="font-display mx-auto mt-5 text-3xl leading-snug md:text-4xl">
            “Cuidaram da minha calopsita como se fosse da família.”
          </blockquote>
          <p className="mt-4 text-sm font-extrabold uppercase tracking-widest text-[#3D5A57]">Tutora de silvestre — cliente da casa</p>
          <img
            src={U("photo-1514888286974-6c03e2ca1dba", 700)}
            alt="Gato olhando para a câmera"
            loading="lazy"
            className="mx-auto mt-7 h-20 w-20 rounded-full border object-cover"
            style={{ borderColor: "var(--color-line)" }}
          />
        </Reveal>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <footer id="contato" className="scroll-mt-20 border-t bg-[#122E2C] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <Reveal>
          <p className="font-display text-5xl leading-[1.02] sm:text-6xl md:text-7xl">
            Traz seu <span className="italic text-[#5EEAD4]">pet.</span>
          </p>
        </Reveal>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[20px] border border-white/15 bg-white/5 p-6 text-[15px] font-bold">
            <p className="flex items-center gap-2.5">
              <MapPin size={19} className="shrink-0 text-[#5EEAD4]" />
              R. Bom Jesus, 39 — Centro, Mariana MG
            </p>
            <a href={WA} target="_blank" className="mt-3 flex items-center gap-2.5 transition hover:text-[#5EEAD4]">
              <Phone size={19} className="shrink-0 text-[#5EEAD4]" />
              (31) 3557-1724 · WhatsApp
            </a>
            <p className="mt-3 flex items-center gap-2.5">
              <Clock size={19} className="shrink-0 text-[#5EEAD4]" />
              Ligue e agende — chama no zap
            </p>
            <a href="https://www.instagram.com/veterinariamascote" target="_blank" className="mt-3 flex items-center gap-2.5 transition hover:text-[#5EEAD4]">
              <InstagramLogo size={19} className="shrink-0 text-[#5EEAD4]" />
              @veterinariamascote · 1,9 mil
            </a>
            <div className="mt-5">
              <a href={WA} target="_blank" className="btn-primary inline-block rounded-full bg-[#0E9B94] px-6 py-3 font-extrabold text-white">
                Agendar no WhatsApp
              </a>
            </div>
          </div>
          <iframe
            title="Mapa — R. Bom Jesus 39, Mariana MG"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-43.43%2C-20.39%2C-43.40%2C-20.36&layer=mapnik&marker=-20.3777%2C-43.4164"
            className="h-[300px] w-full rounded-[20px] border border-white/15 lg:h-full lg:min-h-[320px]"
            loading="lazy"
          />
        </div>
        <div className="mt-8 flex flex-col justify-between gap-2 border-t border-white/15 pt-5 text-xs font-bold text-white/50 md:flex-row">
          <p>Veterinária Mascote — cães, gatos e silvestres.</p>
          <a href="#topo" className="transition hover:text-white">Voltar ao topo ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <Servicos />
      <Casa />
      <Equipe />
      <Depoimento />
      <Contato />
      <a
        href={WA}
        target="_blank"
        className="btn-primary fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#0E9B94] px-5 py-3 font-extrabold text-white shadow-lg"
      >
        <Phone size={20} weight="fill" />
        Agendar no WhatsApp
      </a>
    </main>
  );
}
