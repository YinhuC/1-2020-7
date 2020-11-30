/* Third Party */
import React from "react";

/* Components */
import { CardImage } from "./style";

/* Functions */

function CustomCard({ image }) {
  return (
    <>
      <CardImage style={{ backgroundImage: `url(${image})` }} />
    </>
  );
}

export default CustomCard;
