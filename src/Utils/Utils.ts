export const range = (start: number, end: number) =>
  [...Array(end - start).keys()].map(item => item + start);
