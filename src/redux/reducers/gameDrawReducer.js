import { SET_GAME_DRAW } from "../actionsTypes/gameDrawType";

const initialState = {
  isDraw: false,
};

export default function gameDrawReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GAME_DRAW:
      return {
        ...state,
        isDraw: action.payload,
      };
    default:
      return state;
  }
}
