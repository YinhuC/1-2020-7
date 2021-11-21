import styled from "styled-components";

export const Center = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  z-index: 1000;
  background-color: black;
  overflow: hidden;

  -webkit-transition: height 0.8s;
  -moz-transition: height 0.8s;
  transition: height 0.8s;
`;
