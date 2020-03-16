import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AboutPage from "./Pages/About";
import FeedbackPage from "./Pages/Feedback";
import HelpPage from "./Pages/Help";
import HomePage from "./Pages/Home";
import SettingsPage from "./Pages/Settings";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/settings">
            <SettingsPage />
          </Route>
          <Route path="/feedback">
            <FeedbackPage />
          </Route>
          <Route path="/help">
            <HelpPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
