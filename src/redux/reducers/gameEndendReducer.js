import {
  GAME_ENDEND_FALSE,
  GAME_ENDEND_TRUE,
} from "../actionsTypes/gameEndendType";

const initialState = {
  gameEndend: false,
};

export default function gameEndendReducer(state = initialState, action) {
  switch (action.type) {
    case GAME_ENDEND_TRUE:
      return {
        ...state,
        gameEndend: action.payload,
      };
    case GAME_ENDEND_FALSE:
      return {
        ...state,
        gameEndend: action.payload,
      };
  }
}
