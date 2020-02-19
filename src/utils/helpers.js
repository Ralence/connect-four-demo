export const makeGrid = (x, y) => {
  return Array.from(Array(x), () => new Array(y).fill(0));
};
