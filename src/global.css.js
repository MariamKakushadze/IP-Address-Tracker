import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');
* {
  box-sizing: border-box;
  transition: all 0.25s ease-out;
  margin: 0 auto;
}
body {
    width: 100%;
    height: 100%;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-style:normal;
  }
`;
