import React from "react";
import LoginBox from "./components/login";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>

      <div className="container">
        <LoginBox></LoginBox>
      </div>
    </div>
  );
}

export default App;
