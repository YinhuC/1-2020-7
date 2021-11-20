/* Third Party */
import React from 'react';
import { Col, Row } from 'reactstrap';
import Teaser from '../../../Components/Teaser';
import { location, info, imageLinks, links, footer, header } from './constants';

/* Components */
import { TeaserContainer, BumperSection } from './style';

/* Functions */

function RegionSection() {
  const Teasers = React.memo(() =>
    location.map((currentLocation, i) => (
      <Col
        key={`teaser-col-${i}`}
        className='col-lg-4 col-md-6 col-sm-12 pb-5 mb-3 d-flex justify-content-center'
      >
        <Teaser
          header={header[i]}
          image={imageLinks[i]}
          title={currentLocation}
          text={info[i]}
          key={`teaser-${i}`}
          url={'//www.newzealand.com/nz/' + links[i]}
          footer={footer[i]}
        />
      </Col>
    ))
  );

  return (
    <>
      <BumperSection>
        <h2>Plan Your Journey</h2>
      </BumperSection>
      <TeaserContainer>
        <Row>
          <Teasers />
        </Row>
      </TeaserContainer>
    </>
  );
}

export default RegionSection;
