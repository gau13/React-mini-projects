import React, { useState } from "react";

// todocard;
// todolist;
// form;

const Trelo = () => {
  const [task, setTask] = useState(false);

  const handleForm = () => {
    setTask(!task);
  };

  const todos = {
    active: [
      { id: 1, name: "shopping", category: "active" },
      { id: 2, name: "cycling", category: "active" },
    ],
    pending: [
      { id: 3, name: "sing", category: "pending" },
      { id: 4, name: "dance", category: "pending" },
    ],
    done: [
      { id: 5, name: "read", category: "done" },
      { id: 6, name: "cook", category: "done" },
    ],
  };

  const categories = Object.keys(todos);
  console.log(Object.keys(todos));
  return (
    <div>
      <div>
        <button
          style={{ padding: "10px", marginLeft: "15px" }}
          onClick={handleForm}
        >
          ADD task
        </button>
        {task ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "20%",
              gap: "10px",
              justifyContent: "center",
              border: "1px solid black",
              padding: "15px",
              margin: "auto",
            }}
          >
            Name
            <input type="text" />
            Category
            <input type="text" />
            <button
              style={{ padding: "10px", marginTop: "10px", cursor: "pointer" }}
            >
              Save
            </button>
          </div>
        ) : (
          ""
        )}
        <div
          style={{
            margin: "10px",
            height: "50vh",
          }}
        >
          <div
            style={{
              display: "flex",
              //   gap: "20px",
              //   width: "30%",
              justifyContent: "space-around",
              //   height: "100%",
            }}
          >
            {categories.map((category) => (
              <div
                style={{
                  border: "1px solid black",
                  height: "100%",
                  minWidth: "250px",
                }}
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trelo;
