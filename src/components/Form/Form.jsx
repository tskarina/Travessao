import React, { useState } from "react";
import styles from "./styles";
const {
  FormContainer,
  FormData,
  FormField,
  TurmasContainer,
  TurmaOption,
  FinanceContainer,
  PaymentOption,
  FormInput,
  SubmitButton,
} = styles;

const Form = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para lidar com a submissão do formulário
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
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

        {paymentMethod === "creditCard" && (
          <>
            <FormField>
              <p>Número do Cartão</p>
              <FormInput type="text" placeholder="Número do Cartão" />
            </FormField>
            <FormField>
              <p>Nome no Cartão</p>
              <FormInput type="text" placeholder="Nome no Cartão" />
            </FormField>
            <FormField>
              <p>Data de Validade</p>
              <FormInput type="text" placeholder="MM/AA" />
            </FormField>
            <FormField>
              <p>Código CVV</p>
              <FormInput type="text" placeholder="CVV" />
            </FormField>
          </>
        )}

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

      <SubmitButton type="submit">Enviar</SubmitButton>
    </FormContainer>
  );
};

export default Form;
