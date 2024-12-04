import { PlusCircle } from "phosphor-react";
import styles from "./AddTask.module.css";
import { useState } from "react";

interface AddTaskProps {
	onCreateTask: (title: string) => void;
}

export const AddTask = ({ onCreateTask }: AddTaskProps) => {
	const [titleTask, setTitleTask] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleTitleChange = (titleTaks: string) => {
		setTitleTask(titleTaks);
	};
	const handleCreateTask = () => {
		// validation if title is empty
		if (titleTask.trim() !== "") {
			onCreateTask(titleTask);
		} else {
			setErrorMessage("Title is required");
			return
		}
		setTitleTask("");
		setErrorMessage("");
	}

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<input
					type="text"
					placeholder="Add a new task"
					value={titleTask}
					onChange={(event) => handleTitleChange(event.target.value)}
					required
					className={errorMessage ? styles.errorInput : styles.normalInput}
				/>
				<button onClick={() => handleCreateTask()}>
					Create
					<PlusCircle size={20} />
				</button>
			</div>
			{errorMessage && <p className={styles.error}>{errorMessage}</p>}

		</div>
	);
};
