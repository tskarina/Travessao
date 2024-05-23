import styled from "styled-components";

const GlobalContainer = styled.div`
  margin-left: 30vh;
  margin-right: 30vh;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: ${(props) => props.customGap || "40px"};
`;

const ContainerText = styled.div`
  h1 {
    font-size: 40px;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin-left: auto;
    margin-top: 110px;
    margin-bottom: 25px;
    color: ${(props) => props.theme.colors.color1};
  }

  p {
    font-size: 18px;
    margin-bottom: 80px;
  }

  h2 {
    margin-top: 20px;
    text-align: center;
    font-size: 24px;
    letter-spacing: 0.7px;
    color: ${(props) => props.theme.colors.color8};
    margin-bottom: 10px;
  }
`;

const Content = styled.div`
  background-color: ${(props) => props.theme.colors.color9};
  width: 70%;
  height: auto;
  padding: 30px 60px 30px 60px;
  margin: 20px 0px 100px 0px;
  border: 1px solid ${(props) => props.customBorder || props.theme.colors.color7};
  border-radius: 5px;
  text-align: start;
  position: relative;
  box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.1);

  h1 {
    margin-top: 30px;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.color1};
    font-size: 22px;
    text-align: center;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
  }

  th,
  td {
    padding: 10px;
    border-bottom: 1px solid ${(props) => props.theme.colors.color7};
    text-align: left;
    width: 25%;
  }

  th {
    background-color: ${(props) => props.theme.colors.color12};
    color: ${(props) => props.theme.colors.color8};
    font-weight: bold;
  }

  td {
    background-color: ${(props) => props.theme.colors.color11};
    color: ${(props) => props.theme.colors.color1};
    font-size: 16px;
  }
`;

const ButtonTable = styled.button`
  background-color: ${(props) => props.theme.colors.color4};
  border: none;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.color3};
  width: 140px;
  height: 45px;
  margin-top: 30px;
  margin-left: 802px;
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
  ContainerText,
  Content,
  ButtonTable,
};
