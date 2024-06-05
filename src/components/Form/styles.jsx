import styled from "styled-components";

const GlobalContainer = styled.div`
  margin-left: 20vh;
  margin-right: 20vh;
`;

const Initial = styled.div`
  margin-top: 60px;
  margin-left: 38px;

  h1 {
    color: #4a548f;
    text-align: center;
    margin-bottom: 40px;
    width: 90%;
  }

  p {
    color: #8690c7;
    margin-bottom: 2%;
    font-weight: bold;
    width: 90%;
  }
`;

const FormContainer = styled.form`
  background-color: #f7f7f7;
  border-radius: 20px;
  width: 100%;
  margin-top: 90px;
  margin-left: -40px;
  margin-bottom: 110px;
  padding: 5px 30px 10px 50px;
`;

const FormData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 90%;
  margin-left: 38px;

  h1 {
    grid-column: span 2;
    color: #4a548f;
    margin-bottom: -5px;
    margin-top: 40px;
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
    color: #5c5c5c;
    font-size: 14px;
  }

  label {
    margin: 10px 0 5px;
    color: #5c5c5c;
    font-size: 16px;
    font-weight: bold;
    margin-left: 38px;
    width: 90%;
    margin-top: 35px;
  }

  input {
    margin-right: 5px;
  }

  span {
    color: #e60000;
  }
`;
const FormTrueFalse = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-top: 20px;
    margin-bottom: 5px;
    margin-left: 38px;
    color: #5c5c5c;
    font-size: 14px;
  }

  div {
    label {
      color: #5c5c5c;
      font-size: 16px;
      font-weight: bold;
      margin-right: 10px;
    }

    label:first-of-type {
      margin-left: 38px;
    }
  }

  input {
    margin-right: 5px;
  }
`;

const FormAddress = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  p {
    margin: 0 0 5px;
    color: #5c5c5c;
    font-size: 14px;
  }

  label {
    margin: 10px 0 5px;
    color: #4a548f;
    font-size: 16px;
    font-weight: bold;
  }
`;

const FormInput = styled.input`
  padding: 10px;
  margin: 0;
  width: 95%;
  background-color: #e1e3e9;
  border: 1px solid #e0e0e0;
  color: #414141;
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box;

  &:focus {
    border-color: #4a548f;
    outline: none;
  }
`;

const CheckContainer = styled.div`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  margin-bottom: -20px;
  margin-left: 40px;

  h1 {
    color: #4a548f;
    margin-bottom: 15px;
    font-size: 24px;
  }
`;

const RadioBox = styled.label`
  display: flex;
  align-items: center;
  color: #5c5c5c;
  margin-bottom: 10px;

  cursor: pointer;
  transition: background-color 0.3s;

  input {
    margin-right: 10px;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 35px;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 92vh;
  background-color: #4a548f;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  align-self: start;

  &:hover {
    background-color: #262d52;
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
  width: 93%;

  h1 {
    width: 100%;
    color: #4a548f;
    margin-top: 30px;
    margin-bottom: 10px;
    font-size: 24px;
    margin-left: 38px;
  }
`;

const TurmaOption = styled.label`
  display: flex;
  width: 100%;
  margin-left: 40px;
  border: 1px solid #b2b7d1;
  border-radius: 5px;
  padding: 10px;
  text-align: start;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b6b9d1;
  }

  input {
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;

    span {
      color: #474747;
      font-size: 14px;
    }

    strong {
      color: #333333;
      font-size: 16px;
    }
  }
`;

const FinanceContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 88%;
  margin-left: 40px;
  h1 {
    color: #4a548f;
    margin-bottom: 30px;
    margin-top: 40px;
    font-size: 24px;
  }
`;

const PaymentOption = styled.label`
  display: flex;
  align-items: center;

  border: 1px solid #b2b7d1;
  color: #333333;
  border-radius: 5px;
  padding: 10px;

  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b6b9d1;
  }

  input {
    margin-right: 10px;
  }

  .radio {
  }
`;

const ScheduleContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .schedule-header {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;

    h1 {
      color: #4a548f;
      margin-bottom: 10px;
      font-size: 24px;
      text-align: left;
      margin-left: 38px;
    }

    p {
      color: #383838;
      text-align: left;
      margin-left: 38px;
      width: 90%;
    }
  }
`;

const FormSchedule = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
`;

const DatePickerWrapper = styled.div`
  flex: 1;
  max-width: 300px;

  p {
    margin-top: 10px;
    margin-bottom: 10px;
    color: #4b4b4b;
  }

  .react-datepicker {
    border: none;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1);
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

  .react-datepicker__day--outside-month {
    color: #bbbbbb;
  }

  .react-datepicker__navigation-icon::before {
    border-color: #fff;
  }
`;

const DetailsContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: 80%;
  margin-left: 38px;

  h2 {
    color: #4a548f;
    margin-bottom: 10px;
  }

  .times-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-bottom: 20px;
    width: 95%;

    button {
      background: #ffffff;
      border: 1px solid #4a548f;
      border-radius: 5px;
      padding: 10px;
      text-align: center;
      color: #4a548f;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &.selected {
        background-color: #4a548f;
        color: #fff;
      }
    }
  }
`;

const Documents = styled.div`
  h2 {
    color: #4a548f;
    margin-bottom: 10px;
  }

  ul {
    list-style: circle;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 25px;

    li {
      margin-bottom: 10px;
      margin-left: 20px;
      color: #5c5c5c;
    }
  }
`;

export default {
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
  FormInput,
  FinanceContainer,
  PaymentOption,
  ScheduleContainer,
  FormSchedule,
  DetailsContainer,
  Documents,
  DatePickerWrapper,
  SubmitButton,
};
