import React, { useState } from "react";

const ToDoInput = ({ addTask }) => {
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() || !task) {
      addTask(task);
      setTask("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        placeholder="add details"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ToDoInput;
