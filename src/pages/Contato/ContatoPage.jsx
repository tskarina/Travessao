import React from "react";
import styles from "./styles";
import telefone from "../../images/phone.png";
import contato from "../../images/telefone.png";
import email from "../../images/email.png";
import { Link } from "react-router-dom";

const {
  GlobalContainer,
  Container,
  ContactContainer,
  ImageParagraphContainer,
  InputContainer,
  InputContent,
  ButtonContato,
  Image,
} = styles;

const ContatoPage = () => {
  return (
    <section>
      <GlobalContainer>
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
            <Link to="/mensagemenviada">
              <ButtonContato>Enviar</ButtonContato>
            </Link>
          </InputContainer>
        </Container>
      </GlobalContainer>
    </section>
  );
};

export default ContatoPage;
