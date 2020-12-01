/* Third Party */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Button } from "shards-react";

/* Components */
import { FooterContainer, Copyright, FooterText, FooterLinks } from "./style";

/* Functions */

function Footer() {
  return (
    <FooterContainer>
      <Container style={{ marginBottom: "150px" }}>
        <Row>
          <Col className="col-12 col-md-3 d-flex flex-column">
            <FooterText>Useful Links</FooterText>
            <FooterLinks
              href="https://www.tourismnewzealand.com/"
              target="_blank"
            >
              Tourism New Zealand
            </FooterLinks>
            <FooterLinks href="https://visuals.newzealand.com/" target="_blank">
              Visual Library
            </FooterLinks>
            <FooterLinks href="mailto: snycbusiness@gmail.com" target="_blank">
              Contact Us
            </FooterLinks>
            <FooterLinks
              href="https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus"
              target="_blank"
            >
              COVID-19 NZ Situtation
            </FooterLinks>
          </Col>

          <Col className="col-12 col-md-9 pl-5 d-flex  flex-column">
            <FooterText>
              This web application was designed as a personal project to promote
              tourism, and to start encoruaging New Zealanders to travel within
              New Zealand.
            </FooterText>
            <FooterText className="mb-3">
              Images and videos used in this website is from Tourism New
              Zealand. Click below to learn more and support tourism in New
              Zealand. Thanks
            </FooterText>
            <Button
              href="https://www.tourismnewzealand.com/"
              target="_blank"
              size="lg"
              theme="light"
            >
              Learn More
            </Button>
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
