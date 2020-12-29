import logo from "./logo.svg";
import "./App.css";
import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonText: "this is the initial text",
    };
  }

  buttonClick = () => {
    this.setState({ buttonText: "this is updated text" });
  };

  render() {
    const { buttonText } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.buttonClick}>{buttonText}</button>
        </header>
      </div>
    );
  }
}
