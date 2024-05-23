import styled from "styled-components";

const FormContainer = styled.form`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  h1 {
    grid-column: span 2;
    color: #333;
  }

  p {
    margin: 0;
    color: #666;
    font-size: 14px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 0 0 5px;
    color: #666;
    font-size: 14px;
  }
`;

const FormInput = styled.input`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const TurmasContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  h1 {
    grid-column: span 2;
    color: #333;
  }

  h2 {
    color: #333;
    margin-bottom: 10px;
  }
`;

const TurmaOption = styled.label`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }

  input {
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;

    span {
      color: #666;
      font-size: 14px;
    }

    strong {
      color: #333;
      font-size: 16px;
    }
  }
`;

const FinanceContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  h1 {
    color: #333;
    margin-bottom: 10px;
  }
`;

const PaymentOption = styled.label`
  display: flex;
  align-items: center;
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }

  input {
    margin-right: 10px;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  align-self: start;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export default {
  FormContainer,
  FormData,
  FormField,
  TurmasContainer,
  TurmaOption,
  FormInput,
  FinanceContainer,
  PaymentOption,
  SubmitButton,
};
