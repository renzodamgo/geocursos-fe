import { coursesData } from "@data/courses.data";
import { CourseCard } from "@ui/CourseCard";
import { HeadingH2 } from "@ui/Heading/HeadingH2";
import { HeadingH3 } from "@ui/Heading/HeadingH3";
import { Link } from "@ui/Link/Link";
import { Paragraph } from "@ui/Text/Paragraph";
import { Container } from "@ui/Utils/Container";
import Image from "next/image";
import LandingImg from "public/img/landing.jpg";
import StarSvg from "public/svgs/stars.svg";
const Landing = () => {
  return (
    <div>
      <section id="Geocursos">
        <div className="md:container grid justify-items-start gap-4">
          <Container className="grid justify-items-start gap-4">
            <HeadingH2>
              Tenemos un curso para ti a un precio académico
            </HeadingH2>
            <Paragraph>
              Cursos virtuales en VIVO, a un costo accesible, dictado por
              profesionales para todos los niveles.
            </Paragraph>
            <Link innerRef="#" intent="primary">
              Mira Nuestros cursos
            </Link>
          </Container>
        </div>
        <Image
          src={LandingImg}
          alt="Dictamos cursos de geología, minería, medio ambiente, metalurgia y carreras a fines. A precios académicos."
        />
      </section>
      <section id="¿Por qué elegirnos?">
        <Container className="bg-secondary grid gap-4">
          <HeadingH3 alternative>
            Trabaja con data de proyectos mineros reales, resolviendo problemas
            que se pueden presentar en un ambiente laboral.
          </HeadingH3>
          <Image
            src={StarSvg}
            alt="5 estrellas en facebook"
            className="w-[60%] md:w-[40%]"
          />
          <Paragraph serif alternative>
            5/5 estrellas en más 80+ reviews en facebook de nuestros alumnos.
          </Paragraph>
        </Container>
      </section>
      <section id="Nuestros_ultimos_cursos">
        <Container className="bg-gray">
          <HeadingH2>Nuestros últimos cursos</HeadingH2>
          <Link
            intent="simple"
            innerRef="/landing#Nuestros_ultimos_cursos"
            serif
          >
            Ver más cursos
          </Link>
          <div className="pt-3"></div>
          <div className="grid gap-6">
            {coursesData.map((courseData) => (
              <CourseCard data={courseData} loading key={courseData.id} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Landing;
