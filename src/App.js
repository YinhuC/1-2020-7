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
import CursorManager from './Components/Cursor/Context/manager.tsx';
import { Cursor } from './Components/Cursor';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Error from './Pages/ErrorPage';
import Taupo from './Pages/LocationPages/Taupo';
import Auckland from './Pages/LocationPages/Auckland';
import Coromandel from './Pages/LocationPages/Coromandel';
import Rotorua from './Pages/LocationPages/Rotorua';
import Ruapehu from './Pages/LocationPages/Ruapehu';
import Christchurch from './Pages/LocationPages/Christchurch';
import Marlborough from './Pages/LocationPages/Marlborough';
import Queenstown from './Pages/LocationPages/Queenstown';
import Wanaka from './Pages/LocationPages/Wanaka';

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
          <Route path='/location/rotorua'>
            <Rotorua />
          </Route>
          <Route path='/location/taupo'>
            <Taupo />
          </Route>
          <Route path='/location/auckland'>
            <Auckland />
          </Route>
          <Route path='/location/coromandel'>
            <Coromandel />
          </Route>
          <Route path='/location/ruapehu'>
            <Ruapehu />
          </Route>
          <Route path='/location/christchurch'>
            <Christchurch />
          </Route>
          <Route path='/location/marlborough'>
            <Marlborough />
          </Route>
          <Route path='/location/queenstown'>
            <Queenstown />
          </Route>
          <Route path='/location/wanaka'>
            <Wanaka />
          </Route>
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
