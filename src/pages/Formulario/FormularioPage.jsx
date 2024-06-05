import React, { useEffect } from "react";
import styles from "./styles";
import Form from "../../components/Form/Form";
import { useNavigate } from "react-router-dom";

const { GlobalContainer } = styles;

const FormularioPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <GlobalContainer>
      <Form />
    </GlobalContainer>
  );
};

export default FormularioPage;
