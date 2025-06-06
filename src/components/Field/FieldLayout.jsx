import styles from "./Field.module.css";
import PropTypes from "prop-types";

const FieldLayout = ({
  field,
  setField,
  currentPlayer,
  setCurrentPlayer,
  isGameEnded,
  setIsGameEnded,
  setIsDraw,
  setWinner,
}) => {
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
    if (currentPlayer === "X") {
      setCurrentPlayer("O");
    } else if (currentPlayer === "O") {
      setCurrentPlayer("X");
    }
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
      const newArray = [...field];
      newArray[index] = currentPlayer;
      setField(newArray);

      const winner = checkWinner(newArray);
      const draw = checkDraw(newArray);

      if (winner) {
        setWinner(winner);
        setIsGameEnded(true);
      } else if (draw) {
        setIsDraw(true);
        setIsGameEnded(true);
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

FieldLayout.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  setField: PropTypes.func.isRequired,
  currentPlayer: PropTypes.string.isRequired,
  setCurrentPlayer: PropTypes.func.isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  setIsGameEnded: PropTypes.func.isRequired,
  isDraw: PropTypes.bool.isRequired,
  setWinner: PropTypes.func.isRequired,
};

export default FieldLayout;
