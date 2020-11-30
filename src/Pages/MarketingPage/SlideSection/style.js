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

export const Main = styled.main``;

export const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

export const BumperSection = styled.section`
  text-align: center;
  padding: 128px 16px;
  background-color: #efefef;
`;

export const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 0 0 150px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const SampleCard = styled.div`
  position: relative;
  height: 300px;
  width: 500px;
  background-color: #111f30;
  margin-right: 75px;
  flex-shrink: 0;
`;
export const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  height: 200px;
  width: 100%;

  background-color: black;
  font-weight: bolder;
`;
