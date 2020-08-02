import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

class App extends Component {
  render() {
    return (
      /* Wrapper wont be parent of Navbar - only placed here to not throw JSX err of needing a parent el */
      <Wrapper>
        <Navbar/>
      </Wrapper>
    );
  }
}

export default App;
