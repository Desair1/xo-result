import { useState } from "react";
import Field from "../Field/Field";
import Information from "../Information/Information";
import styles from "./Game.module.css";

const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState("X");
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);

	return (
		<main className={styles.container}>
			<Information isGameEnded={isGameEnded} isDraw={isDraw} />
			<Field field={field} />
			<button>Начать сначала</button>
		</main>
	);
};

export default Game;
