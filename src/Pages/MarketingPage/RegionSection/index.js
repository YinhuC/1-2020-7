/* Third Party */
import React, { useEffect, useRef } from 'react';
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

  const bottomSlideBumper = useRef(null);

  useEffect(() => {
    gsap.from(bottomSlideBumper.current, {
      delay: 0.1,
      duration: 1,
      y: 20,
      opacity: 0,
      stagger: 0.1,
      ease: 'power2',

      scrollTrigger: {
        trigger: bottomSlideBumper.current,
      },
    });
  });

  const Teasers = React.memo(() =>
    location.map((currentLocation, i) => (
      <Col
        key={`teaser-col-${i}`}
        className='col-xl-4 col-lg-6 col-sm-12 pb-5 mb-3 d-flex justify-content-center'
      >
        <Teaser
          header={header[i]}
          image={imageLinks[i]}
          title={currentLocation}
          text={info[i]}
          key={`teaser-${i}`}
          imageId={`teaser-${i}`}
          url={'//www.newzealand.com/nz/' + links[i]}
          footer={footer[i]}
        />
      </Col>
    ))
  );

  return (
    <>
      <BumperSection>
        <h2 ref={bottomSlideBumper}>Plan Your Journey</h2>
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
