import React from "react";
import BoardCell from "./BoardCell";

import classes from "./Game.module.css";

const GameBoard = props => {
  const { board, handlePlayed, player } = props;
  return (
    <div className={classes.Board}>
      {board.map((row, rowIdx) => (
        <div className={classes.Row} key={rowIdx} onClick={() => handlePlayed(rowIdx, player)}>
          {row.map((cell, columnIdx) => (
            <BoardCell key={columnIdx} cell={cell} columnIdx={columnIdx} rowIdx={rowIdx} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
