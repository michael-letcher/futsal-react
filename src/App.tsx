import React from "react";
import "./App.css";
import LoginBox from "./components/login/login";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>

      <LoginBox></LoginBox>
    </div>
  );
}

export default App;
