import React, { Component } from "react";
import GameBoard from "./GameBoard";

import classes from "./Game.module.css";

class Game extends Component {
  state = {
    playerOneTurn: false,
    board: null,
    winner: null
  };
  render() {
    return (
      <main className={classes.Main}>
        <GameBoard />
      </main>
    );
  }
}

export default Game;
