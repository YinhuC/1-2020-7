/* Third Party */
import React from 'react';

/* Components */
import MainComponent from '../../../Components/LocationSection';
import image from '../../../Images/U087-Devonport-Auckland-Tourism-New-Zealand-min.jpg';

/* Functions */

function Queenstown() {
  return (
    <>
      <MainComponent
        image={image}
        locationName='Queenstown'
        colour='rgb(6, 20, 43)'
      />
    </>
  );
}

export default Queenstown;
