import React, { useState } from "react";

import styles from "./taskApp.module.css";
import { AddTask } from "./AddTask";
import  {Tasks}  from "./Tasks";
import { TaskHeader } from "./TaskHeader";
import { v4 } from "uuid";
const TaskApp = ({ task }) => {
  const [tasks, setTasks] = useState(task);
// console.log(tasks)
  const handleAdd = (e) => {
    if (e && !tasks.some((task) => task.text === e)) {
      const newTaskObj = {
        id: v4(),
        text: e,
        done: false,
        count: 1,
      };
      setTasks([...tasks, newTaskObj]);
    }
  };

  const handleDel = (e) => {
    let newTasks = tasks.filter((task) => task.id !== e);
    console.log(newTasks);
    setTasks(newTasks);
  };

  const handleChange = (e) => {
    let newTasks = tasks.reduce((acc, crr) => {
      if (crr.id === e.id) {
        acc.push(e);
      } else {
        acc.push(crr);
      }
      return acc;
    }, []);
    setTasks([...newTasks]);
  };

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader tasks={tasks} />
      {/* Add Task */}
      <AddTask handleAdd={handleAdd}></AddTask>

      {/* Tasks */}
      <Tasks
        tasks={tasks}
        handleDel={handleDel}
        handleChange={handleChange}
      ></Tasks>
    </div>
  );
};

export default TaskApp;
