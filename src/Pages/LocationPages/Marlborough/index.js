/* Third Party */
import React from 'react';

/* Components */
import MainComponent from '../../../Components/LocationSection';
import image from '../../../Images/U087-Devonport-Auckland-Tourism-New-Zealand-min.jpg';

/* Functions */

function Marlborough() {
  return (
    <>
      <MainComponent
        image={image}
        locationName='Marlborough'
        colour='rgb(6, 20, 43)'
      />
    </>
  );
}

export default Marlborough;
