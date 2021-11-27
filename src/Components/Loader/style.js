import styled from 'styled-components';

export const LoaderContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2000;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  background-color: black;
`;

export const LoaderTitle = styled.h1`
  color: white;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
`;

export const LoaderSubtitle = styled.h3`
  color: wheat;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 300;
`;
