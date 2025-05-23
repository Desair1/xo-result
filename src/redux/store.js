import { combineReducers, createStore } from "redux";
import winnerReducer from "./reducers/winnerReducer";
import currentPlayerReducer from "./reducers/curPlayerReducer";
import gameDrawReducer from "./reducers/gameDrawReducer";
import gameEndendReducer from "./reducers/gameEndendReducer";
import fieldReducer from "./reducers/fieldReducer";

const rootReducer = combineReducers({
  winner: winnerReducer,
  currentPlayer: currentPlayerReducer,
  gameDraw: gameDrawReducer,
  gameEnd: gameEndendReducer,
  field: fieldReducer,
});

export const store = createStore(rootReducer);
