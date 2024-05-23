import React from "react";
import styles from "./styles";
import fb from "../../images/facebook.png";
import ig from "../../images/instagram.png";
import tt from "../../images/twitter.png";
import yt from "../../images/youtube.png";

const { FooterContainer, FooterContentContainer, FooterContent, SocialMedia } = styles;

const socialMedia = [
  { name: "Facebook", image: fb, link: "https://facebook.com" },
  { name: "Instagram", image: ig, link: "https://instagram.com" },
  { name: "Twitter", image: tt, link: "https://twitter.com" },
  { name: "YouTube", image: yt, link: "https://youtube.com" },
];

const FooterComponent = () => {
  return (
    <FooterContainer>
      <FooterContentContainer>
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
      </FooterContentContainer>
    </FooterContainer>
  );
};

export default FooterComponent;
