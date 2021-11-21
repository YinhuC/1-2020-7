import styled from "styled-components";

export const Center = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 1000;
  background-color: transparent;
  position: fixed;
`;

export const TourismText = styled.h4`
  display: flex;
  align-items: center;
  color: white;
  margin: 0 10px 0 0;
  user-select: none;
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;

  .menu {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 2rem;
    width: 2rem;
  }

  &:focus {
    border: none;
    outline: none;
  }
`;
