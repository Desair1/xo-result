import InformationLayout from "./InformationLayout";

function Information({ currentPlayer, winner, isDraw }) {
  return (
    <InformationLayout
      currentPlayer={currentPlayer}
      winner={winner}
      isDraw={isDraw}
    />
  );
}

export default Information;
