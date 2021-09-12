import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Homepage from "./Homepage";
import React, { useState } from "react";
import EntryPage from "./EntryPage";

function App() {
  const [showBg, setShowBg] = useState(true);
  const showEntryPage = () => {
    setShowBg(false);
  };
  return (
    <React.Fragment>
      {showBg ? (
        <EntryPage showEntryPage={showEntryPage} />
      ) : (
        <Router>
          <Route path="/Homepage">
            <Homepage />
          </Route>
        </Router>
      )}
    </React.Fragment>
  );
}

export default App;
