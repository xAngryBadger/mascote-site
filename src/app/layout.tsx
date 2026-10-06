import type { Metadata } from "next";
import { DM_Serif_Display, Nunito_Sans, Roboto_Mono } from "next/font/google";
import "./globals.css";

const display = DM_Serif_Display({ subsets: ["latin"], weight: ["400"], style: ["normal", "italic"], variable: "--font-display" });
const body = Nunito_Sans({ subsets: ["latin"], weight: ["400", "600", "700", "800", "900"], variable: "--font-sans" });
const mono = Roboto_Mono({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Veterinária Mascote — Mariana MG | Clínica, Petshop, Banho & Tosa",
  description: "Veterinária Mascote na Rua Bom Jesus, 39 — Centro, Mariana MG. Clínica, petshop e banho & tosa para cães, gatos e silvestres.",
  openGraph: {
    title: "Veterinária Mascote — Mariana MG",
    description: "Clínica, petshop e banho & tosa. Cães, gatos e silvestres.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}>{children}</body>
    </html>
  );
}
