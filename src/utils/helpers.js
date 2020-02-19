export const makeGrid = (x, y) => {
  return Array.from(new Array(y), () => new Array(x).fill(0));
};
