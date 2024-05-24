import React, { useState } from "react";
import styles from "./styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const {
  FormContainer,
  FormData,
  FormField,
  TurmasContainer,
  TurmaOption,
  FinanceContainer,
  PaymentOption,
  FormInput,
  ScheduleContainer,
  DatePickerWrapper,
  DetailsContainer,
  ConfirmButton,
  SubmitButton,
} = styles;

const Form = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para lidar com a submissão do formulário
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const handleConfirm = () => {
    // Lógica para confirmar o agendamento
    console.log("Agendamento confirmado para:", selectedDate);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormData>
        <h1>Dados do Aluno</h1>
        <FormField>
          <p>Nome</p>
          <FormInput type="text" placeholder="Nome" />
        </FormField>
        <FormField>
          <p>Sobrenome</p>
          <FormInput type="text" placeholder="Sobrenome" />
        </FormField>
        <FormField>
          <p>RG</p>
          <FormInput type="text" placeholder="RG" />
        </FormField>
        <FormField>
          <p>E-mail</p>
          <FormInput type="email" placeholder="Email" />
        </FormField>
        <FormField>
          <p>Telefone</p>
          <FormInput type="text" placeholder="Telefone" />
        </FormField>
        <FormField>
          <p>Endereço</p>
          <FormInput type="text" placeholder="Endereço" />
        </FormField>
        <FormField>
          <p>Bairro</p>
          <FormInput type="text" placeholder="Bairro" />
        </FormField>
        <FormField>
          <p>Cidade</p>
          <FormInput type="text" placeholder="Cidade" />
        </FormField>
        <FormField>
          <p>Estado</p>
          <FormInput type="text" placeholder="Estado" />
        </FormField>
        <FormField>
          <p>CEP</p>
          <FormInput type="text" placeholder="CEP" />
        </FormField>
      </FormData>

      <FormData>
        <h1>Dados do Responsável (Contratante)</h1>
        <FormField>
          <p>Nome</p>
          <FormInput type="text" placeholder="Nome" />
        </FormField>
        <FormField>
          <p>Sobrenome</p>
          <FormInput type="text" placeholder="Sobrenome" />
        </FormField>
        <FormField>
          <p>RG</p>
          <FormInput type="text" placeholder="RG" />
        </FormField>
        <FormField>
          <p>CPF</p>
          <FormInput type="text" placeholder="CPF" />
        </FormField>
        <FormField>
          <p>E-mail</p>
          <FormInput type="email" placeholder="Email" />
        </FormField>
        <FormField>
          <p>Telefone</p>
          <FormInput type="text" placeholder="Telefone" />
        </FormField>
        <FormField>
          <p>Endereço</p>
          <FormInput type="text" placeholder="Endereço" />
        </FormField>
        <FormField>
          <p>Bairro</p>
          <FormInput type="text" placeholder="Bairro" />
        </FormField>
        <FormField>
          <p>Cidade</p>
          <FormInput type="text" placeholder="Cidade" />
        </FormField>
        <FormField>
          <p>Estado</p>
          <FormInput type="text" placeholder="Estado" />
        </FormField>
        <FormField>
          <p>CEP</p>
          <FormInput type="text" placeholder="CEP" />
        </FormField>
      </FormData>

      <TurmasContainer>
        <h1>Selecione a Turma</h1>
        <TurmaOption>
          <input type="radio" name="turma" value="Chute Inicial" />
          <div>
            <strong>Turma Chute Inicial</strong>
            <span>Aulas para crianças menores (1 aula por semana)</span>
            <span>R$ 130,00/mês</span>
          </div>
        </TurmaOption>
        <TurmaOption>
          <input type="radio" name="turma" value="Apitão" />
          <div>
            <strong>Turma Apitão</strong>
            <span>Aulas de futebol semanal (1 aula por semana)</span>
            <span>R$ 170,00/mês</span>
          </div>
        </TurmaOption>
        <TurmaOption>
          <input type="radio" name="turma" value="Passa a Bola" />
          <div>
            <strong>Turma Passa a Bola</strong>
            <span>Aulas de futebol semanal (2 aulas por semana)</span>
            <span>R$ 220,00/mês</span>
          </div>
        </TurmaOption>
      </TurmasContainer>

      <FinanceContainer>
        <h1>Forma de Pagamento</h1>
        <PaymentOption>
          <input type="radio" name="paymentMethod" value="creditCard" onChange={handlePaymentChange} />
          <div>
            <strong>Cartão de Crédito</strong>
          </div>
        </PaymentOption>

        <PaymentOption>
          <input type="radio" name="paymentMethod" value="boleto" onChange={handlePaymentChange} />
          <div>
            <strong>Boleto</strong>
          </div>
        </PaymentOption>

        {paymentMethod === "boleto" && (
          <FormField>
            <p>Dia de Cobrança</p>
            <FormInput type="date" placeholder="Escolha o dia" />
          </FormField>
        )}
      </FinanceContainer>

      <ScheduleContainer>
        <div>
          <h1>Agendamento para Assinatura de Documentos</h1>
          <FormField>
            <DatePickerWrapper>
              <p>
                Por favor, selecione uma data disponível para agendar a assinatura de documentos. Lembre-se de trazer
                consigo todos os documentos necessários para o processo de matrícula.
              </p>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                filterDate={isWeekday}
                inline
              />
            </DatePickerWrapper>
          </FormField>
        </div>
      </ScheduleContainer>

      <p>
        Este formulário é reservado para a efetivação da pré-matrícula do aluno. A partir dos dados preenchidos nele,
        será confeccionado o contrato, o boleto e o requerimento. Não esqueça de preencher o agendamento para a
        assinatura da documentação e pagamento da primeira parcela do ano letivo de 2021. Lembrando que os primeiros a
        comparecerem terão prioridade na escolha de turno (manhã ou tarde).
      </p>

      <FormField>
        <label>
          <input type="checkbox" checked={termsAccepted} onChange={() => setTermsAccepted(!termsAccepted)} />
          Eu confirmo que todas as informações fornecidas são corretas e aceito os termos de compromisso.
        </label>
      </FormField>
      <SubmitButton type="submit" disabled={!termsAccepted}>
        Enviar
      </SubmitButton>
    </FormContainer>
  );
};

export default Form;
