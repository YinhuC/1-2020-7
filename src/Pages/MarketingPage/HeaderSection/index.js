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
            <Row>
              <Col className="d-flex justify-content-center mt-5">
                <MenuIcon />
              </Col>
            </Row>
            <Row>
              <Col className="col-8">
                <HeaderContainer>
                  Take Control Of Your Life
                  <div style={{ fontSize: "30px" }}>Begin Your Journey</div>
                </HeaderContainer>
              </Col>
              <Col className="col-4 d-flex justify-content-center mt-4">
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
