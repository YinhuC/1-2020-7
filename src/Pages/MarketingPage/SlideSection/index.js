/* Third Party */
import React from 'react';

/* Components */
import HorizontalScroll from '../../../Components/HorizontalScroll';
import {
  BumperSection,
  CardsContainer,
  GlobalStyle,
  HorizontalSection,
  Main,
  VerticalContainer,
} from './style';
import CustomCard from '../../../Components/Card';
import { location, info, arrayImages } from './constants';

/* Functions */

/*https://sudo.isl.co/translate-vertical-horizontal/*/

export default function SlideSection() {
  const Cards = React.memo(() =>
    arrayImages.map((currentImage, i) => (
      <CustomCard
        image={currentImage}
        header={location[i]}
        subheader={info[i]}
        key={`card-${i}`}
        url={'/location/' + info[i].replace(/\s+/g, '-').toLowerCase()}
      />
    ))
  );

  return (
    <div className='slide'>
      <GlobalStyle />
      <Main>
        <BumperSection>
          <h2>Start Exploring Wherever You Want</h2>
        </BumperSection>
        <HorizontalSection className='d-none d-md-flex'>
          <HorizontalScroll>
            <CardsContainer>
              <Cards />
            </CardsContainer>
          </HorizontalScroll>
        </HorizontalSection>

        <HorizontalSection className='d-flex d-md-none'>
          <VerticalContainer>
            <CardsContainer className='vertical-cards-container flex-column'>
              <Cards />
            </CardsContainer>
          </VerticalContainer>
        </HorizontalSection>
      </Main>
    </div>
  );
}
