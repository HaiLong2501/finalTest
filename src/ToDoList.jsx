import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  return (
    <ul className="todo-list">
      {props.tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          toggleTask={() => props.toggleTask(task.id)}
          deleteTask={() => {
            props.deleteTask(task.id);
          }}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
