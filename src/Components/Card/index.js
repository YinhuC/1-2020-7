/* Third Party */
import React from "react";
import { Col, Row } from "reactstrap";

/* Components */
import {
  CardImage,
  ImageContainer,
  Overlay,
  TopContainer,
  Header,
  Subheader,
} from "./style";

/* Functions */

function CustomCard({ image, header, subheader }) {
  return (
    <ImageContainer>
      <Overlay>
        <TopContainer>
          <Row className="d-flex flex-column">
            <Col>
              <Header> {header}</Header>
            </Col>
            <Col className="d-flex justify-content-end">
              <Subheader>{subheader}</Subheader>
            </Col>
          </Row>
        </TopContainer>
      </Overlay>
      <CardImage style={{ backgroundImage: `url(${image})` }} />
    </ImageContainer>
  );
}

export default CustomCard;
