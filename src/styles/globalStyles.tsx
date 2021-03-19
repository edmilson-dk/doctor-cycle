import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
  :root {
    /* Color  primary */
    --blue-primary: #00B8DD;
    --blue-second: #00AACC;
    --blue-third: #0095B2;
    
    /* Color second */
    --green-primary: #17EB76;
    --green-second: #16D96D;
    --green-third: #0ABF5B;

    /* Auxiliary colors */
    --dark: #293542;
    --blue-dark: #324563;
    --gray: #737F8B;
    --white-primary: #F3FBFD;
    --white-second: #F1F1F1;

    /* Others variables */
    --border-radius: 5px;

    /* Mobile with 1rem == 10px 
      Table with 1rem == 11px 
      Desktop with 1rem == 12px */

    --space-1: 1rem;
    --space-2: 1.5rem;
    --space-3: 2rem;
    --space-4: 3rem;
    --space-5: 4rem;

    --text: 1.4rem;
    --sub-title: 1.6rem;
    --title-main: 3rem;
    --title-primary: 2.4rem;
    --title-second: 2rem;
    --title-button: 1.8rem;
    --title-third: 1.6rem;

    --semi-bold: 600;
    --medium: 500;
    --bold: 700;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-size: 62.5%;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
  }

  body,
  button,
  input,
  textarea {
    font-family: 'Raleway', sans-serif;
    letter-spacing: 1px;
  }
`;

export default globalStyles;