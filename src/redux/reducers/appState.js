import { MOVECELL, CHANGEINPUT, STARTGAME } from '../actions/actionsTypes';
import fieldCreator from '../fieldCreator';
import findCellsToClick from '../findCellsToClick';

const initialState = {
  field: [],
  emptyCell: null,
  cellsToClick: [],
  inputValue: 'three',
  correctCellsArray: [],
  isStarted: false,
  isFinished: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case STARTGAME:
      const { startField, correctCellsArray, emptyCell } = fieldCreator(state.inputValue);
      return {
        ...state,
        isStarted: true,
        isFinished: false,
        field: startField,
        emptyCell,
        cellsToClick: findCellsToClick(emptyCell, state.inputValue),
        correctCellsArray,
      };

    case MOVECELL:
      const modifiedField = [...state.field];
      if (state.cellsToClick.includes(action.payload)) {
        modifiedField[state.emptyCell] = modifiedField[action.payload];
        modifiedField[action.payload] = null;
      }
      if (
        !modifiedField[modifiedField.length - 1] &&
        JSON.stringify(modifiedField) ===
          JSON.stringify(state.correctCellsArray)
      ) {
        return {
          ...state,
          isFinished: true,
          isStarted: false,
          field: modifiedField,
          emptyCell: modifiedField.findIndex(el => !el),
          cellsToClick: [],
        };
      }
      return {
        ...state,
        field: modifiedField,
        emptyCell: modifiedField.findIndex(el => !el),
        cellsToClick: findCellsToClick(modifiedField.findIndex(el => !el), state.inputValue),
      };

    case CHANGEINPUT:
      return {
        ...state,
        inputValue: action.payload,
      };
    default:
      return state;
  }
}
