import React from "react";
import styles from "./styles";
import logoImage from "../../images/logo.png";
import fb from "../../images/facebook.png";
import ig from "../../images/instagram.png";
import tt from "../../images/twitter.png";
import yt from "../../images/youtube.png";

import { Link } from "react-router-dom";

const socialMedia = [
  { name: "Facebook", image: fb, link: "https://facebook.com" },
  { name: "Instagram", image: ig, link: "https://instagram.com" },
  { name: "Twitter", image: tt, link: "https://twitter.com" },
  { name: "YouTube", image: yt, link: "https://youtube.com" },
];

const {
  GlobalContainer,
  Header,
  LogoImage,
  HeaderElements,
  ContainerText,
  Button,
  Container,
  Content,
  ButtonTable,
  Footer,
  FooterContainer,
  FooterContent,
  SocialMedia,
} = styles;

const TurmasPage = () => {
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

        <ContainerText>
          <h1>Turmas e Horários</h1>
          <p>
            Abaixo temos a tabela de dias e horários disponíveis para cada turma. Lembrando que aos sábados todas as
            turmas possuem um jogo livre.
          </p>
          <h2>Horários e Dias disponíveis para cada turma </h2>
        </ContainerText>

        <Container>
          <Content>
            <h1>Turma Chute Inicial - Escolha um dia da semana e um horário</h1>
            <table>
              <thead>
                <tr>
                  <th>Dia</th>
                  <th>Horário - Manhã</th>
                  <th>Horário - Tarde</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Segunda-feira</td>
                  <td>9h às 10h | 10h30 as 11h30</td>
                  <td>13h às 14h | 14h às 15h</td>
                </tr>
                <tr>
                  <td>Quarta-feira</td>
                  <td>10h30 às 11h30 </td>
                  <td>15h30 às 16h30</td>
                </tr>
                <tr>
                  <td>Sábado</td>
                  <td>9h30 às 10h30 (jogo livre)</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>

            <h1>Turma Apitão - Escolha um dia da semana e um horário</h1>
            <table>
              <thead>
                <tr>
                  <th>Dia</th>
                  <th>Horário - Manhã</th>
                  <th>Horário - Tarde</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Terça-feira</td>
                  <td>8h00 às 9h00 | 9h30 às 8h30 | 10h00 às 11h00</td>
                  <td>13h00 às 14h00 | 15h00 às 16h00</td>
                </tr>
                <tr>
                  <td>Quinta-feira</td>
                  <td>7h30 às 8h30 | 10h30 às 11h30</td>
                  <td>15h30 às 16h30 | 17h00 às 18h00</td>
                </tr>
                <tr>
                  <td>Sexta-feira</td>
                  <td>10h30 às 11h30</td>
                  <td>13h30 às 14h30</td>
                </tr>
                <tr>
                  <td>Sábado</td>
                  <td>9h30 às 10h30 (jogo livre)</td>
                  <td>13h00 às 14h00 (jogo livre)</td>
                </tr>
              </tbody>
            </table>

            <h1>Turma Passa a Bola - Escolha dois dias da semana e um horário</h1>
            <table>
              <thead>
                <tr>
                  <th>Dia</th>
                  <th>Horário - Manhã</th>
                  <th>Horário - Tarde</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Segunda-feira</td>
                  <td>7h00 às 8h40 | 9h00 às 10h40</td>
                  <td>13h às 14h40 | 15h00 às 16h40</td>
                </tr>
                <tr>
                  <td>Terça-feira</td>
                  <td>7h30 às 9h10 | 9h30 às 11h10</td>
                  <td>15h00 às 16h40 | 17h00 às 18h40</td>
                </tr>
                <tr>
                  <td>Quarta-feira</td>
                  <td>8h30 às 10h10 | 9h10 às 10h40</td>
                  <td>14h00 às 15h40 | 16h00 às 17h40 </td>
                </tr>
                <tr>
                  <td>Quinta-feira</td>
                  <td>7h00 às 8h40 | 10h00 às 11h40 </td>
                  <td>15h30 às 16h30 | 17h às 18h40</td>
                </tr>
                <tr>
                  <td>Sexta-feira</td>
                  <td>8h00 às 9h40 | 10h00 às 11h40</td>
                  <td>15h00 às 16h40</td>
                </tr>
                <tr>
                  <td>Sábado</td>
                  <td>7h00 às 9h00 | 10h00 às 12h00 (jogo livre)</td>
                  <td>13h00 às 15h00 | 16h00 às (jogo livre)</td>
                </tr>
              </tbody>
            </table>
            <ButtonTable>Matricule-se</ButtonTable>
          </Content>
        </Container>
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

export default TurmasPage;
