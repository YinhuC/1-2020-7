/* Third Party */
import React from "react";

/* Components */
import HeaderSection from "./HeaderSection";
import SlideSection from "./SlideSection";
import CovidSection from "./CovidSection";
import MapSection from "./MapSection";
import { Main } from "./style";

/* Functions */

function MarketingPage() {
  return (
    <Main>
      <HeaderSection />
      <SlideSection />
      <MapSection />
      <CovidSection />
    </Main>
  );
}

export default MarketingPage;
