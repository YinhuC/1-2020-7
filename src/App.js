/* Third Party */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { gsap } from 'gsap';

/* Components */
import MarketingPage from './Pages/MarketingPage';
import CursorManager from './Components/Cursor/Context/manager.tsx';
import { Cursor } from './Components/Cursor';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Error from './Pages/ErrorPage';
import LocationComponent from './Components/LocationSection';
import { locationRoutes } from './Pages/LocationPages/constants';

const routes = [
  {
    path: '/',
    name: 'MarketingPage',
    Component: MarketingPage,
  },
];

/* Functions */

function App() {
  const onEnter = (node) => {
    gsap.from(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: 30,
        delay: 0.6,
        ease: 'power3.InOut',
        opacity: 0,
        stagger: {
          amount: 0.6,
        },
      }
    );
  };

  const onExit = (node) => {
    gsap.to(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: -30,
        ease: 'power3.InOut',
        stagger: {
          amount: 0.2,
        },
      }
    );
  };

  return (
    <CursorManager>
      <Cursor />
      <Header />

      <Router>
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={1200}
                  classNames='page'
                  onExit={onExit}
                  onEntering={onEnter}
                  unmountOnExit
                >
                  <div className='page'>
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}

          {locationRoutes.map((route, index) => (
            <Route
              key={`location-page-${index}`}
              path={'/location/' + route.path}
              exact={route.exact}
            >
              <LocationComponent
                image={route.image}
                locationName={route.path}
                colour={route.color}
              />
            </Route>
          ))}

          <Route path='/404' component={Error} />
          <Redirect to='/404' />
        </Switch>
      </Router>

      <Footer />
    </CursorManager>
  );
}

export default App;
