import styled from "styled-components";

const GlobalContainer = styled.div`
  margin-left: 30vh;
  margin-right: 30vh;
`;

const Container = styled.div`
  width: 68%;
  height: 500px;
  padding: 70px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 50px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 130px;
  border-top: 2px solid ${(props) => props.theme.colors.color4};
  border-right: 5px solid ${(props) => props.theme.colors.color4};
  border-bottom: 2px solid ${(props) => props.theme.colors.color4};
  border-end-end-radius: 60px;
  border-start-end-radius: 60px;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    background: ${(props) => props.theme.colors.color4};
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 45%;

    border-end-end-radius: 60px;
    border-start-end-radius: 60px;
    border-right: 6px solid ${(props) => props.theme.colors.color7};
  }
`;

const ContactContainer = styled.div`
  position: relative;
  width: 300px;
  height: auto;
  white-space: wrap;
  padding: 15px;

  h1 {
    font-size: 40px;
    margin: 0;
    color: ${(props) => props.theme.colors.color2};
  }

  h2 {
    font-size: 18px;
    width: 400px;
    font-weight: bold;
    white-space: wrap;
    overflow: hidden;
    margin-bottom: 15px;
    color: ${(props) => props.theme.colors.color2};
  }

  p {
    color: ${(props) => props.theme.colors.color2};
    font-weight: bold;
    font-size: 16px;
    margin-top: 10px;
  }
`;

const ImageParagraphContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  img {
    width: 20px;
    height: auto;
    position: relative;
    top: 6px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  height: 550px;
  padding: 10px;
  margin: 20px 0px 100px 120px;
`;

const InputContent = styled.div`
  h3.label {
    font-size: 16px;
    color: ${(props) => props.theme.colors.color1};
  }

  input {
    background: #03030311;
    color: ${(props) => props.theme.colors.color1};
    width: 60%;
    padding: 10px;
    margin-top: 8px;
    border: 2px solid #ccc;
    border-radius: 12px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s ease;
    font-family: "Roboto", sans-serif;

    &::placeholder {
      color: #757575;
    }

    &:focus {
      border-color: ${(props) => props.theme.colors.color4};
    }
  }

  textarea {
    background: #03030311;
    color: ${(props) => props.theme.colors.color1};
    width: 60%;
    height: 150px;
    padding: 10px;
    margin-top: 8px;
    border: 2px solid #ccc;
    border-radius: 15px;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s ease;
    resize: none;

    &::placeholder {
      color: #757575;
    }

    &:focus {
      border-color: ${(props) => props.theme.colors.color4};
    }
  }
`;

const Image = styled.img`
  width: 300px;
  height: auto;
  margin-left: -110px;
`;

const ButtonContato = styled.button`
  background-color: ${(props) => props.theme.colors.color4};
  margin-top: 15px;
  margin-left: 245px;
  border: 2px solid transparent;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.color3};
  width: 100px;
  height: 40px;

  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
    background-color: #cc5d02;
  }

  &:active {
    transform: translateY(2px);
  }
`;

export default {
  GlobalContainer,
  Container,
  ContactContainer,
  ImageParagraphContainer,
  InputContainer,
  InputContent,
  ButtonContato,
  Image,
};
