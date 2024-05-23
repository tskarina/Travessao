import React from "react";
import styles from "./styles";
import logoImage from "../../images/logo.png";

import { Link } from "react-router-dom";

const { GlobalContainer, Header, LogoImage, HeaderElements, Button } = styles;

const HeaderComponent = () => {
  return (
    <GlobalContainer>
      <Header>
        <LogoImage src={logoImage} alt="Logo" />
        <HeaderElements>
          <Link to="/">Home</Link>
          <Link to="/aescola">A escola</Link>
          <Link to="/turmasehorarios">Turmas e horários</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/matricula">
            <Button>Matricule-se</Button>
          </Link>
        </HeaderElements>
      </Header>
    </GlobalContainer>
  );
};

export default HeaderComponent;
