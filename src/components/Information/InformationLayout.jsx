import styles from "./Information.module.css";
import PropTypes from "prop-types";

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

InformationLayout.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
  winner: PropTypes.string, // Может быть null
  isDraw: PropTypes.bool.isRequired,
};

export default InformationLayout;
