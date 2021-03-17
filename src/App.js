import React, { Component } from "react";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    score: 0,
  };
  render() {
    return (
      <React.Fragment>
        <NavBar score={this.state.score} />
      </React.Fragment>
    );
  }
}

export default App;
