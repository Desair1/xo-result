import styles from "./Information.module.css";

const InformationLayout = ({ currentPlayer, winner, isDraw }) => {
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
