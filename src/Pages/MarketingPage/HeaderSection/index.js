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
import video from "../../../Videos/dark.mp4";
import { RightArrow } from "../../../Components/Icons/RightArrow";

/* Functions */
/* need to actually wrap the icon AND cursor for it to change, also need 
the cursor to be a direct child of cursor manager */

function HeaderSection() {
  return (
    <>
      <VideoContainer>
        <BackgroundVideo autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
        </BackgroundVideo>
        <BackgroundContainer>
          <MainContainer>
            <Row></Row>
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
    </>
  );
}

export default HeaderSection;
