/* Third Party */
import React from 'react';
import { Route } from 'react-router-dom';

/* Components */
import MainComponent from '../../Components/LocationSection';
import { routes } from './constants';

/* Functions */

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
