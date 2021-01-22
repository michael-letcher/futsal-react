import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import AppRouter from "./app-router";
import Navbar from "./components/navbar/navbar";

import Home from "./pages/home";
import About from "./pages/about";
import Leagues from "./pages/leagues";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/leagues" component={Leagues} />
          </Switch>

          {/* <LoginBox></LoginBox> */}
          {/* <AppRouter></AppRouter> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
