export const makeGrid = (x, y) => {
  return Array.from(new Array(y), () => new Array(x).fill(0));
};
export const getBlankGrid = () => {
  return Array(6)
    .fill(null)
    .map(() => Array(7).fill(0));
};

const chkLine = (a, b, c, d) => {
  // Check first cell non-zero and all cells match
  return a !== 0 && a === b && a === c && a === d;
};

export const checkWinner = bd => {
  // Check down
  for (let r = 0; r < 3; r++)
    for (let c = 0; c < 7; c++)
      if (chkLine(bd[r][c], bd[r + 1][c], bd[r + 2][c], bd[r + 3][c]))
        // this.setState({ winner: bd[r][c] });
        return bd[r][c];

  // Check right
  for (let r = 0; r < 6; r++)
    for (let c = 0; c < 4; c++)
      if (chkLine(bd[r][c], bd[r][c + 1], bd[r][c + 2], bd[r][c + 3]))
        // this.setState({ winner: bd[r][c] });
        return bd[r][c];

  // Check down-right
  for (let r = 0; r < 3; r++)
    for (let c = 0; c < 4; c++)
      if (chkLine(bd[r][c], bd[r + 1][c + 1], bd[r + 2][c + 2], bd[r + 3][c + 3]))
        //this.setState({ winner: bd[r][c] });
        return bd[r][c];

  // Check down-left
  for (let r = 3; r < 6; r++)
    for (let c = 0; c < 4; c++)
      if (chkLine(bd[r][c], bd[r - 1][c + 1], bd[r - 2][c + 2], bd[r - 3][c + 3]))
        //this.setState({ winner: bd[r][c] });
        return bd[r][c];

  return null;
};
