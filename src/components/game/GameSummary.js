import React from "react";
import classes from "./Game.module.css";

const GameSummary = props => {
  const { winner, moves, restart } = props;
  return (
    <div className={classes.summaryContainer}>
      <h3>Player {winner} wins!!</h3>
      {winner === 1 ? (
        <div
          className={classes.redCircle}
          style={{ height: "40px", width: "40px", margin: "5px" }}
        ></div>
      ) : (
        <span
          className={classes.yellowCircle}
          style={{ height: "40px", width: "40px", margin: "5px" }}
        ></span>
      )}
      <p>Moves played in the game: {moves}</p>
      <button type="button" className={classes.restartBtn} onClick={restart}>
        RESTART
      </button>
    </div>
  );
};

export default GameSummary;
