import styled from "styled-components";

const GlobalContainer = styled.div`
  margin-left: 30vh;
  margin-right: 30vh;
`;

const Container = styled.div`
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    margin-top: 0px;
  }

  p {
    margin-top: 40px;
  }

  img {
    width: 700px;
    height: auto;
    margin-top: 40px;
    border-radius: 12px;
  }
`;

const ContainerFundacao = styled.div`
  div {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 60px;
    margin-top: 0px;
  }

  p {
    margin-top: 40px;
  }

  img {
    width: 500px;
    height: auto;
    margin-top: 40px;
  }
`;

const ProfessorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContainerProfessores = styled.div`
  div {
    display: flex;
    gap: 70px;
    margin-top: 40px;
  }

  img {
    width: 300px;
    height: auto;
  }

  h2 {
    margin-top: -40px;
    color: ${(props) => props.theme.colors.color4};
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 70px;
  margin-top: 10px;
`;

const Carousel = styled.div`
  cursor: grab;
  overflow: hidden;
`;

const Inner = styled.div`
  display: flex;

  .item {
    min-height: 200px;
    min-width: 400px;
    padding: 14px;
  }

  .item img {
    width: 100%;
    height: 90%;
    border-radius: 12px;
    pointer-events: none;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  margin-top: ${(props) => props.customMarginTop || "110px"};
  margin-bottom: ${(props) => props.customMarginBottom || "10px"};
  color: ${(props) => props.theme.colors.color1};
  letter-spacing: 0.5px;
  span {
    color: ${(props) => props.theme.colors.color4};
  }
  border-bottom: 2px solid ${(props) => props.theme.colors.color4};
`;

const Subtitle = styled.h2`
  font-size: 18px;
  letter-spacing: 0.7px;
  color: ${(props) => props.theme.colors.color8};
  margin-top: 20px;
  text-align: left;
`;

export default {
  GlobalContainer,
  Container,
  ContainerFundacao,
  ContainerProfessores,
  ProfessorContainer,
  Row,
  Carousel,
  Inner,
  Title,
  Subtitle,
};
