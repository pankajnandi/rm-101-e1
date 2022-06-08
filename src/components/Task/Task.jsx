import React from "react";
import styles from "./task.module.css";
import {Counter} from "../Counter"

const Task = ({task,handleDel,handleChange}) => {
  console.log(task)
  function toggle() {
    handleChange({
      ...task,
      done: !task.done,
    });
  }
  const handleCount = (e) => {
    if (e > 0) {
      handleChange({
        ...task,
        count: e,
      });
    }
  };
  // NOTE: do not delete `data-testid` key value pair
  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" onChange={toggle} checked={task.done}/>
      <div data-testid="task-text">{task.text}</div>
      {/* Counter here */}
      <Counter count={task.count} handleCount={handleCount}/>
      <button data-testid="task-remove-button" onClick={() => handleDel(task.id)}>X</button>
    </li>
  );
};

export default Task;
