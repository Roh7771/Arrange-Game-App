import { MOVECELL, CHANGEINPUT, STARTGAME } from './actionsTypes';

export function moveCell(data) {
  return {
    type: MOVECELL,
    payload: data,
  };
}

export function changeInput(data) {
  return {
    type: CHANGEINPUT,
    payload: data,
  };
}

export function startGame() {
  return {
    type: STARTGAME,
  };
}
