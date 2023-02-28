import { coursesData } from "@data/courses.data";
import { testimonies } from "@data/testimonies.data";
import { CourseCard } from "@ui/CourseCard";
import { HeadingH2 } from "@ui/Heading/HeadingH2";
import { HeadingH3 } from "@ui/Heading/HeadingH3";
import { Link } from "@ui/Link/Link";
import { TestiCard } from "@ui/TestiCard";
import { Paragraph } from "@ui/Text/Paragraph";
import { Container } from "@ui/Utils/Container";
import Image from "next/image";
import HappyGirlImg from "public/img/happy_laptop.webp";
import LandingImg from "public/img/landing.webp";
import StarSvg from "public/svgs/stars.svg";
const Landing = () => {
  return (
    <div>
      <section id="Geocursos">
        <div className="md:container md:mx-auto md:grid md:grid-cols-2">
          <div className="grid justify-items-start gap-4">
            <Container className="grid justify-items-start md:content-center gap-3">
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
        </div>
      </section>
      <section id="Por_que_elegirnos">
        <Container className="bg-secondary grid gap-4 md:grid-cols-2 items-center md:py-14">
          <HeadingH3 className="md:w-4/5" alternative>
            Trabaja con data de proyectos mineros reales, resolviendo problemas
            que se pueden presentar en un ambiente laboral.
          </HeadingH3>
          <div className="grid gap-4">
            <Image
              src={StarSvg}
              alt="5 estrellas en facebook"
              width={200}
              height={200}
            />
            <Paragraph className="md:w-4/5" serif alternative>
              5/5 estrellas en más 80+ reviews en facebook de nuestros alumnos.
            </Paragraph>
          </div>
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
          <div className="grid gap-6 md:grid-cols-3">
            {coursesData.map((courseData) => (
              <CourseCard data={courseData} loading key={courseData.id} />
            ))}
          </div>
        </Container>
      </section>
      <section id="Cursos_completos">
        <Container className="bg-white">
          <HeadingH2>Nuestros últimos cursos</HeadingH2>
          <Link
            intent="simple"
            innerRef="/landing#Nuestros_ultimos_cursos"
            serif
          >
            Ver más cursos
          </Link>
          <div className="pt-3"></div>
          <div className="grid gap-6 md:grid-cols-3">
            {coursesData.map((courseData) => (
              <CourseCard
                data={courseData}
                key={courseData.id}
                loading={false}
              />
            ))}
          </div>
        </Container>
      </section>
      <section id="estadisticas">
        <Container className="bg-primary">
          <div className="grid justify-items-center gap-8 text-center font-serif font-bold md:grid-cols-3 ">
            <div className="stat flex flex-col items-center">
              <p className="text-7xl">20+</p>
              <h2 className="w-[70%] text-2xl">
                Más de 20 cursos de geografía y sumando
              </h2>
            </div>
            <div className="stat flex flex-col items-center">
              <p className="text-7xl">10+</p>
              <h2 className="w-[70%] text-2xl">
                Estudiantes de más de 10 países aprendiendo con geocursos.
              </h2>
            </div>
            <div className="stat flex flex-col items-center">
              <p className="text-7xl">200+</p>
              <h2 className="w-[70%] text-2xl">
                Accede a más de 200 horas en VIVO y grabadas por curso.
              </h2>
            </div>
          </div>
        </Container>
      </section>
      <section id="Testimonios">
        <Container>
          <HeadingH2 className="text-center">
            Nuestros alumnos avalan nuestro nivel de enseñanza
          </HeadingH2>
          <div className="grid gap-5 py-4 md:grid-cols-3">
            {testimonies.map((testimony, idx) => (
              <TestiCard
                name={testimony.name}
                details={testimony.details}
                occupation={testimony.occupation}
                key={idx}
              />
            ))}
          </div>
        </Container>
      </section>
      <section id="partners_estrategicos">
        <Container>
          <HeadingH2 className="text-center">
            Certificados de parte de nosotros y partners estratégicos
          </HeadingH2>
          <div className="grid grid-cols-2 items-center gap-10 pt-5 md:justify-items-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_logo.svg"
              alt="IEEE"
              className="grayscale transition-all duration-500 hover:scale-105 hover:grayscale-0"
              width={200}
              height={200}
            />
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_logo.svg"
              alt="IEEE"
              className="grayscale transition-all duration-500 hover:scale-105 hover:grayscale-0"
              width={200}
              height={200}
            />
          </div>
        </Container>
      </section>
      <section id="Unete_a_nosotros">
        <div className="container md:m-auto ">
          <div className="grid items-center  bg-primary md:grid-cols-2  ">
            <div className="grid justify-items-start gap-4 px-6 py-8 md:px-10">
              <h2 className="font-serif text-3xl md:w-[80%] md:text-4xl">
                Estudia con nosostros y mejora tus habilidades
              </h2>
              <Link innerRef="#" intent="secondary">
                Únete a nuestra comunidad
              </Link>
            </div>
            <div>
              <Image
                src={HappyGirlImg}
                alt="Estudiante aprendiendo con geocursos"
                className="w-full object-cover md:max-h-[300px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
