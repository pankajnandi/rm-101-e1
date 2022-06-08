import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({ handleAdd }) => {
  const [text, SetText] = useState("");
  const handleClick = () => {
    handleAdd(text);
    SetText("");
  };
  // NOTE: do not delete `data-testid` key value pair

  return (
    <div className={styles.todoForm}>
      <input
        data-testid="add-task-input"
        type="text"
        value={text}
        onChange={(e) => SetText(e.target.value)}
        placeholder="ADD TASK..."
      />
      <button data-testid="add-task-button" onClick={handleClick}>+</button>
    </div>
  );
};

export default AddTask;
