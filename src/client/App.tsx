import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AboutPage from "./Pages/About";
import FeedbackPage from "./Pages/Feedback";
import HelpPage from "./Pages/Help";
import HomePage from "./Pages/Home";
import ItemPage from "./Pages/Item";
import ResultsPage from "./Pages/Results";
import SettingsPage from "./Pages/Settings";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/about">
            <AboutPage test="About Page" />
          </Route>
          <Route path="/settings">
            <SettingsPage test="Settings Page" />
          </Route>
          <Route path="/feedback">
            <FeedbackPage test="Feedback Page" />
          </Route>
          <Route path="/help">
            <HelpPage test="Help Page" />
          </Route>
          <Route path="/">
            <HomePage test="Home Page" />
            <ResultsPage test="Results Page" />
            <ItemPage itemName="Item Page Item Name" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
