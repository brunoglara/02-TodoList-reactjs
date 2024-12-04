import { TaskModel } from '../../App';
import styles from './Task.module.css'

import { Check, Trash } from "phosphor-react";

interface TaskProps {
  task: TaskModel
  deletedTask: (id:number) => void
  toggledTask: (id:number) => void
} 

export const Task = ({task, deletedTask, toggledTask}:TaskProps) => {
    return (
        <div className={styles.container}>

            <label htmlFor="checkbox" onClick={() => toggledTask(task.id)}>
              <input readOnly type="checkbox" checked={task.isCompleted}/>
              <span className={task.isCompleted ? styles.checkbox_checked : styles.checkbox_unchecked} >
                {task.isCompleted && <Check size={12} />}
              </span>
    
              <p className={task.isCompleted ? styles.paragraph_checked : styles.paragraph}>
                {task.title}
              </p>
            </label>

    
          <button onClick={() => deletedTask(task.id)}>
            <Trash size={16} />
          </button>
        </div>
    )
}