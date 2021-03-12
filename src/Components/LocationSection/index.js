/* Third Party */
import React from "react";

/* Components */
import {
  MainContainer,
  ImageContainer,
  TopContainer,
  LocationText,
} from "./style";
import Header from "../Header";

/* Functions */

function LocationPage({ image, locationName, colour }) {
  return (
    <MainContainer className="flex-column flex-md-row">
      <Header />
      <ImageContainer
        style={{ backgroundImage: `url(${image})` }}
      ></ImageContainer>
      <TopContainer style={{ backgroundColor: colour }}>
        <LocationText>{locationName}</LocationText>
      </TopContainer>
    </MainContainer>
  );
}

export default LocationPage;
