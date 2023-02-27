import { HeadingH2 } from "@ui/Heading/HeadingH2";
import { Paragraph } from "@ui/Text/Paragraph";
import { Container } from "@ui/Utils/Container";

const Landing = () => {
  return (
    <div>
      <div className="md:container">
        <Container>
          <HeadingH2>Tenemos un curso para ti a un precio académico</HeadingH2>
          <Paragraph>
            Cursos virtuales en VIVO, a un costo accesible, dictado por
            profesionales para todos los niveles.
          </Paragraph>
        </Container>
      </div>
    </div>
  );
};

export default Landing;
