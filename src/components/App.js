import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  buttonClickHandler() {
    this.setState({
      renderBall: true
    });
  }

  renderBallOrButton() {
    if (this.state.renderBall) {
      return (
        <div
          className="ball"
          style={{ left: `${this.state.posi}px`, position: "absolute" }}
        >
        
        </div>
      );
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  // Bind ArrowRight keydown event
  componentDidMount() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 39 && this.state.renderBall) {
        const newPos = this.state.posi + 5;
        this.setState({
          posi: newPos,
          ballPosition: { left: `${newPos}px` }
        });
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <div className="playground">
        {this.renderBallOrButton()}
      </div>
    );
  }
}

export default App;
