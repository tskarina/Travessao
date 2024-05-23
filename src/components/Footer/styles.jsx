import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.color11};
  width: 97.9%;
  height: 250px;
  padding: 20px;
  margin-top: 50px;
`;

const FooterContentContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  margin-top: 30px;
  margin-left: 30vh;
  margin-right: 23vh;
  gap: 120px;
`;

const FooterContent = styled.div`
  h1 {
    margin-bottom: 20px;
  }
  li {
    display: flex;
    font-size: 14px;
    list-style: none;
    margin-top: 14px;
  }

  p {
    margin-top: 14px;
    font-size: 14px;
  }

  a {
    color: ${(props) => props.theme.colors.color1};
    text-decoration: none;
    transition: color 0.3s ease;
    cursor: pointer;
  }

  a:hover {
    color: ${(props) => props.theme.colors.color4};
  }
`;

const SocialMedia = styled.div`
  display: flex;
  margin-top: 10px;

  div {
    margin: 0 2px;
  }

  img {
    width: 35px;
    height: auto;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  img:hover {
    transform: scale(1.1);
  }
`;

export default { FooterContainer, FooterContentContainer, FooterContent, SocialMedia };
