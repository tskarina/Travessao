import { Link } from "react-router-dom";
import styles from "./styles";

import "react-datepicker/dist/react-datepicker.css";
const { GlobalContainer, Initial, FormContainer, Button } = styles;

const FinalPage = () => {
  return (
    <GlobalContainer>
      <FormContainer>
        <Initial>
          <h1>Requerimento enviado com sucesso! </h1>
          <p>
            {" "}
            O formulário preenchido encontra-se registrado em nosso sistema. Em até 48 horas nossa equipe entrará em
            contato por e-mail para mais informações a respeito da sua matrícula/rematrícula. Logo estaremos juntos
            nessa jornada!
          </p>
        </Initial>
        <Link to="/">
          <Button>Ok, entendi</Button>
        </Link>
      </FormContainer>
    </GlobalContainer>
  );
};

export default FinalPage;
