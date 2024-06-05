import React from "react";
import styles from "./styles";
import logoImage from "../../images/logo.png";
import image1 from "../../images/ratinhobg.png";
import image2 from "../../images/campo.jpg";
import image3 from "../../images/trabalho.png";
import taticoCard from "../../images/tatico.png";
import tecnicoCard from "../../images/tecnico.png";
import fisicoCard from "../../images/fisico.png";
import posicaoCard from "../../images/posicao.png";
import habilidadeCard from "../../images/habilidade.png";
import equipeCard from "../../images/equipe.png";
import infoImg from "../../images/infancia.png";
import infoImg2 from "../../images/todos.png";
import infoImg3 from "../../images/marta.png";
import imgGallery from "../../images/iniciante.jpg";
import imgGallery2 from "../../images/intermediario.jpg";
import imgGallery3 from "../../images/goleiro.jpg";
import icon from "../../images/treinamento.png";
import icon2 from "../../images/socializacao.png";
import icon3 from "../../images/evoluir.png";
import icon4 from "../../images/condicionamento.png";
import icon5 from "../../images/agenda.png";
import icon6 from "../../images/evento.png";
import icon7 from "../../images/metodologia.png";
import icon8 from "../../images/localizacao.png";
import icon9 from "../../images/visto.png";
import fav from "../../images/fav.png";

import { Link } from "react-router-dom";

const {
  GlobalContainer,
  Header,
  HeaderElements,
  LogoImage,
  Button,
  Title,
  Subtitle,
  Text,
  Image1,
  Image2,
  Image3,
  CardContainer,
  Card,
  CardTitle,
  ImageCard,
  Container,
  Content,
  InfoImage,
  Gallery,
  ButtonContent,
  TitleContent,
  TextInformation,
  ContentList,
  ContentValues,
  ButtonValues,
  ListContainer,
  SubTitleContent,
  TextContent,
  Favorite,
} = styles;

