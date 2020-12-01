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
} from "./style";
import CustomCard from "../../../Components/Card";
import image from "../../../Images/Optimized-3746-Ahuriri-Valley-North-Otago-Shaun-Jeffers.JPG";
import image1 from "../../../Images/Optimized-0013-Springfield-Canterbury-Matt-Crawford-min.jpg";
import image2 from "../../../Images/Optimized-45-Aoraki-Lake-Pukaki-Will-Patino-min.jpg";
import image3 from "../../../Images/Optimized-48-Milford-Sound-Will-Patino-min.jpg";
import image4 from "../../../Images/Optimized-0914-Castlepoint-Wairarapa-Daniel-Rood-min.jpg";
import image5 from "../../../Images/Optimized-8399-Wanaka-Miles-Holden-min.jpg";

/* Functions */

/*https://sudo.isl.co/translate-vertical-horizontal/*/

export default function SlideSection() {
  const info = [
    "Ahuriri Valley",
    "Springfield",
    "Aoraki Mount Cook National Park",
    "Milford Sound",
    "Castlepoint",
    "Roys Peak",
  ];
  const location = [
    "North Otago",
    "Canterbury",
    "Lake Pukaki",
    "Fiordland",
    "Wairarapa",
    "Wanaka",
  ];
  const arrayImages = [image, image1, image2, image3, image4, image5];
  const SampleCards = React.memo(() =>
    arrayImages.map((currentImage, i) => (
      <CustomCard
        image={currentImage}
        header={location[i]}
        subheader={info[i]}
        key={`sampleCard-${i}`}
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
        <HorizontalSection>
          <HorizontalScroll>
            <CardsContainer>
              <SampleCards />
            </CardsContainer>
          </HorizontalScroll>
        </HorizontalSection>
        <BumperSection>
          <h2>Start the Adventure</h2>
        </BumperSection>
      </Main>
    </div>
  );
}
