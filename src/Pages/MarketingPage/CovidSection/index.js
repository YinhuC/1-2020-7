/* Third Party */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import { Button, Alert } from "shards-react";

/* Components */
import { CovidContainer, DisclaimerText } from "./style";

/* Functions */
/* need to actually wrap the icon AND cursor for it to change, also need 
the cursor to be a direct child of cursor manager */

function CovidSection() {
  return (
    <CovidContainer>
      <Container>
        <Row className="d-flex flex-column">
          <Col className="text-center">
            <h2 style={{ userSelect: "none" }}>Before You Go</h2>
            <Alert
              theme="warning"
              style={{ color: "black", fontWeight: "bold", marginTop: "50px" }}
            >
              Alert - Warning
            </Alert>
          </Col>
          <Col>
            <DisclaimerText>
              The pandemic has caused many lockdowns with the country too afraid
              to explore again. There are businesses that will benefit from more
              tourism, plus you deserve to relax and travel. However, safety
              should always be put first. If you are sick, get tested and always
              practise social distancing. To learn more about COVID-19 and how
              to stop the spread:
            </DisclaimerText>
          </Col>
          <Col className="d-flex justify-content-center">
            <Button
              href="https://covid19.govt.nz/"
              target="_blank"
              size="lg"
              theme="warning"
              style={{
                fontWeight: "bold",
                boxShadow: "2px 2px 10px gray",
                margin: "0 0 250px 0",
              }}
            >
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    </CovidContainer>
  );
}

export default CovidSection;
