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

export default {
  GlobalContainer,
  Header,
  LogoImage,
  HeaderElements,
  Button,
};
