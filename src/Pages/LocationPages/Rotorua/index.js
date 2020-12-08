/* Third Party */
import React from "react";

/* Components */
import MainComponent from "../../../Components/LocationSection";
import image from "../../../Images/Optimized-Lake-Rotorua-Julian-Apse-min.jpg";

/* Functions */

function Rotorua() {
  return (
    <>
      <MainComponent
        image={image}
        locationName="Rotorua"
        colour="rgb(14, 35, 51)"
      />
    </>
  );
}

export default Rotorua;
