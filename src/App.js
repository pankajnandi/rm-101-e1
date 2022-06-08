import React from "react";
import TaskApp from "./components/TaskApp.jsx"
import task from "./data/tasks.json"
function App() {
  // console.log(data)
  return <div>
    <TaskApp task = {task}></TaskApp>
  </div>;
}

export default App;
