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
import image from "../../../Images/3746-Ahuriri-Valley-North-Otago-Shaun-Jeffers.JPG";
import image1 from "../../../Images/0013-Springfield-Canterbury-Matt-Crawford-min.jpg";
import image2 from "../../../Images/45-Aoraki-Lake-Pukaki-Will-Patino-min.jpg";
import image3 from "../../../Images/48-Milford-Sound-Will-Patino-min.jpg";
import image4 from "../../../Images/0914-Castlepoint-Wairarapa-Daniel-Rood-min.jpg";
import image5 from "../../../Images/8399-Wanaka-Miles-Holden-min.jpg";

/* Functions */

/*https://sudo.isl.co/translate-vertical-horizontal/*/

export default function SlideSection() {
  const arrayImages = [image, image1, image2, image3, image4, image5];
  const SampleCards = React.memo(() =>
    arrayImages.map((currentImage, i) => (
      <CustomCard image={currentImage} key={`sampleCard-${i}`} />
    ))
  );
  return (
    <div className="slide">
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
