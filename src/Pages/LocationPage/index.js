/* Third Party */
import React from "react";

/* Components */
import image1 from "../../Images/Optimized-20-Napier-Hawkes-Bay-Graeme-Murray-min.jpg";
import { MainContainer, ImageContainer } from "./style";
import Header from "../../Components/Header";

/* Functions */

function LocationPage() {
  return (
    <MainContainer>
      <Header />
      <ImageContainer
        style={{ backgroundImage: `url(${image1})` }}
      ></ImageContainer>
    </MainContainer>
  );
}

export default LocationPage;
