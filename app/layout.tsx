import "./globals.css";

import PlausibleProvider from "next-plausible";
import { Amiri, Inter } from "next/font/google";
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
      <head>
        <PlausibleProvider
          trackOutboundLinks={true}
          trackLocalhost={true}
          domain="geocursos.com.pe"
        />
      </head>
      <body
        className={`${inter.variable} ${amiri.variable} font-sans bg-primary`}
      >
        {children}
      </body>
    </html>
  );
}
