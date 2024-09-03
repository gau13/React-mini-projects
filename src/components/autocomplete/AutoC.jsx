import React, { useEffect, useState } from "react";

const AutoC = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [name]);

  const fetchData = async () => {
    const res = await fetch(`https://dummyjson.com/user/search?q=${name}`);
    const data = await res.json();
    console.log(data);
    setData(data.users);
    console.log(data.users);
  };

  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        value={name}
      />

      {data && name
        ? data.map((user) => <li key={user.id}>{user.firstName}</li>)
        : null}
    </div>
  );
};

export default AutoC;
