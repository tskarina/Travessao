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

export default {
  GlobalContainer,
  Container,
  Title,
};
