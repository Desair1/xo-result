import { useEffect } from "react";
import { store } from "../../redux/store";
import styles from "./Information.module.css";
import { useState } from "react";

const InformationLayout = () => {
  const [currentPlayer, setCurrentPlayer] = useState(
    store.getState().currentPlayer.currentPlayer
  );
  const [winner, setWinner] = useState(store.getState().winner.winner);
  const [isDraw, setIsDraw] = useState(store.getState().gameDraw.isDraw);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCurrentPlayer(store.getState().currentPlayer.currentPlayer);
      setWinner(store.getState().winner.winner);
      setIsDraw(store.getState().gameDraw.isDraw);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className={styles["header-info"]}>
      <h1>Крестики-нолики</h1>
      <h3>
        {winner === null && isDraw === false
          ? "Текущий ход: " + currentPlayer
          : ""}
      </h3>

      {winner ? `Победа: ${winner}` : null}
      {isDraw ? <div>Ничья!</div> : null}
    </div>
  );
};

export default InformationLayout;
