import React from "react";
import styles from "./styles";
import logoImage from "../../images/logo.png";
import fb from "../../images/facebook.png";
import ig from "../../images/instagram.png";
import tt from "../../images/twitter.png";
import yt from "../../images/youtube.png";
import telefone from "../../images/phone.png";
import contato from "../../images/telefone.png";
import email from "../../images/email.png";
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
  Button,
  Container,
  ContactContainer,
  ImageParagraphContainer,
  InputContainer,
  InputContent,
  ButtonContato,
  Image,
  Footer,
  FooterContainer,
  FooterContent,
  SocialMedia,
} = styles;

const ContatoPage = () => {
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
          <ContactContainer>
            <h1>Entre em contato conosco</h1>
            <h2>
              Deseja tirar dúvidas ou fazer parcerias? <br /> Entre em contato conosco!
            </h2>

            <ImageParagraphContainer>
              <img src={telefone} alt="Imagem 1" />
              <p>(11) 9999-99999</p>
            </ImageParagraphContainer>

            <ImageParagraphContainer>
              <img src={telefone} alt="Imagem 1" />
              <p>(11) 9999-99999</p>
            </ImageParagraphContainer>

            <ImageParagraphContainer>
              <img src={email} alt="Imagem 2" />
              <p>travessao@gmail.com</p>
            </ImageParagraphContainer>
            <Image src={contato} alt="imagem" />
          </ContactContainer>

          <InputContainer>
            <InputContent>
              <h3 className="label">Nome</h3>
              <input label="Nome" type="text" placeholder="Digite seu nome" />

              <h3>Email</h3>
              <input label="Email" type="text" placeholder="Digite seu email" />

              <h3>Mensagem</h3>
              <textarea label="Mensagem" type="text" placeholder="Digite sua mensagem" />
            </InputContent>
            <ButtonContato>Enviar</ButtonContato>
          </InputContainer>
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

export default ContatoPage;
