export default (emptyCell, dimention) => {
  const breakPoints = {
    four: {
      top: 4,
      bottom: 12,
      left: [0, 4, 8, 12],
      right: [3, 7, 11, 15],
    },
    three: {
      top: 3,
      bottom: 5,
      left: [0, 3, 6],
      right: [2, 5, 8],
    },
    five: {
      top: 5,
      bottom: 19,
      left: [0, 5, 10, 15, 20],
      right: [4, 9, 14, 19, 24],
    },
  };

  const cellsToClick = [];
  if (emptyCell < breakPoints[dimention].top) {
    cellsToClick.push(emptyCell + breakPoints[dimention].top);
  } else if (emptyCell > breakPoints[dimention].bottom) {
    cellsToClick.push(emptyCell - breakPoints[dimention].top);
  } else {
    cellsToClick.push(emptyCell + breakPoints[dimention].top);
    cellsToClick.push(emptyCell - breakPoints[dimention].top);
  }

  if (breakPoints[dimention].left.includes(emptyCell)) {
    cellsToClick.push(emptyCell + 1);
  } else if (breakPoints[dimention].right.includes(emptyCell)) {
    cellsToClick.push(emptyCell - 1);
  } else {
    cellsToClick.push(emptyCell + 1);
    cellsToClick.push(emptyCell - 1);
  }

  return cellsToClick;
};
