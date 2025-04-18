import FieldLayout from "./FieldLayout";

function Field({
  field,
  setField,
  currentPlayer,
  setCurrentPlayer,
  isGameEnded,
  setIsGameEnded,
  setIsDraw,
  setWinner,
}) {
  return (
    <FieldLayout
      field={field}
      setField={setField}
      currentPlayer={currentPlayer}
      setCurrentPlayer={setCurrentPlayer}
      isGameEnded={isGameEnded}
      setIsGameEnded={setIsGameEnded}
      setIsDraw={setIsDraw}
      setWinner={setWinner}
    />
  );
}

export default Field;
