import { SET_GAME_ENDED } from "../actionsTypes/gameEndendType";

const initialState = {
  isGameEnded: false,
};

export default function gameEndendReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GAME_ENDED:
      return {
        ...state,
        isGameEnded: action.payload,
      };
    default:
      return state;
  }
}
