import styled from "styled-components";
/*https://sudo.isl.co/translate-vertical-horizontal/*/

export const TallOuterContainer = styled.div.attrs(({ dynamicheight }) => ({
  style: { height: `${dynamicheight}px` },
}))`
  position: relative;
  width: 100%;
`;

export const HorizontalTranslateContainer = styled.div.attrs(
  ({ translatex }) => ({
    style: { transform: `translateX(${translatex}px)` },
  })
)`
  position: absolute;
  height: 100%;
  will-change: transform;
`;

export const StickyInnerContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;
