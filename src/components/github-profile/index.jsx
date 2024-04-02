import React, { useEffect, useState } from "react";
import "./github.css";
import User from "./user";

const Github = () => {
  const [user, setUser] = useState("");
  const [data, setData] = useState(null);

  const handleSubmit = () => {
    fetchDetails();
  };
  // useEffect(() => {
  //   fetchDetails();
  // }, [initialized]);

  const fetchDetails = async () => {
    const data = await fetch(`https://api.github.com/users/${user}`);
    const response = await data.json();
    if (data) {
      setData(response);
    }
    console.log(response);
  };
  console.log(user);
  return (
    <div className="github-wrapper">
      <div className="github-input">
        <input
          onChange={(e) => setUser(e.target.value)}
          type="text"
          value={user}
          placeholder="Enter Github username.."
        />
        <button onClick={handleSubmit} className="github-button">
          Search
        </button>
      </div>
      {data ? <User userdata={data} /> : null}
    </div>
  );
};

export default Github;
