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
import image1 from "../../../Images/Optimized-20-Napier-Hawkes-Bay-Graeme-Murray-min.jpg";
import image2 from "../../../Images/Optimized-5552-Dunedin-Otago-MilesHolden-min.jpg";
import image3 from "../../../Images/U087-Devonport-Auckland-Tourism-New-Zealand-min.jpg";
import image4 from "../../../Images/Optimized-AC102-Lake-Pukaki-Canterbury-Miles-Holden-min.jpg";
import image5 from "../../../Images/Optimized-AS39-Marlborough-Sounds-Marlborough-Rob-Suisted-min.jpg";
import image6 from "../../../Images/Optimized-CU38-Hobbiton-Matamata--Waikato-Ian-Brodie-min.jpg";
import image7 from "../../../Images/Optimized-EX22051_Abel_Tasman_Fraser_Clements-min.jpg";
import image8 from "../../../Images/Optimized-L137-Rippon-Vineyard-Lake-Wanaka-David-Wall-min.jpg";
import image9 from "../../../Images/Optimized-Lake-Rotorua-Julian-Apse-min.jpg";

/* Functions */

/*https://sudo.isl.co/translate-vertical-horizontal/*/

export default function SlideSection() {
  const location = [
    "Lake Rotorua",
    "Napier",
    "Dunedin",
    "Devonport",
    "Lake Pukaki",
    "Marlborough Sounds",
    "Hobbiton",
    "Split Apple Rock",
    "Rippon Vineyard",
  ];
  const info = [
    "Rotorua",
    "Hawke's Bay",
    "Otago",
    "Auckland",
    "Canterbury",
    "Marlborough",
    "Waikato",
    "Nelson Tasman",
    "Lake Wanaka",
  ];
  const arrayImages = [
    image9,
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
              <Cards />
            </CardsContainer>
          </HorizontalScroll>
        </HorizontalSection>
      </Main>
    </div>
  );
}
