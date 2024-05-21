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
  margin-top: 40px;
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

const Container = styled.div`
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    margin-top: 0px;
  }

  p {
    margin-top: 40px;
  }

  img {
    width: 700px;
    height: auto;
    margin-top: 40px;
    border-radius: 12px;
  }
`;

const ContainerFundacao = styled.div`
  div {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 60px;
    margin-top: 0px;
  }

  p {
    margin-top: 40px;
  }

  img {
    width: 500px;
    height: auto;
    margin-top: 40px;
  }
`;

const ProfessorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContainerProfessores = styled.div`
  div {
    display: flex;
    gap: 70px;
    margin-top: 40px;
  }

  img {
    width: 300px;
    height: auto;
  }

  h2 {
    margin-top: -40px;
    color: ${(props) => props.theme.colors.color4};
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 70px;
  margin-top: 10px;
`;

const Carousel = styled.div`
  cursor: grab;
  overflow: hidden;
`;

const Inner = styled.div`
  display: flex;

  .item {
    min-height: 200px;
    min-width: 400px;
    padding: 14px;
  }

  .item img {
    width: 100%;
    height: 90%;
    border-radius: 12px;
    pointer-events: none;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  margin-top: ${(props) => props.customMarginTop || "110px"};
  margin-bottom: ${(props) => props.customMarginBottom || "10px"};
  color: ${(props) => props.theme.colors.color1};
  letter-spacing: 0.5px;
  span {
    color: ${(props) => props.theme.colors.color4};
  }
  border-bottom: 2px solid ${(props) => props.theme.colors.color4};
`;

const Subtitle = styled.h2`
  font-size: 18px;
  letter-spacing: 0.7px;
  color: ${(props) => props.theme.colors.color8};
  margin-top: 20px;
  text-align: left;
`;

const Footer = styled.div`
  background-color: ${(props) => props.theme.colors.color11};
  width: 97.9%;
  height: 250px;
  padding: 20px;
  margin-top: 40px;
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
  Header,
  HeaderElements,
  Button,
  LogoImage,
  Container,
  ContainerFundacao,
  ContainerProfessores,
  ProfessorContainer,
  Row,
  Carousel,
  Inner,
  Title,
  Subtitle,
  Footer,
  FooterContainer,
  FooterContent,
  SocialMedia,
};
