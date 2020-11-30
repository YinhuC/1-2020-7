import React from "react";
import HorizontalScroll from "../../../Components/HorizontalScroll";
import {
  BumperSection,
  CardsContainer,
  GlobalStyle,
  HorizontalSection,
  Main,
  SampleCard,
} from "./style";

/*https://sudo.isl.co/translate-vertical-horizontal/*/

export default function SlideSection() {
  const SampleCards = React.memo(() =>
    Array(5)
      .fill(0)
      .map((_e, i) => <SampleCard key={`sampleCard-${i}`} />)
  );
  return (
    <div>
      <GlobalStyle />
      <Main>
        <BumperSection>
          <h2>Explore New Zealand In Your Own Way</h2>
        </BumperSection>
        <HorizontalSection>
          <HorizontalScroll>
            <CardsContainer>
              <SampleCards />
            </CardsContainer>
          </HorizontalScroll>
        </HorizontalSection>
        <BumperSection>
          <h2>You have left the horizontal horizontal scroll section</h2>
        </BumperSection>
      </Main>
    </div>
  );
}
