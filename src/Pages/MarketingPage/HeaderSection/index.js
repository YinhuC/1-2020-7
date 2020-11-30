/* Third Party */
import React from "react";

/* Components */
import { BackgroundImage, HeaderContainer } from "./style";
import { Cursor } from "../../../Components/Cursor/index";
import CursorManager from "../../../Components/Cursor/Context/manager";
import { MenuIcon } from "../../../Components/MenuIcon";

/* Functions */

function HeaderSection() {
  return (
    <>
      <CursorManager>
        {/* need to actually wrap the icon and cursor for it to change */}
        <Cursor />
        <BackgroundImage>
          <HeaderContainer>
            Explore New Zealand
            <MenuIcon />
          </HeaderContainer>
        </BackgroundImage>
      </CursorManager>
    </>
  );
}

export default HeaderSection;
