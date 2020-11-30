/* Third Party */
import React from "react";

/* Components */
import {
  BackgroundContainer,
  HeaderContainer,
  BackgroundVideo,
  VideoContainer,
} from "./style";
import { Cursor } from "../../../Components/Cursor/index";
import CursorManager from "../../../Components/Cursor/Context/manager";
import { MenuIcon } from "../../../Components/Icons/MenuIcon";
import video from "../../../Videos/dark.mp4";

/* Functions */
/* need to actually wrap the icon AND cursor for it to change, also need 
the cursor to be a direct child of cursor manager */

function HeaderSection() {
  return (
    <CursorManager>
      <Cursor />

      <VideoContainer>
        <BackgroundVideo autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
        </BackgroundVideo>
        <BackgroundContainer>
          <HeaderContainer>
            Explore New Zealand
            <MenuIcon />
          </HeaderContainer>
        </BackgroundContainer>
      </VideoContainer>
      <BackgroundContainer />
    </CursorManager>
  );
}

export default HeaderSection;
