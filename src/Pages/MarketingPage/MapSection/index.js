/* Third Party */
import React from "react";
import { Col, Row } from "reactstrap";
import { ListGroup } from "shards-react";
import LinkListItem from "../../../Components/LinkListItem";

/* Components */
import {
  BumperSection,
  MapContainer,
  OuterContainer,
  InnerContainer,
} from "./style";

/* Functions */

function MapSection() {
  return (
    <>
      <BumperSection>
        <h2>Plan Your Journey</h2>
      </BumperSection>
      <OuterContainer>
        <InnerContainer>
          <Row>
            <Col className="col-3 d-flex justify-content-center align-items-end flex-column">
              <ListGroup>
                <LinkListItem
                  name="Northland"
                  link="https://www.newzealand.com/nz/northland/"
                />
                <LinkListItem
                  name="Auckland"
                  link="https://www.newzealand.com/nz/auckland/"
                />
                <LinkListItem
                  name="Waikato"
                  link="https://www.newzealand.com/nz/waikato/"
                />
                <LinkListItem
                  name="Rotorua"
                  link="https://www.newzealand.com/nz/rotorua/"
                />
                <LinkListItem
                  name="Taupo"
                  link="https://www.newzealand.com/nz/taupo/"
                />
                <LinkListItem
                  name="Taranaki"
                  link="https://www.newzealand.com/nz/taranaki/"
                />
                <LinkListItem
                  name="Whanganui"
                  link="https://www.newzealand.com/nz/whanganui/"
                />
                <LinkListItem
                  name="Manawatu"
                  link="https://www.newzealand.com/nz/manawatu/"
                />
                <LinkListItem
                  name="The Coromandel"
                  link="https://www.newzealand.com/nz/coromandel/"
                />
                <LinkListItem
                  name="Bay of Plenty"
                  link="https://www.newzealand.com/nz/bay-of-plenty/"
                />
                <LinkListItem
                  name="Tairawhiti"
                  link="https://www.newzealand.com/nz/tairawhiti/"
                />
                <LinkListItem
                  name="Ruapehu"
                  link="https://www.newzealand.com/nz/ruapehu/"
                />
                <LinkListItem
                  name="Hawke's Bay"
                  link="https://www.newzealand.com/nz/hawkes-bay/"
                />
                <LinkListItem
                  name="Wairarapa"
                  link="https://www.newzealand.com/nz/wairarapa/"
                />
                <LinkListItem
                  name="Wellington"
                  link="https://www.newzealand.com/nz/wellington/"
                />
              </ListGroup>
            </Col>
            <Col className="col-3 d-flex justify-content-center align-items-start flex-column">
              <ListGroup>
                <LinkListItem
                  name="Nelson Tasman"
                  link="https://www.newzealand.com/nz/nelson-tasman/"
                />
                <LinkListItem
                  name="West Coast"
                  link="https://www.newzealand.com/nz/west-coast/"
                />
                <LinkListItem
                  name="Wanaka"
                  link="https://www.newzealand.com/nz/lake-wanaka/"
                />
                <LinkListItem
                  name="Queenstown"
                  link="https://www.newzealand.com/nz/queenstown/"
                />
                <LinkListItem
                  name="Fiordland"
                  link="https://www.newzealand.com/nz/fiordland/"
                />
                <LinkListItem
                  name="Southland"
                  link="https://www.newzealand.com/nz/southland/"
                />
                <LinkListItem
                  name="Marlborough"
                  link="https://www.newzealand.com/nz/marlborough/"
                />
                <LinkListItem
                  name="Christchruch"
                  link="https://www.newzealand.com/nz/christchurch-canterbury/"
                />
                <LinkListItem
                  name="Waitaki"
                  link="https://www.newzealand.com/nz/waitaki/"
                />
                <LinkListItem
                  name="Centeral Otago"
                  link="https://www.newzealand.com/nz/central-otago/"
                />
                <LinkListItem
                  name="Dunedin"
                  link="https://www.newzealand.com/nz/dunedin-coastal-otago/"
                />
                <LinkListItem
                  name="Clutha"
                  link="https://www.newzealand.com/nz/clutha/"
                />
                <LinkListItem
                  name="Stewart Island"
                  link="https://www.newzealand.com/nz/stewart-island-rakiura/"
                />
              </ListGroup>
            </Col>
            <Col>
              <MapContainer></MapContainer>
            </Col>
          </Row>
        </InnerContainer>
      </OuterContainer>
    </>
  );
}

export default MapSection;
