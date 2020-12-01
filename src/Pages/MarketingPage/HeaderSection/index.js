/* Third Party */
import React from "react";
import { Row, Col } from "reactstrap";

/* Components */
import {
  BackgroundContainer,
  HeaderContainer,
  BackgroundVideo,
  VideoContainer,
  MainContainer,
} from "./style";
import { Cursor } from "../../../Components/Cursor/index";
import CursorManager from "../../../Components/Cursor/Context/manager";
import { MenuIcon } from "../../../Components/Icons/Menu";
import video from "../../../Videos/dark.mp4";
import { RightArrow } from "../../../Components/Icons/RightArrow";

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
          <MainContainer>
            <Row className="mt-5">
              <Col className="d-flex justify-content-end mt-1 mr-3">
                <MenuIcon />
              </Col>
            </Row>
            <Row>
              <Col className="col-7">
                <HeaderContainer>
                  Discover New Zealand
                  <div style={{ fontSize: "30px" }}>Begin Your Journey</div>
                </HeaderContainer>
              </Col>
              <Col className="col-5 d-flex justify-content-end mt-2 ">
                <RightArrow />
              </Col>
            </Row>
          </MainContainer>
        </BackgroundContainer>
      </VideoContainer>
      <BackgroundContainer />
    </CursorManager>
  );
}

export default HeaderSection;
