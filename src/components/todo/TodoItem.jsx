import React, { useState } from "react";

const TodoItem = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSave = () => {
    const newTask = {
      id: Date.now(), // Unique identifier
      name: input,
    };
    setTodos([...todos, newTask]);
    setInput("");
  };
  const handleEdit = (item) => {
    setInput(item);
  };
  //   const handleDelete = (item) => {
  //     setTodos([...todos, input]);
  //     setInput("");
  //   };
  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
      </div>
      {todos.map((item, id) => (
        <div>
          {item.name}
          <button onClick={() => handleEdit(id, item)}>Edit</button>
          <button onClick={() => handleDelete(item)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoItem;
