import { RESET_GAME, UPDATE_FIELD } from "../actionsTypes/fieldType";

const initialState = {
  field: Array(9).fill(""),
};

export default function fieldReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FIELD:
      const newField = [...state.field];
      newField[action.payload.index] = action.payload.value;
      return {
        ...state,
        field: newField,
      };
    case RESET_GAME:
      return {
        ...state,
        field: Array(9).fill(""),
      };
    default:
      return state;
  }
}
