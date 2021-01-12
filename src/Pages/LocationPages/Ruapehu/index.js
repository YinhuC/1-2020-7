/* Third Party */
import React from 'react';

/* Components */
import MainComponent from '../../../Components/LocationSection';
import image from '../../../Images/U087-Devonport-Auckland-Tourism-New-Zealand-min.jpg';

/* Functions */

function Ruapehu() {
  return (
    <>
      <MainComponent
        image={image}
        locationName='Ruapehu'
        colour='rgb(6, 20, 43)'
      />
    </>
  );
}

export default Ruapehu;
