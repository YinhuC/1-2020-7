/* Third Party */
import React from 'react';
import { Route } from 'react-router-dom';

/* Components */
import MainComponent from '../../Components/LocationSection';
import image1 from '../../Images/Optimized-AS39-Marlborough-Sounds-Marlborough-Rob-Suisted-min.jpg';

/* Functions */

const routes = [
  {
    color: 'rgb(0, 37, 56)',
    image: image1,
    path: 'Auckland',
  },
  {
    color: 'rgb(0, 37, 56)',
    image: image1,
    path: 'Rotorua',
  },
  {
    color: 'rgb(0, 37, 56)',
    image: image1,
    path: 'Taupo',
  },
  {
    color: 'rgb(0, 37, 56)',
    image: image1,
    path: 'Coromandel',
  },
  {
    color: 'rgb(0, 37, 56)',
    image: image1,
    path: 'Ruapehu',
  },
  {
    color: 'rgb(0, 37, 56)',
    image: image1,
    path: 'Marlborough',
  },
  {
    color: 'rgb(0, 37, 56)',
    image: image1,
    path: 'Queenstown',
  },
  {
    color: 'rgb(0, 37, 56)',
    image: image1,
    path: 'Christchurch',
  },
  {
    color: 'rgb(0, 37, 56)',
    image: image1,
    path: 'Wanaka',
  },
];

function LocationPage() {
  return (
    <>
      {routes.map((route, index) => (
        <Route key={index} path={'/location/' + route.path} exact={route.exact}>
          <MainComponent
            image={route.image}
            locationName={route.path}
            colour={route.color}
          />
        </Route>
      ))}
    </>
  );
}

export default LocationPage;
