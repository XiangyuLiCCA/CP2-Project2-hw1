import React, { Component } from "react";

import "./styles.css";

var pages = {
  start: {
    text: "Welcome, traveler! How would you like to get to your destination?",
    leftLabel: "Train",
    middleLabel: "Airplane",
    rightLabel: "Ship",
    leftPage: "onthetrain",
    middlePage: "ontheairplane",
    rightPage: "ontheship"
  },
  onthetrain: {
    text:
      "Welcome aboard the choo-choo train! Please make your way to your seat. What's the number?",
    imageElement: "",
    leftLabel: "12E",
    rightLabel: "97C",
    leftPage: "death",
    rightPage: "life"
  },
  ontheship: {
    text: " ",
    imageElement: "",
    leftLabel: "12E",
    rightLabel: "97C",
    leftPage: "death",
    rightPage: "life"
  },
  ontheairplane: {
    text: " ",
    imageElement: "",
    leftLabel: "3A",
    rightLabel: "36D",
    leftPage: "death",
    rightPage: "life"
  },
  ontheship: {
    text: " ",
    imageElement: "",
    leftLabel: "12E",
    rightLabel: "97C",
    leftPage: "death",
    rightPage: "life"
  },
  ontheship: {
    text: " ",
    imageElement: "",
    leftLabel: "12E",
    rightLabel: "97C",
    leftPage: "death",
    rightPage: "life"
  },
  ontheship: {
    text: " ",
    imageElement: "",
    leftLabel: "12E",
    rightLabel: "97C",
    leftPage: "death",
    rightPage: "life"
  },
  ontheship: {
    text: " ",
    imageElement: "",
    leftLabel: "12E",
    rightLabel: "97C",
    leftPage: "death",
    rightPage: "life"
  },
  ontheship: {
    text: " ",
    imageElement: "",
    leftLabel: "12E",
    rightLabel: "97C",
    leftPage: "death",
    rightPage: "life"
  },
  ontheship: {
    text: " ",
    imageElement: "",
    leftLabel: "12E",
    rightLabel: "97C",
    leftPage: "death",
    rightPage: "life"
  },
  ontheship: {
    text: " ",
    imageElement: "",
    leftLabel: "12E",
    rightLabel: "97C",
    leftPage: "death",
    rightPage: "life"
  },
  ontheship: {
    text: " ",
    imageElement: "",
    leftLabel: "12E",
    rightLabel: "97C",
    leftPage: "death",
    rightPage: "life"
  },
  ontheship: {
    text: " ",
    imageElement: "",
    leftLabel: "12E",
    rightLabel: "97C",
    leftPage: "death",
    rightPage: "life"
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start"
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  render() {
    var pageData = pages[this.state.page];
    var leftLabel;
    var middleLabel;
    var rightLabel;
    var imageElement = "";

    if (pageData.image) {
      imageElement = <img src={pageData.image} width="200" />;
    }

    if (pageData.rightLabel) {
      rightLabel = (
        <button onClick={() => this.goToPage(pageData.rightPage)}>
          {pageData.rightLabel}
        </button>
      );
    }

    if (pageData.leftLabel) {
      leftLabel = (
        <button onClick={() => this.goToPage(pageData.leftPage)}>
          {pageData.leftLabel}
        </button>
      );
    }

    if (pageData.middleLabel) {
      middleLabel = (
        <button onClick={() => this.goToPage(pageData.middlePage)}>
          {pageData.middleLabel}
        </button>
      );
    }
    return (
      <div className="App">
        <p>
          {pageData.text}
          <br />
          {imageElement}
          {middleLabel}
          {leftLabel}
          {rightLabel}
        </p>
        {/* <button onClick={() => this.goToPage(pageData.leftPage)}>
          {pageData.leftLabel}
        </button> */}
      </div>
    );
  }
}

export default App;
