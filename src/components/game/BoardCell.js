import React from "react";

import classes from "./Game.module.css";

const BoardCell = props => {
  const { columnIdx, rowIdx, cell } = props;
  console.log(cell);

  let circleColorClass = "";

  if (cell === 1) {
    circleColorClass = classes.red;
  }
  if (cell === 2) {
    circleColorClass = classes.yellow;
  }
  return (
    <div className={classes.BoardCell} key={columnIdx}>
      <div className={`${classes.circle} ${circleColorClass}`}>
        row: {rowIdx} col: {columnIdx}
      </div>
    </div>
  );
};

export default BoardCell;
