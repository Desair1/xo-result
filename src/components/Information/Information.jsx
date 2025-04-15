import InformationLayout from "./InformationLayout";

function Information({ isGameEnded, isDraw }) {
	return <InformationLayout isGameEnded={isGameEnded} isDraw={isDraw} />;
}

export default Information;
