/* Third Party */
import React from "react";

/* Components */
import MarketingPage from "./Pages/MarketingPage";
import CursorManager from "./Components/Cursor/Context/manager.tsx";
import { Cursor } from "./Components/Cursor";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

/* Functions */

function App() {
  return (
    <CursorManager>
      <Cursor />
      <Header />
      <MarketingPage />
      <Footer />
    </CursorManager>
  );
}

export default App;
