import React, { useState } from "react";
import styles from "./styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Link } from "react-router-dom";
const {
  GlobalContainer,
  Initial,
  FormContainer,
  CheckContainer,
  RadioBox,
  FormData,
  FormField,
  FormTrueFalse,
  FormAddress,
  TurmasContainer,
  TurmaOption,
  FinanceContainer,
  PaymentOption,
  FormInput,
  ScheduleContainer,
  FormSchedule,
  DatePickerWrapper,
  DetailsContainer,
  Documents,
  SubmitButton,
} = styles;

const Form = () => {
  const [selectedMatricula, setSelectedMatricula] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [useSameAddress, setUseSameAddress] = useState(true);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    const errors = {};

    setFormErrors(errors); // Atualiza os erro

    if (Object.keys(errors).length > 0) {
      return;
    }

    console.log("Formulário enviado com sucesso");
  };

  // Lógica para manipular a mudança de tipo de matrícula
  const handleMatriculaChange = (e) => {
    setSelectedMatricula(e.target.value);
    setFormErrors((prevErrors) => ({ ...prevErrors, matricula: "" }));
  };

  // Lógica para manipular a mudança de método de pagamento
  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
    setFormErrors((prevErrors) => ({ ...prevErrors, paymentMethod: "" }));
  };

  // Lógica para manipular a mudança de data
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFormErrors((prevErrors) => ({ ...prevErrors, date: "" }));

    const times = ["8:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];
    setAvailableTimes(times);
    setSelectedTime(null);
  };

  // Lógica para manipular a seleção de horário
  const handleTimeClick = (time) => {
    setSelectedTime(time);
    setFormErrors((prevErrors) => ({ ...prevErrors, time: "" }));
  };

  // Verifica se o formulário é válido
  const isFormValid = () => {
    return (
      selectedMatricula &&
      paymentMethod &&
      selectedDate &&
      selectedTime &&
      termsAccepted &&
      !Object.keys(formErrors).length
    );
  };

  return (
    <GlobalContainer>
      <FormContainer onSubmit={handleSubmit}>
        <Initial>
          <h1>Requerimento de Matrícula e Rematrícula </h1>
          <p>
            1) O responsável pelo aluno, cujos dados pessoais são transcritos a seguir, vem, pelo presente, requerer a
            esta Escola, a matrícula do referido aluno para o ano de 2024, firmando, inclusive, se atendidos os
            requisitos para tanto, o contrato que a seguir faz parte integrante deste documento.
          </p>
        </Initial>

        <CheckContainer>
          <h1>Tipo de matricula</h1>
          <RadioBox>
            <label>
              <input
                type="radio"
                name="matricula"
                value="matricula"
                checked={selectedMatricula === "matricula"}
                onChange={handleMatriculaChange}
              />
              Matrícula
            </label>
          </RadioBox>

          <RadioBox>
            <label>
              <input
                type="radio"
                name="rematricula"
                value="rematricula"
                checked={selectedMatricula === "rematricula"}
                onChange={handleMatriculaChange}
              />
              Rematrícula
            </label>
          </RadioBox>
          {formErrors.matricula && <p style={{ color: "red" }}>{formErrors.matricula}</p>}
        </CheckContainer>

        <FormData>
          <h1>Dados do aluno</h1>
          <FormField>
            <p>
              Nome completo <span>*</span>
            </p>
            <FormInput type="text" name="nome" />
            {submitted && !selectedMatricula && <p style={{ color: "red" }}>Por favor, insira o nome completo.</p>}
          </FormField>

          <FormField>
            <p>
              E-mail <span>*</span>
            </p>
            <FormInput type="text" name="email" />
            {formErrors.email && <p style={{ color: "red" }}>{formErrors.email}</p>}
          </FormField>
          <FormField>
            <p>
              Telefone <span>*</span>
            </p>
            <FormInput type="text" name="telefone" />
            {formErrors.telefone && <p style={{ color: "red" }}>{formErrors.telefone}</p>}
          </FormField>
          <FormField>
            <p>
              Logradouro <span>*</span>
            </p>
            <FormInput type="text" name="logradouro" />
            {formErrors.logradouro && <p style={{ color: "red" }}>{formErrors.logradouro}</p>}
          </FormField>
          <FormField>
            <p>
              Bairro <span>*</span>
            </p>
            <FormInput type="text" name="bairro" />
            {formErrors.bairro && <p style={{ color: "red" }}>{formErrors.bairro}</p>}
          </FormField>
          <FormField>
            <p>
              CEP <span>*</span>
            </p>
            <FormInput type="text" name="cep" />
            {formErrors.cep && <p style={{ color: "red" }}>{formErrors.cep}</p>}
          </FormField>
        </FormData>

        <FormData>
          <h1>Dados do Responsável (Contratante)</h1>

          <FormField>
            <p>Estado civil *</p>
            <FormInput as="select" name="estadoCivil">
              <option value="" disabled selected hidden>
                Selecione uma opção
              </option>
              <option value="solteiro">Solteiro(a)</option>
              <option value="casado">Casado(a)</option>
              <option value="divorciado">Divorciado(a)</option>
              <option value="viuvo">Viúvo(a)</option>
            </FormInput>
            {formErrors.estadoCivil && <p style={{ color: "red" }}>{formErrors.estadoCivil}</p>}
          </FormField>
          <FormField>
            <p>
              Quem possui a guarda do menor? <span>*</span>
            </p>
            <FormInput as="select" name="guarda">
              <option value="" disabled selected hidden>
                Selecione uma opção
              </option>
              <option value="pai">Pai</option>
              <option value="mae">Mãe</option>
              <option value="tutor">Tutor</option>
            </FormInput>
            {formErrors.guarda && <p style={{ color: "red" }}>{formErrors.guarda}</p>}
          </FormField>
          <FormField>
            <p>
              CPF <span>*</span>
            </p>
            <FormInput type="text" name="cpf" />
            {formErrors.cpf && <p style={{ color: "red" }}>{formErrors.cpf}</p>}
          </FormField>

          <FormField>
            <p>
              RG <span>*</span>
            </p>
            <FormInput type="text" name="rg" />
            {formErrors.rg && <p style={{ color: "red" }}>{formErrors.rg}</p>}
          </FormField>

          <FormField>
            <p>
              Órgão emissor <span>*</span>
            </p>
            <FormInput type="text" name="orgaoEmissor" />
            {formErrors.orgaoEmissor && <p style={{ color: "red" }}>{formErrors.orgaoEmissor}</p>}
          </FormField>

          <FormField>
            <p>
              Data de Nascimento <span>*</span>
            </p>
            <FormInput type="date" name="dataNascimento" />
            {formErrors.dataNascimento && <p style={{ color: "red" }}>{formErrors.dataNascimento}</p>}
          </FormField>

          <FormField>
            <p>
              Telefone <span>*</span>
            </p>
            <FormInput type="text" name="telefoneResponsavel" />
            {formErrors.telefoneResponsavel && <p style={{ color: "red" }}>{formErrors.telefoneResponsavel}</p>}
          </FormField>

          <FormField>
            <p>
              Email <span>*</span>
            </p>
            <FormInput type="text" name="emailResponsavel" />
            {formErrors.emailResponsavel && <p style={{ color: "red" }}>{formErrors.emailResponsavel}</p>}
          </FormField>

          <FormField>
            <p>
              Profissão <span>*</span>
            </p>
            <FormInput type="text" name="profissao" />
            {formErrors.profissao && <p style={{ color: "red" }}>{formErrors.profissao}</p>}
          </FormField>
        </FormData>

        <FormTrueFalse>
          <p>
            Utilizar o mesmo endereço <span>*</span>
          </p>
          <div>
            <label>
              <input
                type="radio"
                name="sameAddress"
                value="yes"
                checked={useSameAddress === true}
                onChange={() => setUseSameAddress(true)}
              />
              Sim
            </label>
            <label>
              <input
                type="radio"
                name="sameAddress"
                value="no"
                checked={useSameAddress === false}
                onChange={() => setUseSameAddress(false)}
              />
              Não
            </label>
          </div>
          {formErrors.sameAddress && <p style={{ color: "red" }}>{formErrors.sameAddress}</p>}

          <FormAddress>
            {!useSameAddress && (
              <FormData>
                <FormField>
                  <p>
                    Logradouro <span>*</span>
                  </p>
                  <FormInput type="text" name="logradouroResponsavel" />
                  {formErrors.logradouroResponsavel && (
                    <p style={{ color: "red" }}>{formErrors.logradouroResponsavel}</p>
                  )}
                </FormField>
                <FormField>
                  <p>
                    Bairro <span>*</span>
                  </p>
                  <FormInput type="text" name="bairroResponsavel" />
                  {formErrors.bairroResponsavel && <p style={{ color: "red" }}>{formErrors.bairroResponsavel}</p>}
                </FormField>
                <FormField>
                  <p>
                    CEP <span>*</span>
                  </p>
                  <FormInput type="text" name="cepResponsavel" />
                  {formErrors.cepResponsavel && <p style={{ color: "red" }}>{formErrors.cepResponsavel}</p>}
                </FormField>
              </FormData>
            )}
          </FormAddress>
        </FormTrueFalse>

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
          {formErrors.turma && <p style={{ color: "red" }}>{formErrors.turma}</p>}
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
          {formErrors.paymentMethod && <p style={{ color: "red" }}>{formErrors.paymentMethod}</p>}
        </FinanceContainer>

        <ScheduleContainer>
          <div className="schedule-header">
            <h1>Agendamento para Assinatura de Documentos</h1>
            <p>
              Por favor, selecione uma data disponível para agendar a assinatura de documentos. Lembre-se de trazer
              consigo todos os documentos necessários para o processo de matrícula.
            </p>
          </div>
          <FormSchedule>
            <DatePickerWrapper>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                filterDate={(date) => date.getDay() !== 0 && date.getDay() !== 6}
                inline
              />
              {formErrors.date && <p style={{ color: "red" }}>{formErrors.date}</p>}
            </DatePickerWrapper>
            {selectedDate && (
              <DetailsContainer>
                <h2>Horários Disponíveis</h2>
                <div className="times-grid">
                  {availableTimes.map((time, index) => (
                    <button
                      key={index}
                      className={time === selectedTime ? "selected" : ""}
                      onClick={() => handleTimeClick(time)}
                    >
                      {time}
                    </button>
                  ))}
                  {formErrors.time && <p style={{ color: "red" }}>{formErrors.time}</p>}
                </div>

                <Documents>
                  <h2>Documentos Necessários</h2>
                  <ul>
                    <li>Histórico Escolar</li>
                    <li>Certidão de Nascimento</li>
                    <li>Comprovante de Endereço</li>
                    <li>RG do Aluno </li>
                    <li>RG do Responsável </li>
                    <li>CPF do Responsável</li>
                  </ul>
                </Documents>
              </DetailsContainer>
            )}
          </FormSchedule>
        </ScheduleContainer>

        <FormField>
          <label>
            <input type="checkbox" checked={termsAccepted} onChange={() => setTermsAccepted(!termsAccepted)} />
            Eu confirmo que todas as informações fornecidas são corretas e aceito os termos de compromisso.
          </label>
          {formErrors.termsAccepted && <p style={{ color: "red" }}>{formErrors.termsAccepted}</p>}
        </FormField>
        <Link to="/enviado">
          <SubmitButton type="submit" disabled={!isFormValid()}>
            Enviar
          </SubmitButton>{" "}
        </Link>
      </FormContainer>
    </GlobalContainer>
  );
};

export default Form;
