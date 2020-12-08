import styled from "styled-components";

export const MainContainer = styled.div`
  /* Full height */
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: row;
`;

export const ImageContainer = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  height: 100%;
  width: 40%;
`;

export const TopContainer = styled.div`
  height: 100%;
  width: 60%;

  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

export const LocationText = styled.div`
  text-transform: uppercase;
  font-size: 80px;
  font-family: "Krona One";
  color: white;
`;
