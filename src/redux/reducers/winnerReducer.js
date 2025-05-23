import { RESET_WINNER, SET_WINNER } from "../actionsTypes/winnerType";

const initialState = {
  winner: null,
};

export default function winnerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: action.payload,
      };
    case RESET_WINNER:
      return {
        ...state,
        winner: null,
      };
    default:
      return state;
  }
}
