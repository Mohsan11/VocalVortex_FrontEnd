import React, { Component } from "react";
import "./App.css";
import VocalVortex from "./Components/VocalVortex/VocalVortex";
import Home from "./Components/Home/home";
import Navigation from "./Components/Nav/Nav";
import AppGuide from "./Components/Guide/guide";
import AboutUs from "./Components/About US/About";
class App extends Component {
  constructor() {
    super();
    this.state = {
      page: "home",
    };
  }

  onChangeHome = () => {
    this.setState({ page: "home" });
  };
  onChangeGuide = () => {
    this.setState({ page: "guide" });
  };
  onChangeChatBot = () => {
    this.setState({ page: "chatbot" });
  };
  onChangeAboutUs = () => {
    this.setState({ page: "about us" });
  };
  render() {
    const { page } = this.state;
    return (
      <div className="App">
        <Navigation
          onChangeAboutUs={this.onChangeAboutUs}
          onChangeChatBot={this.onChangeChatBot}
          onChangeHome={this.onChangeHome}
          onChangeGuide={this.onChangeGuide}
        />
        {page === "home" ? (
          <Home onChangeChatBot={this.onChangeChatBot} />
        ) : page === "chatbot" ? (
          <VocalVortex />
        ) : page === "about us" ? (
          <AboutUs />
        ) : page === "guide" ? (
          <AppGuide />
        ) : (
          <Home />
        )}
      </div>
    );
  }
}

export default App;
