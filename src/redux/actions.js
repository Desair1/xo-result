import { SET_FIELD } from "./actionsTypes/fieldType";
import { SET_PLAYER_X, SET_PLAYER_O } from "./actionsTypes/currentPlayerType";
import { SET_WINNER } from "./actionsTypes/winnerType";
import { SET_GAME_DRAW } from "./actionsTypes/gameDrawType";
import { SET_GAME_ENDED } from "./actionsTypes/gameEndendType";

export const setFieldAction = (newField) => ({
  type: SET_FIELD,
  payload: newField,
});

export const setCurrentPlayerAction = (player) => ({
  type: player === "X" ? SET_PLAYER_X : SET_PLAYER_O,
  payload: player,
});

export const setWinnerAction = (winner) => ({
  type: SET_WINNER,
  payload: winner,
});

export const setGameDrawAction = (isDraw) => ({
  type: SET_GAME_DRAW,
  payload: isDraw,
});

export const setGameEndedAction = (isGameEnded) => ({
  type: SET_GAME_ENDED,
  payload: isGameEnded,
});

export const setCellValue = (index, player) => {
  return {
    type: "SET_CELL_VALUE",
    payload: {
      index,
      player,
    },
  };
};
