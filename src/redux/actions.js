import { SET_PLAYER_O, SET_PLAYER_X } from "./actionsTypes/currentPlayerType";
import { RESET_GAME, UPDATE_FIELD } from "./actionsTypes/fieldType";
import { GAME_DRAW_FALSE, GAME_DRAW_TRUE } from "./actionsTypes/gameDrawType";
import {
  GAME_ENDEND_FALSE,
  GAME_ENDEND_TRUE,
} from "./actionsTypes/gameEndendType";
import { RESET_WINNER, SET_WINNER } from "./actionsTypes/winnerType";

export const setWinner = (winner) => {
  type: SET_WINNER;
  payload: winner;
};

export const resetWinner = () => {
  type: RESET_WINNER;
};

export const setCurrentPlayerX = (currentPlayer) => {
  type: SET_PLAYER_X;
  payload: currentPlayer;
};
export const setCurrentPlayerO = (currentPlayer) => {
  type: SET_PLAYER_O;
  payload: currentPlayer;
};

export const setGameEndendTrue = (gameEndend) => {
  type: GAME_ENDEND_TRUE;
  payload: gameEndend;
};
export const setGameEndendFalse = (gameEndend) => {
  type: GAME_ENDEND_FALSE;
  payload: gameEndend;
};

export const setGameDrawTrue = (gameDraw) => {
  type: GAME_DRAW_TRUE;
  payload: gameDraw;
};
export const setGameDrawFalse = (gameDraw) => {
  type: GAME_DRAW_FALSE;
  payload: gameDraw;
};

export const updateField = (index, value) => {
  type: UPDATE_FIELD;
  payload: {
    index, value;
  }
};
export const resetField = () => {
  type: RESET_GAME;
};
