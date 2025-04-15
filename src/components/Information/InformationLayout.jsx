import styles from "./Information.module.css";

const InformationLayout = ({ isGameEnded, isDraw }) => {
	return (
		<div className={styles["header-info"]}>
			<h1>Крестики-нолики</h1>
			<h2>Текущий счёт: </h2>
			<h3>Текущий ход: </h3>

			{isGameEnded ? <div>Игра окончена</div> : ""}
			{isDraw ? <div>Ничья!</div> : ""}
		</div>
	);
};

export default InformationLayout;
