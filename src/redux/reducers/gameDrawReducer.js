import { GAME_DRAW_FALSE, GAME_DRAW_TRUE } from "../actionsTypes/gameDrawType";

const initialState = {
  gameDraw: false,
};

export default function gameDrawReducer(state = initialState, action) {
  switch (action.type) {
    case GAME_DRAW_TRUE:
      return {
        ...state,
        gameDraw: action.payload,
      };
    case GAME_DRAW_FALSE:
      return {
        ...state,
        gameDraw: action.payload,
      };
    default:
      return state;
  }
}
