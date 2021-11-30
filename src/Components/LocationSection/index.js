/* Third Party */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import useAxiosFetch from '../../Hooks/useAxiosFetch';

/* Components */
import {
  MainContainer,
  ImageContainer,
  TopContainer,
  LocationText,
} from './style';
import { Container } from 'reactstrap';

/* Functions */

function LocationPage({ route }) {
  const { colour, image, locationName, lat, long } = route;

  const locationContainerRef = useRef(null);
  const locationTextRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(locationTextRef.current, {
      delay: 1.5,
      duration: 1,
      y: 20,
      opacity: 0,
      ease: 'power2',
      stagger: 1,
    });

    gsap.from(imageRef.current, {
      delay: 0.5,
      duration: 1.5,
      y: '-100vh',
      opacity: 0,
      ease: 'power2',
    });

    gsap.from(locationContainerRef.current, {
      duration: 1.5,
      x: '-200vh',
      ease: 'power2',
    });
  }, []);

  const { data, isLoading, hasErrored, errorMessage } = useAxiosFetch({
    categories: `"NATURE"`,
    lat,
    long,
    maxRadius: 50000,
  });
  if (hasErrored) return <div>{errorMessage}</div>;

  if (isLoading || !data) return <div>Loading...</div>;

  console.log(data);

  return (
    <MainContainer className='flex-column flex-md-row'>
      <ImageContainer
        ref={imageRef}
        style={{ backgroundImage: `url(${image})` }}
      ></ImageContainer>
      <TopContainer
        ref={locationContainerRef}
        style={{ backgroundColor: colour }}
      >
        <LocationText ref={locationTextRef}>{locationName}</LocationText>
      </TopContainer>

      <Container>
        {data.map((item, index) => {
          return (
            <div key={index}>
              {item.name},{item.distance},{item.lat},{item.lng}
            </div>
          );
        })}
      </Container>
    </MainContainer>
  );
}

export default LocationPage;
