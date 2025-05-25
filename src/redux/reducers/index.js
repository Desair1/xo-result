import { combineReducers } from "redux";
import fieldReducer from "./fieldReducer";
import currentPlayerReducer from "./curPlayerReducer";
import winnerReducer from "./winnerReducer";
import gameDrawReducer from "./gameDrawReducer";
import gameEndendReducer from "./gameEndendReducer";

const rootReducer = combineReducers({
  field: fieldReducer,
  currentPlayer: currentPlayerReducer,
  winner: winnerReducer,
  gameDraw: gameDrawReducer,
  gameEndend: gameEndendReducer,
});

export default rootReducer;
