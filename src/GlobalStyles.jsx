import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  margin-bottom: 0;
  margin-right: 0;
  padding: 0;

}

  body {
    font-family: Roboto, sans-serif;
    color: ${(props) => props.theme.colors.color1};
    padding: 0;
    background-color: ${(props) => props.theme.colors.color2};
  }


    h2, h3 {
    letter-spacing: 0.5px;
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    line-height: 1.2;
  }

  p {
    letter-spacing: 0.5px;
    font-size: ${(props) => props.theme.fontSizes.medium} ;
    font-weight: ${(props) => props.theme.fontWeights.normal};
    line-height: 1.5;
  }

  li {
    letter-spacing: 0.5px;
    font-size: ${(props) => props.theme.fontSizes.small};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    line-height: 1.5;
  }
 
`;

export default GlobalStyles;
