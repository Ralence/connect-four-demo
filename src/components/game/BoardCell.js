import React from "react";

import classes from "./Game.module.css";

const BoardCell = props => {
  const { columnIdx, cell, clicked } = props;

  let circleColorClass = "";

  if (cell === 1) {
    circleColorClass = classes.red;
  }
  if (cell === 2) {
    circleColorClass = classes.yellow;
  }
  return (
    <div onClick={clicked} className={classes.BoardCell} key={columnIdx}>
      <div className={`${classes.circle} ${circleColorClass}`}></div>
    </div>
  );
};

export default BoardCell;
