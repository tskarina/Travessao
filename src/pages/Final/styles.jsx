import styled from "styled-components";

const GlobalContainer = styled.div`
  margin-left: 60vh;
  margin-right: 60vh;
`;

const Initial = styled.div`
  h1 {
    color: ${(props) => props.theme.colors.color4};
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 38px;
    font-weight: 700;
    line-height: 46px;
    text-align: center;
  }

  p {
    color: ${(props) => props.theme.colors.color1};
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    text-align: left;
    padding: 0px 30px 0px 30px;
  }
`;

const FormContainer = styled.div`
  background-color: ${(props) => props.theme.colors.color9};
  width: 90%;
  height: 400px;
  padding: 30px 30px;
  margin: 80px 0 100px;
  border: 1px solid ${(props) => props.theme.colors.color7};
  border-radius: 5px;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);

  img {
    opacity: 0.6;
    width: 300px;
    position: relative;
    bottom: 20%;
    margin-left: 400px;
  }
`;

const Button = styled.button`
  padding: 12px 35px;
  margin-top: 40px;
  margin-bottom: 10px;
  margin-left: 57vh;
  background-color: ${(props) => props.theme.colors.color4};
  color: #000;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  align-self: start;

  &:hover {
    background-color: #cc5d02;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export default {
  GlobalContainer,
  Initial,
  FormContainer,
  Button,
};
