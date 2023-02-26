import "./globals.css";

import { Amiri, Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amiri",
});

export const metadata = {
  title: "GeoCursos | Plataforma educativa de cursos de Geología",
  description:
    "Dictamos cursos de geología, minería, medio ambiente, metalurgia y carreras a fines. A precios académicos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <Script defer src="https://plausible.io/js/script.js" />
      <body
        className={`${inter.variable} ${amiri.variable} font-sans bg-primary`}
      >
        {children}
      </body>
    </html>
  );
}
