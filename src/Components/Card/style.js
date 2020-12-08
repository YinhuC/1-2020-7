import styled from "styled-components";

export const CardImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    transform: rotate(5deg) scale(1.15);
    opacity: 0.3;
  }
  transition: all 1s ease;
`;

export const ImageContainer = styled.a`
  width: 1200px;
  height: 60%;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 10px 10px 20px lightgrey;
  margin: 0 2% 0 0;
`;

export const Overlay = styled.div`
  width: 100%;
  position: absolute;
  color: black;
`;

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 30px 30px 0 0;
  user-select: none;
`;

export const Header = styled.h2`
  display: flex;
  justify-content: flex-end;
`;

export const Subheader = styled.h4`
  display: flex;
  justify-content: flex-end;
`;
