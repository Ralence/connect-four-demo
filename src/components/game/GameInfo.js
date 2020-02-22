import React from "react";
import classes from "./Game.module.css";

const GameInfo = props => {
  const { playingNow, undo, moves } = props;
  return (
    <div>
      <div className={classes.players}>
        <span className={classes.player}>
          player1: <div className={classes.redCircle}></div>
        </span>
        {playingNow === 1 ? (
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
        <span className={classes.player}>
          player2: <span className={classes.yellowCircle}></span>
        </span>
      </div>
      <div></div>
      <button type="button" onClick={undo} disabled={moves < 1}>
        Undo
      </button>
    </div>
  );
};

export default GameInfo;
