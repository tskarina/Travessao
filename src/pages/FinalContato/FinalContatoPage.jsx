import styles from "./styles";

import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const { GlobalContainer, Initial, FormContainer, Button } = styles;

const FinalContato = () => {
  return (
    <GlobalContainer>
      <FormContainer>
        <Initial>
          <h1>Mensagem enviada com sucesso! </h1>
          <p>
            {" "}
            Sua mensagem está registrada em nosso sistema. Em até 48 horas nossa equipe entrará em contato por e-mail
            para mais informações.
          </p>
        </Initial>
        <Link to="/">
          <Button>Ok, entendi</Button>
        </Link>
      </FormContainer>
    </GlobalContainer>
  );
};

export default FinalContato;
