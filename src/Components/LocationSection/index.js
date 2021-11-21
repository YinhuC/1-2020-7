/* Third Party */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/* Components */
import {
  MainContainer,
  ImageContainer,
  TopContainer,
  LocationText,
} from './style';
import Transition from '../../Utils/PageTransition';

/* Functions */

function LocationPage({ image, locationName, colour }) {
  // So page doesn't load halfway down the page
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const locationTextRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(locationTextRef.current, {
      delay: 1,
      duration: 1,
      y: 20,
      opacity: 0,
      ease: 'power2',
    });

    gsap.from(imageRef.current, {
      duration: 1.2,
      y: '-100vh',
      opacity: 0,
      ease: 'power2',
    });
  });

  return (
    <MainContainer className='flex-column flex-md-row'>
      <Transition colour={colour} />
      <ImageContainer
        ref={imageRef}
        style={{ backgroundImage: `url(${image})` }}
      ></ImageContainer>
      <TopContainer style={{ backgroundColor: colour }}>
        <LocationText ref={locationTextRef}>{locationName}</LocationText>
      </TopContainer>
    </MainContainer>
  );
}

export default LocationPage;
