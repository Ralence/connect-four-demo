import React, { Component } from "react";
import GameBoard from "./GameBoard";

import { makeGrid } from "../../utils/helpers";

import classes from "./Game.module.css";

class Game extends Component {
  state = {
    playerOneTurn: false,
    board: makeGrid(7, 6),
    winner: null
  };

  handlePlayed = (index, player) => {
    this.setState(prevState => {
      let updated = false;
      const updatedRow = [...prevState.board[index]].map(item => {
        if (item === 0 && updated === false) {
          updated = true;
          return player;
        }
        return item;
      });
      return {
        ...prevState,
        playerOneTurn: !prevState.playerOneTurn,
        board: prevState.board.map((item, ind) => {
          if (ind === index) {
            return updatedRow;
          }
          return item;
        })
      };
    });
  };

  render() {
    return (
      <main className={classes.Main}>
        <GameBoard
          board={this.state.board}
          player={this.state.playerOneTurn ? 1 : 2}
          handlePlayed={this.handlePlayed}
        />
      </main>
    );
  }
}

export default Game;
