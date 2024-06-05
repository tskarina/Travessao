import styled from "styled-components";

const GlobalContainer = styled.div`
  margin-left: 30vh;
  margin-right: 30vh;
`;

const Header = styled.div`
  background-color: ${(props) => props.theme.colors.color2};
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const HeaderElements = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
  gap: 18px;
  margin-left: 73vh;

  a {
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    margin-top: 40px;
    color: ${(props) => props.theme.colors.color1};
  }

  a:hover {
    color: ${(props) => props.theme.colors.color4}; /* Altera a cor ao passar o mouse */
  }

  a:active {
    transform: translateY(2px); /* Altera a posição ao clicar */
  }
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.color4};
  border: 2px solid transparent; /* Definir uma borda transparente */
  border-radius: 8px;
  color: ${(props) => props.theme.colors.color3};
  width: 160px;
  height: 45px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff; /* Mudar a cor do texto para branco */
    background-color: #070116; /* Mudar a cor de fundo para #070116 */
    border-color: #ff9500; /* Mudar a cor da borda para #ff9500 */
  }

  &:active {
    transform: translateY(2px);
  }
`;

const LogoImage = styled.img`
  width: 170px;
  height: auto;
  margin-left: -40px;
  margin-top: 40px;
`;

const Title = styled.h1`
  font-size: ${(props) => props.customFontSize || "75px"};
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: ${(props) => props.customTextAlign || "left"};
  margin-left: ${(props) => props.customMarginLeft || "auto"};
  margin-top: ${(props) => props.customMarginTop || "110px"};
  margin-bottom: ${(props) => props.customMarginBottom || "20px"};
  color: ${(props) => props.theme.colors.color1};
  letter-spacing: 0.5px;
  span {
    color: ${(props) => props.theme.colors.color4};
  }
`;

const Subtitle = styled.h2`
  font-size: 18px;
  letter-spacing: 0.7px;
  color: ${(props) => props.theme.colors.color8};
  margin-top: ${(props) => props.customMarginTop || "15px"};
  margin-bottom: ${(props) => props.customMarginBottom || "40px"};
  margin-left: ${(props) => props.customMarginLeft || "auto"};
  text-align: ${(props) => props.customTextAlign || "left"};
`;

const Text = styled.p`
  margin-top: ${(props) => props.customMarginTop || "5px"};
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.color1};
  margin-bottom: ${(props) => props.customMarginBottom || "10px"};
  text-align: ${(props) => props.customTextAlign || "left"};
`;

const Image1 = styled.img`
  width: 90vh; /* Defina o tamanho da imagem conforme necessário */
  height: auto; /* Manter a proporção da imagem */
  position: absolute;
  right: 20vh;
  top: 22vh;
  opacity: 0.6;
  z-index: -1;
  filter: grayscale(50%);
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  background-color: ${(props) => props.theme.colors.color6};
  width: 200px;
  height: 200px;
  padding: 20px;
  margin: 10px 10px 0px 0px;
  border: 1px solid ${(props) => props.theme.colors.color7}; /* Usando a cor do theme para a borda */
  border-radius: 5px;
  text-align: start;
  position: relative; /* Para permitir que o ::before tenha posição absoluta relativa ao card */
  overflow: hidden; /* Esconde o overflow causado pelo gradiente */
  transition: transform 0.3s ease; /* Adicionando transição suave ao transform */

  p {
    color: ${(props) => props.theme.colors.color1};
    font-size: 14px;
    margin-bottom: 10px;
    letter-spacing: 0.8px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, transparent, rgba(109, 109, 109, 0.425));
    transition: left 1s ease;
    z-index: 1;
    pointer-events: none;
    opacity: 0;
  }

  &:hover::before {
    left: 100%;
    opacity: 1;
  }

  &:hover {
    transform: scale(1.05);
    border: 1px solid ${(props) => props.theme.colors.color7}; /* Altera a cor da borda ao passar o mouse */
    box-shadow: inset 0 0 5px rgba(77, 2, 138, 0.5); /* Aumenta o brilho ao passar o mouse */
  }
`;

const CardTitle = styled.h3`
  font-size: 14px;
  text-transform: uppercase;
  color: ${(props) => props.color || props.theme.colors.color4};
`;

const ImageCard = styled.img`
  width: 50px;
  height: 50px;
`;

const Image2 = styled.img`
  width: 81.5vh;
  height: 53vh;
  margin-top: 50px;
  position: absolute;
  top: 120vh;
  opacity: 0.5;
  z-index: -1;
  filter: grayscale(50%);
`;

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: ${(props) => props.customGap || "40px"};
`;

const Content = styled.div`
  background-color: ${(props) => props.customBackground || props.theme.colors.color6};
  width: ${(props) => props.customWidth || "381px"};
  height: 400px;
  padding: 20px;
  margin: 20px 0px 100px 0px;
  border: 1px solid ${(props) => props.customBorder || props.theme.colors.color7};
  border-radius: 5px;
  text-align: start;
  position: relative;
`;

const TitleContent = styled.h3`
  margin-top: ${(props) => props.customMarginTop || "10px"};
  margin-bottom: ${(props) => props.customMarginBottom || "10px"};
  font-size: 25px;
  color: ${(props) => props.customColor || props.theme.colors.color4};
  text-align: ${(props) => props.customTextAlign || "left"}; //;
