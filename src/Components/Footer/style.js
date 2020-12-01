import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 150px 0 0 0;
  background-color: black;
`;

export const Copyright = styled.h5`
  display: flex;
  align-items: center;
  user-select: none;
  color: lightgray;
`;

export const FooterText = styled.h4`
  user-select: none;
  color: lightgray;
  margin: 20px 0 0 0;
`;

export const FooterLinks = styled.a`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  user-select: none;
  color: lightgray;
  margin: 20px 0 0 0;
  &:hover {
    color: lightgray;
    text-decoration: none;
  }
`;
