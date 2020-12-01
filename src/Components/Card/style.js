import styled from "styled-components";

export const CardImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    transform: rotate(5deg) scale(1.15);
    opacity: 0.5;
  }
  transition: all 1s ease;
`;

export const ImageContainer = styled.div`
  width: 900px;
  height: 60%;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 10px 10px 20px lightgrey;
  margin: 0 2% 0 0;
`;
