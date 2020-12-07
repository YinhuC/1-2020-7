import styled, { createGlobalStyle } from "styled-components";
/*https://sudo.isl.co/translate-vertical-horizontal/*/

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
  }
`;

export const Main = styled.div``;

export const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

export const BumperSection = styled.section`
  text-align: center;
  padding: 128px 16px;
  background-color: #efefef;
  user-select: none;
`;

export const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 1% 0 4%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;
