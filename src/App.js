/* Third Party */
import React from "react";

/* Components */
import MarketingPage from "./Pages/MarketingPage";
import CursorManager from "./Components/Cursor/Context/manager.tsx";
import { Cursor } from "./Components/Cursor";
import Header from "./Components/Header";

/* Functions */

function App() {
  return (
    <CursorManager>
      <Cursor />
      <Header />
      <MarketingPage />
    </CursorManager>
  );
}

export default App;
