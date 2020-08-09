import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');

  *{
    margin:0;
    padding:0;
    outline: 0;
    box-sizing: border-box;

  }
  html, body, #root{
    min-height: 100%;
  }
  #root{
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }
  body {
    background: #191920;
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    font-size: 14px;
    border:none;
    font-family: Nunito, sans-serif;
  }
  button {
    cursor: pointer;
    font-weight: 600;
  }
  a{
    text-decoration: none;
    color: white;
  }
`;
