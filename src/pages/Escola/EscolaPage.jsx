import React from "react";
import styles from "./styles";
import logoImage from "../../images/logo.png";
import fb from "../../images/facebook.png";
import ig from "../../images/instagram.png";
import tt from "../../images/twitter.png";
import yt from "../../images/youtube.png";
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

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const professores = [
  { name: "Angela Roma", image: angela },
  { name: "Marcela Silva", image: marcela },
  { name: "Fernanda Costa", image: fernanda },
  { name: "Wagner Sousa", image: wagner },
  { name: "Rubens Lima", image: rubens },
  { name: "Cesar Santos", image: cesar },
];

const socialMedia = [
  { name: "Facebook", image: fb, link: "https://facebook.com" },
  { name: "Instagram", image: ig, link: "https://instagram.com" },
  { name: "Twitter", image: tt, link: "https://twitter.com" },
  { name: "YouTube", image: yt, link: "https://youtube.com" },
];

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const {
  GlobalContainer,
  Header,
  LogoImage,
  HeaderElements,
  Button,
  Container,
  ProfessorContainer,
  ContainerFundacao,
  ContainerProfessores,
  Carousel,
  Inner,
  Row,
  Title,
  Subtitle,
  Footer,
  FooterContainer,
  FooterContent,
  SocialMedia,
} = styles;

const EscolaPage = () => {
  const firstRowProfessores = professores.slice(0, 3);
  const secondRowProfessores = professores.slice(3, 6);
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <section>
      <GlobalContainer>
        <Header>
          <Link to="/">
            <LogoImage src={logoImage} alt="Logo" />
          </Link>
          <HeaderElements>
            <Link to="/">Home</Link>
            <Link to="/aescola">A escola</Link>
            <Link to="/turmasehorarios">Turmas e horários</Link>
            <Link to="/contato">Contato</Link>
            <Button>Matricule-se</Button>
          </HeaderElements>
        </Header>

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
            <img src={escola} alt="imagem" />
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

            <img src={me} alt="image" />
          </div>
        </ContainerFundacao>

        <Title>Professores</Title>
        <Subtitle>Nossos professores</Subtitle>

        <ContainerProfessores>
          <Row>
            {firstRowProfessores.map((professor) => (
              <ProfessorContainer key={professor.name}>
                <img src={professor.image} alt={professor.name} />
                <h2>{professor.name}</h2>
              </ProfessorContainer>
            ))}
          </Row>
          <Row>
            {secondRowProfessores.map((professor) => (
              <ProfessorContainer key={professor.name}>
                <img src={professor.image} alt={professor.name} />
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
                  <img src={image} alt="Texto Alt" />
                </motion.div>
              ))}
            </Inner>
          </Carousel>
        </div>
      </GlobalContainer>

      <Footer customMarginLeft="0px" customMarginRight="0px">
        <FooterContainer>
          <FooterContent>
            <ul>
              <h1>A Escola</h1>
              <li>
                <a href="#historia">História</a>
              </li>
              <li>
                <a href="#jogar">Jogue com a gente</a>
              </li>
              <li>
                <a href="#instrutores">Instrutores</a>
              </li>
              <li>
                <a href="#trabalhe">Trabalhe conosco</a>
              </li>
            </ul>
          </FooterContent>

          <FooterContent>
            <ul>
              <h1>Fale conosco</h1>
              <li>
                <a href="#email_telefone">Email e telefone</a>
              </li>
              <li>
                <a href="#perguntas_frequentes">Perguntas frequentes</a>
              </li>
            </ul>
          </FooterContent>

          <FooterContent>
            <h1>Endereço</h1>
            <p>R. Pedra Verde, 000 - Perdizes </p>
            <p>Rua Morro Azul, 104 - República </p>
          </FooterContent>

          <div>
            <h1>Redes Sociais</h1>
            <SocialMedia>
              {socialMedia.map((media) => (
                <div key={media.name}>
                  <a href={media.link} target="_blank" rel="noopener noreferrer">
                    <img src={media.image} alt={media.name} />
                  </a>
                </div>
              ))}
            </SocialMedia>
          </div>
        </FooterContainer>
      </Footer>
    </section>
  );
};

export default EscolaPage;
