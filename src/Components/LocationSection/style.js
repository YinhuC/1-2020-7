import styled from 'styled-components';
import { Container } from 'reactstrap';

export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const HeaderContainer = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: row;
  background-color: black;
`;

export const ImageContainer = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  height: 100%;
  width: 100%;
`;

export const TopContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

export const LocationText = styled.div`
  text-transform: uppercase;
  font-size: calc(12px + 3vw);
  font-family: 'Playfair Display', serif;
  color: white;
`;

export const DataContainer = styled(Container)``;
