import styled from "styled-components";

const FormContainer = styled.form`
  background-color: #f0f0f0;
  color: #4a548f;
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
    margin-bottom: 10px;
    margin-top: 50px;
    font-size: 24px;
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
    color: #a8a7a7;
    font-size: 14px;
  }

  label {
    margin: 10px 0 5px;
    color: #474747;
    font-size: 16px;
    font-weight: bold;
  }
`;

const FormInput = styled.input`
  padding: 10px;
  margin: 0;
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

const TurmasContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  h1 {
    width: 100%;
    color: #333;
    margin-top: 50px;
    margin-bottom: 10px;
    font-size: 24px;
  }
`;

const TurmaOption = styled.label`
  flex: 1;
  min-width: 200px;
  max-width: 250px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
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
    margin-bottom: 30px;
    margin-top: 40px;
    font-size: 24px;
  }
`;

const PaymentOption = styled.label`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  color: #333;
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

const ScheduleContainer = styled.div`
  display: flex;
  margin-top: 20px;

  h1 {
    font-size: 24px;
    color: #333;
  }
`;

const DatePickerWrapper = styled.div`
  flex: 1;

  p {
    margin-top: 10px;
    margin-bottom: 10px;
    color: #4b4b4b;
  }

  .react-datepicker {
    border: none;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .react-datepicker__header {
    background-color: #4a548f;
    color: #fff;
    border-bottom: none;
    padding: 20px;
  }

  .react-datepicker__current-month {
    font-size: 18px;
    font-weight: bold;
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: #4a548f;
    font-size: 14px;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: #4a548f;
    color: #fff;
  }

  .react-datepicker__day--today {
    font-weight: bold;
    border: 1px solid #4a548f;
    border-radius: 50%;
  }

  .react-datepicker__navigation--previous,
  .react-datepicker__navigation--next {
    top: 20px;
    line-height: 1.5;
    border: none;
    background: none;
    color: #fff;
  }

  .react-datepicker__navigation--previous {
    margin-left: 10px;
  }

  .react-datepicker__navigation--next {
    margin-right: 10px;
  }

  .react-datepicker__day--disabled {
    color: #ccc;
    pointer-events: none;
  }

  .react-datepicker__navigation-icon::before {
    border-color: #fff;
  }

  .react-datepicker__day:hover {
    background-color: #e0e0e0;
    border-radius: 50%;
  }
`;

const ConfirmButton = styled.button`
  background-color: ${(props) => props.theme.colors.color4};
  color: ${(props) => props.theme.colors.color1};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const DetailsContainer = styled.div`
  margin-left: 20px;
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
  ScheduleContainer,
  ConfirmButton,
  DetailsContainer,
  DatePickerWrapper,
  SubmitButton,
};
