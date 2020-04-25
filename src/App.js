import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    box: [
      { text: "", clickEvent: true },
      { text: "", clickEvent: true },
      { text: "", clickEvent: true },
      { text: "", clickEvent: true },
      { text: "", clickEvent: true },
      { text: "", clickEvent: true },
      { text: "", clickEvent: true },
      { text: "", clickEvent: true },
      { text: "", clickEvent: true },
    ],
    palyText: "X",
    eventContinue: true,
    winMsg: "",
    winnerText: "",
    winStyle: null,
  };
  drawCheck = () => {
    let x = 0;
    const box = this.state.box;
    box.map((val) => {
      if (val.clickEvent === false) {
        x++;
      }
    });
    return x;
  };
  winCheck = () => {
    const box = this.state.box;
    let result = "";
    const wCheck = (a, b, c) => {
      const xWin = a.text === "X" && b.text === "X" && c.text === "X";
      const oWin = a.text === "O" && b.text === "O" && c.text === "O";
      if (xWin) {
        console.log("X is win");
        result = "X";
      } else if (oWin) {
        console.log("O is win");
        result = "O";
      }
    };
    wCheck(box[0], box[1], box[2]);
    wCheck(box[3], box[4], box[5]);
    wCheck(box[6], box[7], box[8]);
    wCheck(box[0], box[3], box[6]);
    wCheck(box[1], box[4], box[7]);
    wCheck(box[2], box[5], box[8]);
    wCheck(box[0], box[4], box[8]);
    wCheck(box[2], box[4], box[6]);
    if (result) {
      return result;
    }
    return result;
  };
  playGame = () => {
    if (this.state.eventContinue) {
      if (this.state.palyText === "X") {
        this.setState({
          palyText: "O",
        });
      } else {
        this.setState({
          palyText: "X",
        });
      }
      return this.state.palyText;
    }
  };
  handleClick = (x) => {
    const id = x.target.id;
    if (this.state.box[id].clickEvent) {
      const arr = this.state.box;
      arr.splice(id, 1, {
        text: this.playGame(),
        clickEvent: false,
      });
      const wc = this.winCheck();
      if (wc) {
        this.setState({
          boxText: arr,
          eventContinue: false,
          winMsg: wc,
          winnerText: "Winner!",
          winStyle: { transform: "scale(1)" },
        });
      } else if (this.drawCheck() === 9) {
        this.setState({
          boxText: arr,
          eventContinue: false,
          winMsg: "X|O",
          winnerText: "Draw!",
          winStyle: { transform: "scale(1)" },
        });
      } else {
        this.setState({
          boxText: arr,
        });
      }
    }
  };
  reloadHandle = () => {
    window.location.reload();
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>Tic Tac Toe</h1>
          <div className="row">
            <div
              className="overlay"
              onClick={this.reloadHandle}
              style={this.state.winStyle}
            >
              <div>
                <h1>{this.state.winMsg}</h1>
                <h2>{this.state.winnerText}</h2>
              </div>
            </div>
            <div className="box" onClick={(e) => this.handleClick(e)} id="0">
              {this.state.box[0].text}
            </div>
            <div className="box y" onClick={(e) => this.handleClick(e)} id="1">
              {this.state.box[1].text}
            </div>
            <div className="box" onClick={(e) => this.handleClick(e)} id="2">
              {this.state.box[2].text}
            </div>
            <div className="box x" onClick={(e) => this.handleClick(e)} id="3">
              {this.state.box[3].text}
            </div>
            <div
              className="box x y"
              onClick={(e) => this.handleClick(e)}
              id="4"
            >
              {this.state.box[4].text}
            </div>
            <div className="box x" onClick={(e) => this.handleClick(e)} id="5">
              {this.state.box[5].text}
            </div>
            <div className="box" onClick={(e) => this.handleClick(e)} id="6">
              {this.state.box[6].text}
            </div>
            <div className="box y" onClick={(e) => this.handleClick(e)} id="7">
              {this.state.box[7].text}
            </div>
            <div className="box" onClick={(e) => this.handleClick(e)} id="8">
              {this.state.box[8].text}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
