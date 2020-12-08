/* Third Party */
import React from "react";

/* Components */
import MainComponent from "../../../Components/LocationSection";
import image from "../../../Images/Optimized-CU38-Hobbiton-Matamata--Waikato-Ian-Brodie-min.jpg";

/* Functions */

function Waikato() {
  return (
    <>
      <MainComponent
        image={image}
        locationName="Waikato"
        colour="rgb(6, 23, 3)"
      />
    </>
  );
}

export default Waikato;
