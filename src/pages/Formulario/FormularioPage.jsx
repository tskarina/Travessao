import React from "react";
import styles from "./styles";
import Form from "../../components/Form/Form";

const { GlobalContainer } = styles;

const FormularioPage = () => {
  return (
    <GlobalContainer>
      <div>
        <h1>Página de Formulário</h1>
        <Form />
      </div>
    </GlobalContainer>
  );
};

export default FormularioPage;
