import { TaskModel } from "../../App";
import { EmptyList } from "./EmptyList";
import { Task } from "./Task";
import styles from "./TaskList.module.css";

interface TaskListProps {
	tasks: TaskModel[];
	deleteTask: (id: number) => void;
	toggleTask: (id: number) => void;
}
export const TaskList = ({ tasks, deleteTask, toggleTask }: TaskListProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.created}>
					<p>Created tasks</p>
					<strong>{tasks.length}</strong>
				</div>
				<div className={styles.completed}>
					<p>Completed tasks</p>
					{tasks.length === 0 ? (
						<strong>0</strong>
					) : (
						<strong>
							{tasks.filter((task) => task.isCompleted).length} of {tasks.length}
						</strong>
					)}
				</div>
			</div>

			<div className={styles.taskList}>
				{tasks.length > 0 ? (
					tasks.map((task) => {
						return (
							<Task
								key={task.id}
								task={task}
								deletedTask={deleteTask}
								toggledTask={toggleTask}
							/>
						);
					})
				) : (
					<EmptyList />
				)}
			</div>
		</div>
	);
};
