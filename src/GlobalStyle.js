import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *, ::after, ::before {
    box-sizing: inherit;
  }
  
 .body {
    font-family: 'Lato', sans-serif;
    line-height: 1.5;
    color: #333;
    margin: 0 auto;
    max-width: 1100px;
    padding: 0 20px;
    color: white;
    width: auto;
    height: auto;
    overflow: auto;
    background-image: url("../public/currency2.png");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
  
  .button {
    cursor: pointer;
  }
  
  `;