import FieldLayout from "./FieldLayout";

function Field({ field, setField, currentPlayer, setCurrentPlayer }) {
  return (
    <FieldLayout
      field={field}
      setField={setField}
      currentPlayer={currentPlayer}
      setCurrentPlayer={setCurrentPlayer}
    />
  );
}

export default Field;
