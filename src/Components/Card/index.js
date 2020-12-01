/* Third Party */
import React from "react";

/* Components */
import { CardImage, ImageContainer } from "./style";

/* Functions */

function CustomCard({ image }) {
  return (
    <ImageContainer>
      <CardImage style={{ backgroundImage: `url(${image})` }} />
    </ImageContainer>
  );
}

export default CustomCard;
