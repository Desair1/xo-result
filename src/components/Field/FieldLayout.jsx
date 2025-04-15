import styles from "./Field.module.css";

const FieldLayout = ({ field }) => {
	return (
		<>
			<div className={styles.board}>
				{field.map((cell, index) => (
					<div className={styles.cell} data-index={index} key={index}>
						{cell}
					</div>
				))}
			</div>
		</>
	);
};

export default FieldLayout;
