/* Third Party */
import React from 'react';

/* Components */
import HeaderSection from './HeaderSection';
import SlideSection from './SlideSection';
import CovidSection from './CovidSection';
import RegionSection from './RegionSection';
// import MapSection from './MapSection';
import { Main } from './style';

/* Functions */

function MarketingPage() {
  return (
    <Main>
      <HeaderSection />
      <SlideSection />
      {/* <MapSection /> */}
      <RegionSection />
      <CovidSection />
    </Main>
  );
}

export default MarketingPage;
