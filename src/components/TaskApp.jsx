import React, { useState } from "react";

import styles from "./taskApp.module.css";
import { AddTask } from "./AddTask";
import { Tasks } from "./Tasks";
import { TaskHeader } from "./TaskHeader";
import { v4 } from "uuid";
const TaskApp = ({ task }) => {
  const [tasks, setTasks] = useState(task);
  // console.log(tasks)
  const handleAdd = (e) => {
    if (e && !tasks.some((task) => task.text === e)) {
      const taskobj = {
        id: v4(),
        text: e,
        done: false,
        count: 1,
      };
      setTasks([...tasks, taskobj]);
    }
  };

  const handleDel = (e) => {
    let a = tasks.filter((el) => el.id !== e);
    setTasks(a);
  };

  const handleChange = (e) => {
    let a = tasks.reduce((acc, cur) => {
      if (cur.id === e.id) {
        acc.push(e);
      } else {
        acc.push(cur);
      }
      return acc;
    }, []);
    setTasks([...a]);
  };

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp} id="taskApp">
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
