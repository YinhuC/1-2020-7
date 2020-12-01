/* Third Party */
import React from "react";
import { Container, Row, Col } from "reactstrap";

/* Components */
import { FooterContainer, Copyright, FooterText } from "./style";

/* Functions */

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Row>
          <Col className="col-12 col-md-6 d-flex justify-content-center"></Col>
          <Col className="col-12 col-md-6 pl-5 d-flex justify-content-center align-items-center">
            <FooterText>
              This web application was designed to promote tourism, and to start
              encoruaging New Zealanders to travel within New Zealand.
            </FooterText>
          </Col>
        </Row>
      </Container>
      <hr style={{ backgroundColor: "lightgray" }} />
      <Container>
        <Row>
          <Col className="mb-3">
            <Copyright>© 2020 Promote NZ Tourism. Developed by SNYC</Copyright>
          </Col>
        </Row>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
