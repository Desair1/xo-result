import { SET_WINNER } from "../actionsTypes/winnerType";

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
    default:
      return state;
  }
}
