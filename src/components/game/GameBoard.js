import React, { Component } from "react";
import BoardCell from "./BoardCell";

import classes from "./Game.module.css";

class GameBoard extends Component {
  render() {
    const { player, board, handlePlayed } = this.props;
    return (
      <div className={classes.Board}>
        {board.map((row, rowIdx) => (
          <div className={classes.Row} key={rowIdx}>
            {row.map((cell, columnIdx) => (
              <BoardCell
                clicked={() => {
                  handlePlayed(columnIdx, player);
                }}
                key={columnIdx}
                cell={cell}
                columnIdx={columnIdx}
                rowIdx={rowIdx}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default GameBoard;
