/* Third Party */
import React from "react";

/* Components */
import HorizontalScroll from "../../../Components/HorizontalScroll";
import {
  BumperSection,
  CardsContainer,
  GlobalStyle,
  HorizontalSection,
  Main,
  VerticalContainer,
} from "./style";
import CustomCard from "../../../Components/Card";
import image1 from "../../../Images/U087-Devonport-Auckland-Tourism-New-Zealand-min.jpg";
import image2 from "../../../Images/Optimized-Lake-Rotorua-Julian-Apse-min.jpg";
import image3 from "../../../Images/Optimized-L351-Lake-Taupo-Lake-Taupo-Destination-Lake-Taupo-min.jpg";
import image4 from "../../../Images/Optimized-L344-Mount-Ruapehu-Ruapehu-Penny-Egleton-min.jpg";
import image5 from "../../../Images/Optimized-AS39-Marlborough-Sounds-Marlborough-Rob-Suisted-min.jpg";
import image6 from "../../../Images/Optimized-0864-Glenorchy-Queenstown-Miles-Holden-min.jpg";
import image7 from "../../../Images/Optimized-9180-Port-Hills-Christchurch-Julian-Apse-min.jpg";
import image8 from "../../../Images/Optimized-L137-Rippon-Vineyard-Lake-Wanaka-David-Wall-min.jpg";

/* Functions */

/*https://sudo.isl.co/translate-vertical-horizontal/*/

export default function SlideSection() {
  const location = [
    "Devonport",
    "Lake Rotorua",
    "Lake Taupo",
    "Mount Ruapehu",
    "Marlborough Sounds",
    "Glenorchy",
    "Port Hills",
    "Rippon Vineyard",
  ];
  const info = [
    "Auckland",
    "Rotorua",
    "Taupo",
    "Ruapehu",
    "Marlborough",
    "Queenstown",
    "Christchurch",
    "Wanaka",
  ];
  const arrayImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  const Cards = React.memo(() =>
    arrayImages.map((currentImage, i) => (
      <CustomCard
        image={currentImage}
        header={location[i]}
        subheader={info[i]}
        key={`card-${i}`}
        url={"/location/" + info[i].replace(/\s+/g, "-").toLowerCase()}
      />
    ))
  );

  return (
    <div className="slide">
      <GlobalStyle />
      <Main>
        <BumperSection>
          <h2>Start Exploring Wherever You Want</h2>
        </BumperSection>
        <HorizontalSection className="d-none d-md-flex">
          <HorizontalScroll>
            <CardsContainer>
              <Cards />
            </CardsContainer>
          </HorizontalScroll>
        </HorizontalSection>

        <HorizontalSection className="d-flex d-md-none">
          <VerticalContainer>
            <CardsContainer className="vertical-cards-container flex-column">
              <Cards />
            </CardsContainer>
          </VerticalContainer>
        </HorizontalSection>
      </Main>
    </div>
  );
}
