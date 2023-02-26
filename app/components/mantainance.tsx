import { HeadingH1 } from "@ui/heading/headingH1";
import { Paragraph } from "@ui/text/paragraph";
import { Container } from "@ui/utils/container";
import Image from "next/image";
import Link from "next/link";
import landingImg from "public/img/landing.jpg";

export const Mantainance = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 md:h-[90vh] md:items-center">
        <Container className="md:pl-20 lg:pl-40 md:pr-10">
          <HeadingH1 className="md:hidden">
            Geocursos se renueva para ti
          </HeadingH1>
          <HeadingH1 className="hidden md:inline">
            Geocursos
            <br /> se renueva para ti
          </HeadingH1>
          <Paragraph className="pt-4">
            Estamos trabajando para darte una mejor experiencia.
          </Paragraph>
        </Container>
        <Image
          className="w-full h-full object-cover object-left"
          src={landingImg}
          alt="Geocursos"
          sizes="(max-width: 768px) 100vw,
								50 vw"
          priority
        />
      </div>

      <div className="md:bg-black md:text-white md:h-[10vh]">
        <Container>
          <Paragraph className="text-center">
            Si necesitas información acerca de nuestros cursos{" "}
            <Link
              href={
                "https://www.facebook.com/people/Geo-Cursos/100064329750174/"
              }
              className="underline"
            >
              visita nuestra página de facebook aquí.
            </Link>
          </Paragraph>
        </Container>
      </div>
    </div>
  );
};