const HomePage = () => {
  return (
    <section>
      <GlobalContainer>
        <div>
          <Title>
            Travessão <br />
            Escola de <span>Futebol!</span>
          </Title>
          <Subtitle>É a sua vez de ser um craque!</Subtitle>
          <Image1 src={image1} alt="Imagem Inicial" />
        </div>

        <CardContainer>
          <Card>
            <ImageCard src={tecnicoCard} alt="Logo" />
            <CardTitle color="#b258fc">Treinamento Técnico</CardTitle>
            <p>Aprimoramento de dribles, passes, controle de bola e finalização.</p>
          </Card>
          <Card>
            <ImageCard src={taticoCard} alt="imagem" />
            <CardTitle color="#65dcfa">Treinamento Tático</CardTitle>
            <p>Ensino de posicionamento, movimentação, jogadas ensaiadas e estratégias de jogo.</p>
          </Card>
          <Card>
            <ImageCard src={fisicoCard} alt="imagem" />
            <CardTitle color="#fce562">Condicionamento Físico</CardTitle>
            <p>Desenvolvimento de resistência, força, agilidade e flexibilidade.</p>
          </Card>
        </CardContainer>

        <CardContainer>
          <Card>
            <ImageCard src={posicaoCard} alt="imagem" />
            <CardTitle color="#ff5a45">Treinos Específicos por Posição</CardTitle>
            <p>Foco nas habilidades dos goleiros, defensores, meio-campistas e atacantes.</p>
          </Card>
          <Card>
            <ImageCard src={habilidadeCard} alt="imagem" />
            <CardTitle color="#79ffdd">Treinamento de Habilidades Individuais</CardTitle>
            <p>
              Desenvolvimento de habilidades específicas de cada jogador, como controle de bola e precisão de passe.
            </p>
          </Card>
          <Card>
            <ImageCard src={equipeCard} alt="imagem" />
            <CardTitle color="#75ff80">Treinamento de Jogo em Equipe</CardTitle>
            <p>Ensino de conceitos de jogo em equipe, como movimentação fora da bola e estratégias de marcação.</p>
          </Card>
        </CardContainer>

        <div>
          <Image2 src={image2} alt="img" />
          <Title customFontSize="65px" customMarginTop="22vh" customMarginLeft="90vh">
            O campo de treinamento para futuros craques do
            <span> futebol.</span>
          </Title>
          <Subtitle customMarginLeft="90vh">
            Torne-se um especialista em dribles, passes, defesa, ataque e muito mais!
          </Subtitle>
        </div>

        <div>
          <Title customFontSize="40px" customMarginTop="22vh" customTextAlign="center">
            Conheça o Travessão
          </Title>
          <Subtitle customTextAlign="center">Entenda nosso trabalho e venha fazer parte da Escola!</Subtitle>
        </div>

        <Container>
          <Content>
            <InfoImage src={infoImg} alt="imagem" />
            <TitleContent>Infância e adolescência</TitleContent>
            <TextInformation>
              Nossa escola de futebol aceita crianças e adolescentes dos 4 aos 17 anos. Oferecemos treinamentos
              especializados, desenvolvimento de habilidades e uma experiência divertida e educativa para jovens de
              todas as idades.
            </TextInformation>
          </Content>

          <Content>
            <InfoImage src={infoImg2} alt="imagem" />
            <TitleContent>Para todos</TitleContent>
            <TextInformation>
              A escola é um ambiente inclusivo e acolhedor para meninos e meninas dos 4 aos 17 anos. Aqui, todos são
              bem-vindos a participar de treinamentos dinâmicos, desenvolver habilidades e se divertir enquanto aprendem
              o esporte mais amado do mundo.
            </TextInformation>
          </Content>

          <Content>
            <InfoImage src={infoImg3} alt="imagem" />
            <TitleContent>Do zero até a “Marta”</TitleContent>
            <TextInformation>
              Se você não sabe jogar, não tem problema. O objetivo é que todas consigam aprender. Quem não sabe,
              aprenderá em nossas aulas, acompanhando o ritmo da turma iniciante. Quem já sabe, pode melhorar ainda mais
              nas turmas intermediárias.
            </TextInformation>
          </Content>
        </Container>

        <div>
          <Title customFontSize="40px" customMarginTop="20px" customTextAlign="center">
            Treinos de Futebol
          </Title>
          <Subtitle customTextAlign="center" customMarginTop="15px" customMarginBottom="10px">
            Escolha uma turma que atenda suas necessidades!
          </Subtitle>
        </div>

        <Container customGap="0px">
          <Content customBackground="none" customWidth="auto" customBorder="none">
            <Gallery src={imgGallery} alt="imagem" />
            <Title customFontSize="35px" customMarginTop="15px" customMarginBottom="12px">
              Iniciante
            </Title>
            <Text customMarginBottom="15px">Treino ideal para quem nunca jogou</Text>
            <Link to="/turmas">
              <ButtonContent>Saiba Mais</ButtonContent>
            </Link>
          </Content>

          <Content customBackground="none" customWidth="auto" customBorder="none">
            <Gallery src={imgGallery2} alt="imagem" />
            <Title customFontSize="35px" customMarginTop="15px" customMarginBottom="12px">
              Intermediário
            </Title>
            <Text customMarginBottom="15px"> Se você já sabe jogar e deseja melhorar</Text>
            <Link to="/turmas">
              <ButtonContent>Saiba Mais</ButtonContent>
            </Link>
          </Content>

          <Content customBackground="none" customWidth="auto" customBorder="none">
            <Gallery src={imgGallery3} alt="imagem" />
            <Title customFontSize="35px" customMarginTop="15px" customMarginBottom="12px">
              Goleiros
            </Title>
            <Text customMarginBottom="15px">Academia de goleiros para todos os níveis</Text>
            <Link to="/turmas">
              <ButtonContent>Saiba Mais</ButtonContent>
            </Link>
          </Content>
        </Container>

        <ContentList>
          <Image3 src={image3} />

          <Title customFontSize="40px" customMarginTop="30px" customMarginBottom="40px" customTextAlign="center">
            Nosso trabalho
          </Title>

          <ListContainer>
            <li>
              <img src={icon} alt="" />
              <p>
                <span>Treinamento </span> com obrigações
              </p>
            </li>
            <li>
              <img src={icon2} alt="" />
              <p>
                {" "}
                <span>Socialização </span> através do futebol
              </p>
            </li>
            <li>
              <img src={icon3} alt="" />
              <p>
                <span>Evolua </span> no seu ritmo
              </p>
            </li>
            <li>
              <img src={icon4} alt="" />
              <p>
                {" "}
                Melhora do <span>condicionamento físico</span>
              </p>
            </li>
            <li>
              <img src={icon5} alt="" />
              <p>
                <span>Agenda</span> interna de <span> campeonatos</span>
              </p>
            </li>
            <li>
              <img src={icon6} alt="" />
              <p>
                <span>Eventos</span> e promoções exclusivas para <span>atletas</span>
              </p>
            </li>
            <li>
              <img src={icon7} alt="" />
              <p>
                <span>Metodologia</span> própria de aulas focadas em <br /> melhorar os pontos fracos e fortes dos
                atletas
              </p>
            </li>
            <li>
              <img src={icon8} alt="" />
              <p>
                <span>2 locais</span> em São Paulo/SP
              </p>
            </li>
          </ListContainer>
        </ContentList>

        <div>
          <Title customFontSize="40px" customMarginTop="130px" customMarginBottom="50px" customTextAlign="center">
            Mensalidade
          </Title>
        </div>

        <Container>
          <ContentValues>
            <TitleContent
              customColor="#9f4bff"
              customTextAlign="center"
              customMarginTop="50px"
              customMarginBottom="10px"
            >
              Turma Chute Inicial
            </TitleContent>

            <SubTitleContent>Aulas para crianças menores</SubTitleContent>
            <TextContent>R$ 130,00/mês</TextContent>
            <ul>
              <li>
                <img src={icon9} alt="" />
                <p>Aula um dia por semana</p>
              </li>
              <li>
                <img src={icon9} alt="" />
                <p> Dos 4 aos 7</p>
              </li>
              <li>
                <img src={icon9} alt="" />
                <p>1 hora aula</p>
              </li>
              <li>
                <img src={icon9} alt="" />
                <p>Treinos para coordenação motora</p>
              </li>
              <li>
                <img src={icon9} alt="" />
                <p>Treino para controle de bola</p>
              </li>
              <li>
                <img src={icon9} alt="" />
                <p> Jogos entre as turmas</p>
              </li>
            </ul>
            <Link to="/matricula">
              <ButtonValues>Matricule-se</ButtonValues>
            </Link>
          </ContentValues>

          <ContentValues>
            <TitleContent
              customColor="#9f4bff"
              customTextAlign="center"
              customMarginTop="50px"
              customMarginBottom="10px"
            >
              Turma Apitão
            </TitleContent>
            <SubTitleContent>Aulas de futebol semanal</SubTitleContent>
            <TextContent>R$ 170,00/mês</TextContent>
            <ul>
              <li>
                <img src={icon9} alt="" />
                <p>Aula um dia por semana</p>
              </li>
              <li>
                <img src={icon9} alt="" /> <p>1 hora aula</p>
              </li>
              <li>
                <img src={icon9} alt="" />
                <p>Para todas as idades</p>
              </li>
              <li>
                <img src={icon9} alt="" />
                <p>Treinos táticos, técnicos e físicos</p>
              </li>
              <li>
                <img src={icon9} alt="" />
                <p>Jogo garantido em todo treino</p>
              </li>
              <li>
                <img src={icon9} alt="" />
                <p>Campeonatos internos</p>
              </li>
              <li>
                <img src={icon9} alt="" />
                <p>Jogo livre aos sábados </p>
              </li>
            </ul>
            <Link to="/matricula">
              <ButtonValues>Matricule-se</ButtonValues>
            </Link>
          </ContentValues>

          <ContentValues>
            <div>
              <Favorite src={fav} alt="imagem" />
            </div>
            <TitleContent
              customColor="#9f4bff"
              customTextAlign="center"
              customMarginTop="50px"
              customMarginBottom="10px"
            >
              Turma Passa a Bola
            </TitleContent>
            <SubTitleContent>Aulas de futebol semanal</SubTitleContent>
            <TextContent>R$ 220,00/mês</TextContent>
            <ul>
              <li>
                <img src={icon9} alt="" />
                <p>Aula dois dias por semana</p>
              </li>
              <li>
                <img src={icon9} alt="" />
                <p>2 horas aula</p>
              </li>
              <li>
                <img src={icon9} alt="" />
                <p>Para todas as idades</p>
              </li>
              <li>
                <img src={icon9} alt="" />
                <p>Treinos táticos, técnicos e físicos</p>
              </li>
              <li>
                <img src={icon9} alt="" />
                <p>Jogo garantido em todo treino</p>
              </li>
              <li>
                <img src={icon9} alt="" />
                <p>Campeonatos externos e internos</p>
              </li>
              <li>
                <img src={icon9} alt="" />
                <p>Jogo livre aos sábados </p>
              </li>
            </ul>
            <Link to="/matricula">
              <ButtonValues>Matricule-se</ButtonValues>
            </Link>
          </ContentValues>
        </Container>
      </GlobalContainer>
    </section>
  );
};

export default HomePage;
