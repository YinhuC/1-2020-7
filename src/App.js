/* Third Party */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

/* Components */
import MarketingPage from './Pages/MarketingPage';
import LocationPages from './Pages/LocationPages';
import CursorManager from './Components/Cursor/Context/manager.tsx';
import { Cursor } from './Components/Cursor';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Error from './Pages/ErrorPage';

/* Functions */

function App() {
  return (
    <CursorManager>
      <Cursor />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/explore' /> :
          </Route>
          <Route path='/explore'>
            <Header />
            <MarketingPage />
          </Route>
          <LocationPages />
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </CursorManager>
  );
}

export default App;
