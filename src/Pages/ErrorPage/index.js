/* Third Party */
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { Button } from "shards-react";

/* Components */
import { BumperSection, ErrorText } from "./style";

/* Functions */

function ErrorPage() {
  return (
    <BumperSection>
      <Container>
        <Row className="d-flex flex-column">
          <Col>
            <ErrorText>Error, 404 Page not found...</ErrorText>
            <ErrorText>I think you went the wrong way.</ErrorText>
          </Col>
          <Col className="mt-5">
            <Link to="/explore">
              <Button theme="light" size="lg">
                Back to exploring
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </BumperSection>
  );
}

export default ErrorPage;
