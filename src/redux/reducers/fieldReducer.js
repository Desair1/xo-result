import { SET_FIELD } from "../actionsTypes/fieldType";

const initialState = {
  field: ["", "", "", "", "", "", "", "", ""],
};

export default function fieldReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        field: action.payload,
      };
    case "SET_CELL_VALUE":
      const newField = [...state.field];
      newField[action.payload.index] = action.payload.player;
      return {
        ...state,
        field: newField,
      };
    default:
      return state;
  }
}
