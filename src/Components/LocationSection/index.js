/* Third Party */
import React, { useEffect } from 'react';

/* Components */
import {
  MainContainer,
  ImageContainer,
  TopContainer,
  LocationText,
} from './style';
import Transition from '../../Utils/PageTransition/transition';

/* Functions */

function LocationPage({ image, locationName, colour }) {
  // So page doesn't load halfway down the page
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <MainContainer className='flex-column flex-md-row'>
      <Transition />
      <ImageContainer
        style={{ backgroundImage: `url(${image})` }}
      ></ImageContainer>
      <TopContainer style={{ backgroundColor: colour }}>
        <LocationText>{locationName}</LocationText>
      </TopContainer>
    </MainContainer>
  );
}

export default LocationPage;
