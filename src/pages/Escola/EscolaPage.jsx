import React, { useEffect, useState, useRef } from "react";
import styles from "./styles";
import me from "../../images/karina.png";
import escola from "../../images/aescola.jpg";
import angela from "../../images/angela.png";
import marcela from "../../images/marcela.png";
import fernanda from "../../images/fernanda.png";
import wagner from "../../images/wagner.png";
import rubens from "../../images/rubens.png";
import cesar from "../../images/cesar.png";
import img1 from "../../images/imagem1.jpg";
import img2 from "../../images/imagem2.jpg";
import img3 from "../../images/imagem3.jpg";
import img4 from "../../images/imagem4.jpg";
import img5 from "../../images/imagem5.jpg";
import img6 from "../../images/imagem6.jpg";
import img7 from "../../images/imagem7.jpg";
import img8 from "../../images/imagem8.jpg";

import { motion } from "framer-motion";
import LazyLoad from "react-lazyload";

const professores = [
  { name: "Angela Roma", image: angela },
  { name: "Marcela Silva", image: marcela },
  { name: "Fernanda Costa", image: fernanda },
  { name: "Wagner Sousa", image: wagner },
  { name: "Rubens Lima", image: rubens },
  { name: "Cesar Santos", image: cesar },
];

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const {
  GlobalContainer,
  Container,
  ProfessorContainer,
  ContainerFundacao,
  ContainerProfessores,
  Carousel,
  Inner,
  Row,
  Title,
  Subtitle,
} = styles;

const EscolaPage = () => {
  const firstRowProfessores = professores.slice(0, 3);
  const secondRowProfessores = professores.slice(3, 6);
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  const [preloadImages, setPreloadImages] = useState(false);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPreloadImages(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (carousel.current) {
      observer.observe(carousel.current);
    }

    return () => {
      if (carousel.current) {
        observer.unobserve(carousel.current);
      }
    };
  }, []);

  return (
    <section>
      <GlobalContainer>
        <Container>
          <Title>História da escola</Title>
          <Subtitle>Nossa Escola</Subtitle>
          <div>
            <p>
              Desde os primeiros passos até os momentos de glória nos gramados, estamos ao lado de nossos alunos,
              apoiando-os em sua jornada de crescimento e amadurecimento como atletas e como pessoas. Nosso compromisso
              vai além do desenvolvimento técnico e tático. Buscamos criar um ambiente inclusivo e acolhedor, onde cada
              aluno se sinta valorizado e encorajado a alcançar seu máximo potencial, tanto dentro quanto fora de campo.{" "}
              <br />
              Ao longo desses 10 anos, construímos uma sólida reputação de excelência no ensino do futebol, aliando
              métodos modernos de treinamento à dedicação de uma equipe técnica apaixonada e experiente. <br />
              Nosso compromisso com a qualidade e a inovação nos permite oferecer uma experiência de aprendizado
              enriquecedora e gratificante, que prepara nossos alunos para os desafios e oportunidades que os aguardam
              no mundo do esporte e além. <br />
              Nosso legado é definido não apenas pelos títulos conquistados em competições, mas pelas vidas que
              impactamos e pelas memórias que criamos juntos. <br />
              Estamos entusiasmados com o que o futuro reserva para nossa escola de futebol e todos os talentos que
              estão por vir. Junte-se a nós nesta emocionante jornada e faça parte da história da nossa escola de
              futebol!
            </p>
            <LazyLoad height={200} offset={100}>
              <img src={escola} alt="imagem" />
            </LazyLoad>
          </div>
        </Container>

        <ContainerFundacao>
          <Title>Fundação</Title>
          <Subtitle>Karina Teixeira Sodré</Subtitle>

          <div>
            <p>
              Olá, sou a Karina Sodré, uma entusiasta da tecnologia com 25 anos de idade. Como desenvolvedora de
              software, mergulho profundamente no mundo do React, TypeScript e Node.js, utilizando essas tecnologias
              para criar soluções inovadoras e eficientes. Nos últimos tempos, tenho direcionado meus estudos para o
              aprimoramento em banco de dados, explorando as nuances do PostgreSQL e MongoDB para garantir o
              armazenamento e manipulação eficazes de dados.
              <br />
              Além de minhas experiências técnicas, estou imersa em um processo de aprendizado contínuo, buscando
              excelência na área de tecnologia. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas, uma
              jornada que amplia minha compreensão dos fundamentos da computação e me prepara para enfrentar desafios
              cada vez mais complexos. <br />
              Como complemento, conquistei uma especialização em Desenvolvimento Full Stack por meio de um MBA oferecido
              pela XP Educação. Essa experiência consolidou meu domínio sobre todo o ciclo de desenvolvimento de
              software, desde a concepção da ideia até a entrega do produto final. <br />
              Estou em uma importante fase de transição de carreira, onde busco expandir meus horizontes e explorar
              novas oportunidades. A criação de projetos pessoais é uma das formas pelas quais venho fortalecendo meu
              portfólio, e o Travessão é um exemplo notável desse esforço. Esse projeto surgiu da ideia de otimizar um
              site de educação, mais especificamente, focado em educação esportiva, como uma escola de futebol fictícia.
              Através do <span>Travessão</span>, demonstro não apenas minhas habilidades técnicas, mas também minha
              paixão por tecnologia e futebol.
              <br />É importante destacar que todos os dados apresentados neste site são fictícios e foram criados com o
              propósito de demonstrar minhas habilidades de desenvolvimento. Estou feliz com as possibilidades que o
              futuro reserva e ansiosa em continuar minha jornada de crescimento no universo da tecnologia.
            </p>

            <LazyLoad height={200} offset={100}>
              <img src={me} alt="image" />
            </LazyLoad>
          </div>
        </ContainerFundacao>

        <Title>Professores</Title>
        <Subtitle>Nossos professores</Subtitle>

        <ContainerProfessores>
          <Row>
            {firstRowProfessores.map((professor) => (
              <ProfessorContainer key={professor.name}>
                <LazyLoad height={200} offset={100}>
                  <img src={professor.image} alt={professor.name} />
                </LazyLoad>
                <h2>{professor.name}</h2>
              </ProfessorContainer>
            ))}
          </Row>
          <Row>
            {secondRowProfessores.map((professor) => (
              <ProfessorContainer key={professor.name}>
                <LazyLoad height={200} offset={100}>
                  <img src={professor.image} alt={professor.name} />
                </LazyLoad>
                <h2>{professor.name}</h2>
              </ProfessorContainer>
            ))}
          </Row>
        </ContainerProfessores>

        <div>
          <Title>Galeria de Fotos</Title>
          <Subtitle>Fotos dos nossos alunos e escola</Subtitle>
          <Carousel ref={carousel} as={motion.div} whileTap={{ cursor: "grabbing" }}>
            <Inner as={motion.div} drag="x" dragConstraints={{ right: 0, left: -width }}>
              {images.map((image) => (
                <motion.div className="item" key={image}>
                  <img src={image} alt="Texto Alt" loading={preloadImages ? "eager" : "lazy"} />
                </motion.div>
              ))}
            </Inner>
          </Carousel>
        </div>
      </GlobalContainer>
    </section>
  );
};

export default EscolaPage;