`;

const TextInformation = styled.p`
  margin-top: 5px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.color1};
  margin-bottom: 10px;
  text-align: start;
`;

const InfoImage = styled.img`
  width: 110px;
`;

const Gallery = styled.img`
  width: 420px;
  height: 100%;
  margin-top: ${(props) => props.customMarginTop || "0px"};
  opacity: 0.7;
`;

const ButtonContent = styled.button`
  background-color: ${(props) => props.theme.colors.color4};
  border: none;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.color3};
  width: 120px;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff; /* Mudar a cor do texto para branco */
    background-color: #cc5d02;
  }

  &:active {
    transform: translateY(2px);
  }
`;

const ContentList = styled.div`
  background-color: ${(props) => props.theme.colors.color9};
  width: 35%;
  height: 600px;
  padding: 50px;
  margin: 190px auto 100px 170px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.1); /* Adicionando sombra */
`;

const Image3 = styled.img`
  width: 700px;
  height: auto;
  position: absolute;
  margin-top: -50px;
  right: 15vh;
  opacity: 0.6;
  z-index: -1;
  filter: grayscale(50%);
`;

const ListContainer = styled.ul`
  li {
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-left: 35px;
  }

  p {
    font-size: 16px;
    margin-bottom: 15px;
    margin-left: 5px;
  }

  img {
    width: 15px;
    margin-right: 5px;
    position: relative;
    bottom: 1px;
  }

  span {
    color: ${(props) => props.theme.colors.color4};
    font-weight: bold;
  }
`;

const ContentValues = styled.div`
  background-color: ${(props) => props.theme.colors.color9};
  width: 100%;
  height: 650px;
  padding: 20px;
  margin: 20px 0px 100px 0px;
  border: 1px solid ${(props) => props.customBorder || props.theme.colors.color7};
  border-radius: 5px;
  text-align: start;
  position: relative;
  box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.1);

  p {
    color: ${(props) => props.theme.colors.color1};
    font-weight: bold;
    text-align: ${(props) => props.customTextAlign || "left"};

    margin-left: 20px;
  }

  li {
    display: flex;
    align-items: center;
    font-size: 15px;
    transition: color 0.3s;
    margin-left: 40px;
    margin-top: 12px;
  }

  img {
    width: 15px;
    margin-right: 0px;
    position: relative;
    top: 3px;
  }
`;

const Favorite = styled.img`
  width: 80px !important;
  height: auto !important;
  position: absolute !important;
  left: 340px;
  top: 10px;
`;

const ButtonValues = styled.button`
  background-color: ${(props) => props.theme.colors.color10};
  border: none;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.color1};
  width: 180px;
  height: 40px;
  margin-left: 110px;
  margin-top: 30px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    color: #000000; /* Mudar a cor do texto para branco */
    background-color: #6d00ac;
  }

  &:active {
    transform: translateY(2px);
  }
`;
const SubTitleContent = styled.div`
  color: ${(props) => props.theme.colors.color1};
  font-weight: bold;
  text-align: center;
  margin-top: 0px;
`;

const TextContent = styled.div`
  color: #9f4bff;
  font-weight: bold;
  font-size: 22px;
  text-align: center;
  margin-top: 20px;
`;

const Footer = styled.div`
  background-color: ${(props) => props.theme.colors.color11};
  width: 97.9%;
  height: 250px;
  padding: 20px;
  margin-top: 50px;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center; /* Alinha o conteúdo no centro horizontal */
  margin-top: 30px;
  margin-left: 30vh;
  margin-right: 23vh;
  gap: 120px;
`;

const FooterContent = styled.div`
  h1 {
    margin-bottom: 20px;
  }
  li {
    display: flex;

    font-size: 14px;
    list-style: none;
    margin-top: 14px;
  }

  p {
    margin-top: 14px;
    font-size: 14px;
  }

  a {
    color: ${(props) => props.theme.colors.color1};
    text-decoration: none;
    transition: color 0.3s ease; /* Adiciona transição para a cor */
    cursor: pointer; /* Muda o cursor para indicar que é clicável */
  }

  a:hover {
    color: ${(props) => props.theme.colors.color4}; /* Altera a cor ao passar o mouse */
  }
`;

const SocialMedia = styled.div`
  display: flex;
  margin-top: 10px;

  div {
    margin: 0 2px; /* Ajuste a margem para reduzir o espaço entre as imagens */
  }

  img {
    width: 35px;
    height: auto;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  img:hover {
    transform: scale(1.1);
  }
`;

export default {
  GlobalContainer,
  Container,
  Header,
  HeaderElements,
  LogoImage,
  Image1,
  CardContainer,
  Card,
  CardTitle,
  ImageCard,
  Image2,
  Title,
  Subtitle,
  Text,
  InfoImage,
  Content,
  TitleContent,
  TextInformation,
  Gallery,
  ContentList,
  Image3,
  ListContainer,
  Button,
  ButtonContent,
  ContentValues,
  ButtonValues,
  SubTitleContent,
  TextContent,
  Footer,
  FooterContainer,
  FooterContent,
  SocialMedia,
  Favorite,
};
