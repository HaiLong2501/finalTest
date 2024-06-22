import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import FilterButtons from "./FilterButtons";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [nextId, setNextId] = useState(1);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  const addTask = (task) => {
    const existedTask = tasks.some(
      (e) => e.text.toUpperCase() === task.toUpperCase()
    );
    if (existedTask) {
      alert("Task existed");
      return;
    }
    setTasks([...tasks, { id: nextId, text: task, completed: false }]);
    setNextId(nextId + 1);
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((e) => e.id != taskId);
    setTasks(newTasks);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const filterTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <>
      <div className="todo-app">
        <h1>#todo</h1>
        <FilterButtons filter={filter} setFilter={setFilter} />
        <ToDoInput addTask={addTask} />
        <ToDoList
          tasks={filterTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
        {filter === "Completed" && (
          <button onClick={deleteAllTasks} className="delete-all">
            <i className="fa fa-trash"></i>
            Delete All
          </button>
        )}
      </div>
    </>
  );
}

export default App;
