/* Third Party */
import React, { useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import Teaser from '../../../Components/Teaser';
import { location, info, imageLinks, links, footer, header } from './constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

/* Components */
import { TeaserContainer, BumperSection } from './style';

/* Functions */

function RegionSection() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from('#bottom-slide-bumper', {
      delay: 0.1,
      duration: 1,
      y: 20,
      opacity: 0,
      stagger: 0.1,
      ease: 'power2',

      scrollTrigger: {
        trigger: '#bottom-slide-bumper',
      },
    });

    gsap.from(['#teaser-0', '#teaser-1', '#teaser-2'], {
      delay: 0.5,
      duration: 1,
      y: 20,
      opacity: 0,
      stagger: 0.1,
      ease: 'power2',

      scrollTrigger: {
        trigger: '#teaser-0',
      },
    });
  });

  const Teasers = React.memo(() =>
    location.map((currentLocation, i) => (
      <Col
        id={`teaser-${i}`}
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
        <h2 id='bottom-slide-bumper'>Plan Your Journey</h2>
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
