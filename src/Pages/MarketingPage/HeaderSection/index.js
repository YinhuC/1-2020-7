/* Third Party */
import React from "react";

/* Components */
import { BackgroundImage, HeaderContainer } from "./style";
import { Cursor } from "../../../Components/Cursor/index";
/* Functions */

function HeaderSection() {
  return (
    <>
      <Cursor />
      <BackgroundImage>
        <HeaderContainer>Explore New Zealand</HeaderContainer>
      </BackgroundImage>
    </>
  );
}

export default HeaderSection;
