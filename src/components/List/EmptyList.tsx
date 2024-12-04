import styles from "./EmptyList.module.css";

import clipboard from "../../assets/clipboard.svg";

export const EmptyList = () => {
	return (
		<div className={styles.container}>
			<img src={clipboard} alt="Clipboard" />
			<p> You don't have tasks registered</p>
			<span>Create tasks and organize your to-do list</span> 
		</div>
	);
};
