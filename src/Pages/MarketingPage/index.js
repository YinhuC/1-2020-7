/* Third Party */
import React from 'react';

/* Components */
import HeaderSection from './HeaderSection';
import SlideSection from './SlideSection';
import CovidSection from './CovidSection';
import RegionSection from './RegionSection';
import { Main } from './style';

/* Functions */

function MarketingPage() {
  return (
    <Main>
      <HeaderSection />
      <SlideSection />
      <RegionSection />
      <CovidSection />
    </Main>
  );
}

export default MarketingPage;
