import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({tasks}) => {
  // sample values to be replaced
  let unCompletedTask = tasks.filter((e) => !e.done).length;;
  
  let totalTask = tasks.length
  // ;
// console.log(tasks)
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h2>TODO LIST</h2>
      <b data-testid="header-remaining-task">you have {unCompletedTask} of </b>
      <b data-testid="header-total-task">{totalTask} tasks remaining</b>
    </div>
  );
};

export default TaskHeader;
