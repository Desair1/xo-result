import styles from "./Field.module.css";
import { store } from "../../redux/store";
import {
  setCellValue,
  setCurrentPlayerAction,
  setGameDrawAction,
  setGameEndedAction,
  setWinnerAction,
} from "../../redux/actions";
import { useState, useEffect } from "react";

const FieldLayout = () => {
  const [field, setField] = useState(store.getState().field.field);
  const [currentPlayer, setCurrentPlayer] = useState(
    store.getState().currentPlayer.currentPlayer
  );
  const [isGameEnded, setIsGameEnded] = useState(
    store.getState().gameEndend.isGameEnded
  );
  const [isDraw, setIsDraw] = useState(store.getState().gameDraw.isDraw);
  const [winner, setWinner] = useState(store.getState().winner.winner);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setField(store.getState().field.field);
      setCurrentPlayer(store.getState().currentPlayer.currentPlayer);
      setIsGameEnded(store.getState().gameEndend.isGameEnded);
      setIsDraw(store.getState().gameDraw.isDraw);
      setWinner(store.getState().winner.winner);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const WIN_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8],
    [2, 4, 6], // Варианты побед по диагонали
  ];

  const changeCurrentPlayer = () => {
    store.dispatch(setCurrentPlayerAction(currentPlayer === "X" ? "O" : "X"));
  };

  const checkWinner = (board) => {
    for (const pattern of WIN_PATTERNS) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log("Победил", board[a]);
        return board[a];
      }
    }
    return null;
  };

  const checkDraw = (board) => {
    const isDraw = board.every((cell) => (cell !== "" ? true : null));
    return isDraw;
  };

  const setCell = (index) => {
    if (isGameEnded) {
      return;
    }
    if (field[index] === "") {
      store.dispatch(setCellValue(index, currentPlayer));

      // Получаем актуальное поле ИЗ STORE, чтобы checkWinner работал правильно
      const newField = store.getState().field.field;
      const winner = checkWinner(newField);

      const draw = checkDraw(newField);

      if (winner) {
        store.dispatch(setWinnerAction(winner));
        store.dispatch(setGameEndedAction(true));
      } else if (draw) {
        store.dispatch(setGameDrawAction(true));
        store.dispatch(setGameEndedAction(true));
      } else {
        changeCurrentPlayer();
      }
    } else {
      return;
    }
  };

  return (
    <>
      <div className={styles.board}>
        {field.map((cell, index) => (
          <div
            className={styles.cell}
            data-index={index}
            key={index}
            onClick={() => setCell(index)}
          >
            {cell}
          </div>
        ))}
      </div>
    </>
  );
};

export default FieldLayout;
