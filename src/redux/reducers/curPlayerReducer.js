import { SET_PLAYER_O, SET_PLAYER_X } from "../actionsTypes/currentPlayerType";

const initialState = {
  currentPlayer: "X",
};

export default function currentPlayerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PLAYER_X:
      return {
        ...state,
        currentPlayer: action.payload,
      };
    case SET_PLAYER_O:
      return {
        ...state,
        currentPlayer: action.payload,
      };
    default:
      return state;
  }
}
