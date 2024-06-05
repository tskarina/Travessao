import React from "react";
import styles from "./styles";
import iniciante from "../../images/ini.jpg";
import intermediario from "../../images/int.jpg";
import goleiro from "../../images/gol.jpg";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const { GlobalContainer, Container, Title } = styles;

const TurmasPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <section>
      <GlobalContainer>
        <Container>
          <Title>Treinamento de Iniciante</Title>
          <div>
            <p>
              Desde os primeiros passos até os momentos de glória nos gramados, estamos ao lado de nossos alunos, Desde
              os primeiros passos até os momentos de glória nos gramados, estamos ao lado de nossos alunos, apoiando-os
              em sua jornada de crescimento e amadurecimento como atletas e como pessoas. Nosso compromisso vai além do
              desenvolvimento técnico e tático. Buscamos criar um ambiente inclusivo e acolhedor, onde cada aluno se
              sinta valorizado e encorajado a alcançar seu máximo potencial, tanto dentro quanto fora de campo. Ao longo
              desses 10 anos, construímos uma sólida reputação de excelência no ensino do futebol, aliando métodos
              modernos de treinamento à dedicação de uma equipe técnica apaixonada e experiente. Nosso compromisso com a
              qualidade e a inovação nos permite oferecer uma experiência de aprendizado enriquecedora e gratificante,
              que prepara nossos alunos para os desafios e oportunidades que os aguardam no mundo do esporte e além.
              Nosso legado é definido não apenas pelos títulos conquistados em competições, mas pelas vidas que
              impactamos e pelas memórias que criamos juntos. Estamos entusiasmados com o que o futuro reserva para
              nossa escola de futebol e todos os talentos que estão por vir. Junte-se a nós nesta emocionante jornada e
              faça parte da história da nossa escola de futebol!
            </p>
            <img src={iniciante} alt="imagem" />
          </div>
        </Container>

        <Container>
          <Title>Treinamento Intermediário</Title>
          <div>
            <p>
              Desde os primeiros passos até os momentos de glória nos gramados, estamos ao lado de nossos alunos,
              apoiando-os em sua jornada de crescimento e amadurecimento como atletas e como pessoas. Nosso compromisso
              vai além do desenvolvimento técnico e tático. Buscamos criar um ambiente inclusivo e acolhedor, onde cada
              aluno se sinta valorizado e encorajado a alcançar seu máximo potencial, tanto dentro quanto fora de campo.
              Ao longo desses 10 anos, construímos uma sólida reputação de excelência no ensino do futebol, aliando
              métodos modernos de treinamento à dedicação de uma equipe técnica apaixonada e experiente. Nosso
              compromisso com a qualidade e a inovação nos permite oferecer uma experiência de aprendizado enriquecedora
              e gratificante, que prepara nossos alunos para os desafios e oportunidades que os aguardam no mundo do
              esporte e além. Nosso legado é definido não apenas pelos títulos conquistados em competições, mas pelas
              vidas que impactamos e pelas memórias que criamos juntos. Estamos entusiasmados com o que o futuro reserva
              para nossa escola de futebol e todos os talentos que estão por vir. Junte-se a nós nesta emocionante
              jornada e faça parte da história da nossa escola de futebol!
            </p>
            <img src={intermediario} alt="imagem" />
          </div>
        </Container>

        <Container>
          <Title>Treinamento de Goleiro</Title>
          <div>
            <p>
              Desde os primeiros passos até os momentos de glória nos gramados, estamos ao lado de nossos alunos,
              apoiando-os em sua jornada de crescimento e amadurecimento como atletas e como pessoas. Nosso compromisso
              vai além do desenvolvimento técnico e tático. Buscamos criar um ambiente inclusivo e acolhedor, onde cada
              aluno se sinta valorizado e encorajado a alcançar seu máximo potencial, tanto dentro quanto fora de campo.
              Ao longo desses 10 anos, construímos uma sólida reputação de excelência no ensino do futebol, aliando
              métodos modernos de treinamento à dedicação de uma equipe técnica apaixonada e experiente. Nosso
              compromisso com a qualidade e a inovação nos permite oferecer uma experiência de aprendizado enriquecedora
              e gratificante, que prepara nossos alunos para os desafios e oportunidades que os aguardam no mundo do
              esporte e além. Nosso legado é definido não apenas pelos títulos conquistados em competições, mas pelas
              vidas que impactamos e pelas memórias que criamos juntos. Estamos entusiasmados com o que o futuro reserva
              para nossa escola de futebol e todos os talentos que estão por vir. Junte-se a nós nesta emocionante
              jornada e faça parte da história da nossa escola de futebol! Esses textos fornecem uma visão geral do
              compromisso da escola de futebol com o desenvolvimento dos alunos em diferentes níveis e posições no
              campo. Eles transmitem uma mensagem de apoio, excelência e oportunidade de crescimento dentro e fora do
              campo.
            </p>
            <img src={goleiro} alt="imagem" />
          </div>
        </Container>
      </GlobalContainer>
    </section>
  );
};

export default TurmasPage;
