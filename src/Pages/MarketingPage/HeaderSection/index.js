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

function HeaderSection() {
  return (
    <div>
      <VideoContainer>
        <BackgroundVideo autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
        </BackgroundVideo>
        <CursorManager>
          {/* need to actually wrap the icon and cursor for it to change */}
          <Cursor />
          <BackgroundContainer>
            <HeaderContainer>
              Explore New Zealand
              <MenuIcon />
            </HeaderContainer>
          </BackgroundContainer>
        </CursorManager>
      </VideoContainer>
      <BackgroundContainer />
    </div>
  );
}

export default HeaderSection;
