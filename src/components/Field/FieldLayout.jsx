import styles from "./Field.module.css";

const FieldLayout = ({ field, setField, currentPlayer, setCurrentPlayer }) => {
  const changeCurrentPlayer = () => {
    if (currentPlayer === "X") {
      setCurrentPlayer("O");
    } else if (currentPlayer === "O") {
      setCurrentPlayer("X");
    }
  };

  const setCell = (index) => {
    const newArray = field.map((elem, id) => {
      if (id === index && elem === "") {
        changeCurrentPlayer();
        return currentPlayer;
      } else {
        return elem;
      }
    });

    setField(newArray);
    console.log(currentPlayer);

    console.log(newArray);
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
