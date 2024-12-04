import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/List/TaskList";
import { useState } from "react";


export interface TaskModel {
  id: number;
  title: string;
  isCompleted: boolean;
}

function App() {

  const [taskList, setTaskList] = useState<TaskModel[]>([]);
  

  const handleAddNewTask = (title:string) => {
    
    const newTask = {
      id: taskList.length +1,
      title: title,
      isCompleted: false
    }


    setTaskList([...taskList, newTask])
  }

  const handleToggleTask = (id: number) => {
    const newTaskList = taskList.map(task => {
      if(task.id === id) {
        return {...task, isCompleted: !task.isCompleted}
      } else return task
    })

    setTaskList(newTaskList)
  }


  const handleDeleteTask = (id: number) => {
    const newTaskList = taskList.filter(task => task.id !== id)
    setTaskList(newTaskList)
  }

	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.container}>
				<AddTask onCreateTask={handleAddNewTask} />

				<TaskList tasks={taskList} deleteTask={handleDeleteTask} toggleTask={handleToggleTask}/>
			</div>
		</div>
	);
}

export default App;
