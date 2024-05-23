import styled from "styled-components";

const GlobalContainer = styled.div`
  margin-left: 30vh;
  margin-right: 30vh;
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.color9};
  width: 70%;
  height: auto;
  padding: 0px 60px 0px 60px;
  border: 1px solid ${(props) => props.customBorder || props.theme.colors.color7};
  border-radius: 40px;
  text-align: start;
  position: relative;
  box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.1);

  h1 {
    font-size: 45px;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin-top: 80px;
  }

  h2 {
    text-align: left;
    font-size: 24px;
    letter-spacing: 0.7px;
    color: ${(props) => props.theme.colors.color4};
    margin-bottom: 10px;
  }

  h3 {
    font-size: 18px;
    letter-spacing: 0.7px;
    color: ${(props) => props.theme.colors.color1};
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    margin-bottom: 10px;
    letter-spacing: 0.8px;
  }
`;

export default {
  GlobalContainer,
  Container,
};
