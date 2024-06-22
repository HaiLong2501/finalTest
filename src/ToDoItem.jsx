import React from "react";

const ToDoItem = (props) => {
  return (
    <li className="todo-item">
      <div className="text">
        <label>
          <input
            type="checkbox"
            checked={props.task.completed}
            onChange={props.toggleTask}
          />
          <span className="checkmark"></span>
          {props.task.text}
        </label>
      </div>
      <button onClick={props.deleteTask}>
        <i className="fa fa-trash"></i>
      </button>
    </li>
  );
};

export default ToDoItem;
