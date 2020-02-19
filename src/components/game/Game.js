import React, { Component } from "react";
import GameBoard from "./GameBoard";
import GameInfo from "./GameInfo";
import GameSummary from "./GameSummary";

import { makeGrid } from "../../utils/helpers";

import classes from "./Game.module.css";

class Game extends Component {
  state = {
    playerOneTurn: true,
    board: makeGrid(7, 6),
    moves: 0,
    winner: null
  };

  componentDidUpdate() {
    if (this.state.winner === null) this.checkGameEnd(this.state.board);
  }

  chkLine = (a, b, c, d) => {
    // Check first cell non-zero and all cells match
    return a !== 0 && a === b && a === c && a === d;
  };

  checkGameEnd = bd => {
    // Check down
    for (let r = 0; r < 3; r++)
      for (let c = 0; c < 7; c++)
        if (this.chkLine(bd[r][c], bd[r + 1][c], bd[r + 2][c], bd[r + 3][c]))
          this.setState(prevState => ({
            ...prevState,
            winner: bd[r][c]
          }));
    // return bd[r][c];

    // Check right
    for (let r = 0; r < 6; r++)
      for (let c = 0; c < 4; c++)
        if (this.chkLine(bd[r][c], bd[r][c + 1], bd[r][c + 2], bd[r][c + 3]))
          this.setState(prevState => ({
            ...prevState,
            winner: bd[r][c]
          }));
    //return bd[r][c];

    // Check down-right
    for (let r = 0; r < 3; r++)
      for (let c = 0; c < 4; c++)
        if (this.chkLine(bd[r][c], bd[r + 1][c + 1], bd[r + 2][c + 2], bd[r + 3][c + 3]))
          this.setState(prevState => ({
            ...prevState,
            winner: bd[r][c]
          }));
    //return bd[r][c];

    // Check down-left
    for (let r = 3; r < 6; r++)
      for (let c = 0; c < 4; c++)
        if (this.chkLine(bd[r][c], bd[r - 1][c + 1], bd[r - 2][c + 2], bd[r - 3][c + 3]))
          this.setState(prevState => ({
            ...prevState,
            winner: bd[r][c]
          }));
    //return bd[r][c];

    //return 0;
  };
  handlePlayed = (index, player) => {
    this.setState(prevState => {
      let updated = false;
      const updatedBoard = [...prevState.board].map(item => {
        if (item[index] === 0 && updated === false) {
          updated = true;
          item[index] = player;
        }
        return item;
      });
      return {
        ...prevState,
        playerOneTurn: !prevState.playerOneTurn,
        moves: prevState.moves + 1,
        board: [...updatedBoard]
      };
    });
  };

  handleRestart = () => {
    this.setState({
      playerOneTurn: true,
      board: makeGrid(7, 6),
      moves: 0,
      winner: null
    });
  };

  render() {
    console.log(this.state.winner);
    return (
      <main className={classes.Main}>
        {this.state.winner ? (
          <GameSummary
            winner={this.state.winner}
            moves={this.state.moves}
            restart={this.handleRestart}
          />
        ) : (
          <React.Fragment>
            <GameInfo playingNow={this.state.playerOneTurn ? 1 : 2} />
            <GameBoard
              winner={this.state.winner}
              checkWin={board => this.checkGameEnd(board)}
              board={this.state.board}
              player={this.state.playerOneTurn ? 1 : 2}
              handlePlayed={this.handlePlayed}
            />
          </React.Fragment>
        )}
      </main>
    );
  }
}

export default Game;
