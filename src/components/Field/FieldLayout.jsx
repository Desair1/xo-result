import { useState } from "react";
import styles from "./Field.module.css";

const FieldLayout = ({ field, setField, currentPlayer, setCurrentPlayer }) => {
  // const [newField, setNewField] = useState(field);

  const changeCurrentPlayer = () => {
    if (currentPlayer === "X") {
      setCurrentPlayer("O");
    } else if (currentPlayer === "O") {
      setCurrentPlayer("X");
    }
  };

  const setCell = (cell, index) => {
    const newArray = field.map((elem, id) => {
      return id === index ? cell : elem;
    });
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
            onClick={() => setCell(cell, index)}
          >
            {cell}
          </div>
        ))}
      </div>
    </>
  );
};

export default FieldLayout;
