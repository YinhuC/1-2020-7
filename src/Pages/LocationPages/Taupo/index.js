/* Third Party */
import React from 'react';

/* Components */
import MainComponent from '../../../Components/LocationSection';
import image from '../../../Images/Optimized-EX22051_Abel_Tasman_Fraser_Clements-min.jpg';

/* Functions */

function Taupo() {
  return (
    <>
      <MainComponent
        image={image}
        locationName='Taupo'
        colour='rgb(0, 37, 56)'
      />
    </>
  );
}

export default Taupo;
