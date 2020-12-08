/* Third Party */
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

/* Components */
import MarketingPage from "./Pages/MarketingPage";
import CursorManager from "./Components/Cursor/Context/manager.tsx";
import { Cursor } from "./Components/Cursor";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Error from "./Pages/ErrorPage";
import NelsonTasman from "./Pages/LocationPages/NelsonTasman";
import Auckland from "./Pages/LocationPages/Auckland";
import Waikato from "./Pages/LocationPages/Waikato";
import Rotorua from "./Pages/LocationPages/Rotorua";

/* Functions */

function App() {
  return (
    <CursorManager>
      <Cursor />
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/explore" /> :
          </Route>
          <Route path="/explore">
            <Header />
            <MarketingPage />
          </Route>
          <Route path="/location/rotorua">
            <Rotorua />
          </Route>
          <Route path="/location/nelson-tasman">
            <NelsonTasman />
          </Route>
          <Route path="/location/auckland">
            <Auckland />
          </Route>
          <Route path="/location/waikato">
            <Waikato />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </CursorManager>
  );
}

export default App;
