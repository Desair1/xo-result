import { useState } from "react";
import Field from "../Field/Field";
import Information from "../Information/Information";
import styles from "./Game.module.css";

const Game = () => {
  const [winner, setWinner] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);

  const reset = () => {
    setWinner(null);
    setIsGameEnded(false);
    setIsDraw(false);
    setField(["", "", "", "", "", "", "", "", ""]);
    setCurrentPlayer("X");
  };

  return (
    <main className={styles.container}>
      <Information
        currentPlayer={currentPlayer}
        winner={winner}
        isDraw={isDraw}
      />
      <Field
        field={field}
        setField={setField}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        isGameEnded={isGameEnded}
        setIsGameEnded={setIsGameEnded}
        setIsDraw={setIsDraw}
        setWinner={setWinner}
      />
      <button onClick={reset}>Начать сначала</button>
    </main>
  );
};

export default Game;
