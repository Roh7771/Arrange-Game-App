export default dimention => {
  const correctArrays = {
    three: [1, 2, 3, 4, 5, 6, 7, 8, null],
    four: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null],
    five: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      null,
    ],
  };

  const startField = [...correctArrays[dimention]].sort(
    () => Math.random() - 0.5,
  );
  const emptyCell = startField.findIndex(el => !el);

  return {
    startField,
    correctCellsArray: correctArrays[dimention],
    emptyCell,
  };
};
