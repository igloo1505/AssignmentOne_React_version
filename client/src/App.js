import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";

const App = () => {
  useEffect(() => {
    M.AutoInit();
    // es-lint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div
          style={{
            maxWidth: "min(960px, 80%)",
            margin: "auto"
          }}
          className="main"
        >
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={ContactForm} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
