import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import AppRouter from "./app-router";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <div className="container">
          <AppRouter></AppRouter>
        </div>
      </div>
    </Router>
  );
}

export default App;
