/* Third Party */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import useAxiosFetch from '../../Hooks/useAxiosFetch';

/* Components */
import {
  HeaderContainer,
  MainContainer,
  ImageContainer,
  TopContainer,
  LocationText,
  DataContainer,
} from './style';

/* Functions */

function LocationPage({ route }) {
  // Animations
  const locationContainerRef = useRef(null);
  const locationTextRef = useRef(null);
  const imageRef = useRef(null);
  useEffect(() => {
    gsap.from(locationContainerRef.current, {
      duration: 1.5,
      x: '-200vh',
      ease: 'power2',
    });
    gsap.from(imageRef.current, {
      delay: 0.5,
      duration: 1.5,
      y: '-100vh',
      opacity: 0,
      ease: 'power2',
    });
    gsap.from(locationTextRef.current, {
      delay: 1.5,
      duration: 1,
      y: 20,
      opacity: 0,
      ease: 'power2',
      stagger: 1,
    });
  }, []);

  // Get data
  const { colour, image, path } = route;
  const { data, hasErrored, errorMessage } = useAxiosFetch({
    path,
  });
  let activities;
  if (hasErrored) return console.log(errorMessage);
  if (data !== null) {
    activities = data.map((item, index) => {
      return (
        <div key={index}>
          {item.name},{item.distance},{item.lat},{item.lng}
        </div>
      );
    });
  }

  return (
    <MainContainer>
      <HeaderContainer className='flex-column flex-md-row'>
        <ImageContainer
          ref={imageRef}
          style={{ backgroundImage: `url(${image})` }}
        ></ImageContainer>
        <TopContainer
          ref={locationContainerRef}
          style={{ backgroundColor: colour }}
        >
          <LocationText ref={locationTextRef}>{path}</LocationText>
        </TopContainer>
      </HeaderContainer>

      <DataContainer>{activities}</DataContainer>
    </MainContainer>
  );
}

export default LocationPage;
