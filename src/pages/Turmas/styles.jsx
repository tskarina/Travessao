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
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: ${(props) => props.customGap || "40px"};
`;

const ContainerText = styled.div`
  h1 {
    font-size: 40px;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin-left: auto;
    margin-top: 110px;
    margin-bottom: 25px;
    color: ${(props) => props.theme.colors.color1};
  }

  p {
    font-size: 18px;
    margin-bottom: 80px;
  }

  h2 {
    margin-top: 20px;
    text-align: center;
    font-size: 24px;
    letter-spacing: 0.7px;
    color: ${(props) => props.theme.colors.color8};
    margin-top: 45px;
    margin-bottom: 10px;
    text-align: center;
  }
`;

const Content = styled.div`
  background-color: ${(props) => props.theme.colors.color9};
  width: 70%;
  height: auto;
  padding: 30px 60px 30px 60px;
  margin: 20px 0px 100px 0px;
  border: 1px solid ${(props) => props.customBorder || props.theme.colors.color7};
  border-radius: 5px;
  text-align: start;
  position: relative;
  box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.1);

  h1 {
    margin-top: 30px;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.color1};
    font-size: 22px;
    text-align: center;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
  }

  th,
  td {
    padding: 10px;
    border-bottom: 1px solid ${(props) => props.theme.colors.color7};
    text-align: left;
    width: 25%;
  }

  th {
    background-color: ${(props) => props.theme.colors.color12};
    color: ${(props) => props.theme.colors.color8};
    font-weight: bold;
  }

  td {
    background-color: ${(props) => props.theme.colors.color11};
    color: ${(props) => props.theme.colors.color1};
    font-size: 16px;
  }
`;

const ButtonTable = styled.button`
  background-color: ${(props) => props.theme.colors.color4};
  border: none;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.color3};
  width: 140px;
  height: 45px;
  margin-top: 30px;
  margin-left: 802px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
    background-color: #cc5d02;
  }

  &:active {
    transform: translateY(2px);
  }
`;

const Footer = styled.div`
  background-color: ${(props) => props.theme.colors.color11};
  width: 97.9%;
  height: 250px;
  padding: 20px;
  margin-top: 20px;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
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
    transition: color 0.3s ease;
    cursor: pointer;
  }

  a:hover {
    color: ${(props) => props.theme.colors.color4};
  }
`;

const SocialMedia = styled.div`
  display: flex;
  margin-top: 10px;

  div {
    margin: 0 2px;
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
  ContainerText,
  Content,
  ButtonTable,
  Footer,
  FooterContainer,
  FooterContent,
  SocialMedia,
};
