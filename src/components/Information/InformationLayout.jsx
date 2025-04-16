import styles from "./Information.module.css";

const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
  return (
    <div className={styles["header-info"]}>
      <h1>Крестики-нолики</h1>
      <h2>Текущий счёт: </h2>
      <h3>
        Текущий ход:
        {isGameEnded && isDraw === false ? `Ходит: ${currentPlayer}` : ""}{" "}
      </h3>

      {isGameEnded ? `Победа ${currentPlayer}` : ""}
      {isDraw ? <div>Ничья!</div> : ""}
    </div>
  );
};

export default InformationLayout;
