import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
