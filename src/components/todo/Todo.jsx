import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleTaskInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleAddTask = () => {
    if (editMode) {
      // Update existing task
      const updatedTasks = tasks.map((task) =>
        task.id === selectedTask.id ? { ...task, name: taskInput } : task
      );
      setTasks(updatedTasks);
      setEditMode(false);
      setTaskInput("");
      setSelectedTask(null);
    } else {
      // Add new task
      const newTask = {
        id: Date.now(), // Unique identifier
        name: taskInput,
      };
      setTasks([...tasks, newTask]);
      setTaskInput("");
    }
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setTaskInput(task.name);
    setEditMode(true);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={taskInput}
        onChange={handleTaskInputChange}
        placeholder="Enter task..."
      />
      <button onClick={handleAddTask}>{editMode ? "Save" : "Add Task"}</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => handleEditTask(task)}>Edit</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
