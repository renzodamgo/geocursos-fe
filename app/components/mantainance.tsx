import { HeadingH1 } from "@ui/heading/headingH1";
import { Container } from "@ui/utils/container";
import Link from "next/link";

export const Mantainance = () => {
  return (
    <>
      <Container>
        <HeadingH1>Geocursos se renueva para ti</HeadingH1>
        <p className="pt-4">
          Estamos trabajando para darte una mejor experiencia.
        </p>
      </Container>
      <Container>
        <p className="text-center">
          Si necesitas información acerca de nuestros cursos{" "}
          <Link
            href={"https://www.facebook.com/people/Geo-Cursos/100064329750174/"}
            className="underline"
          >
            visita nuestra página de facebook aquí.
          </Link>
        </p>
      </Container>
    </>
  );
};
