import React, { useEffect, useState } from "react";

type Data = {
  id: number;
  firstName: string;
};

const Autocomplete = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState<Data[]>([]);

  const fetchUsers = async () => {
    const res = await fetch(`https://dummyjson.com/user/search?q=${name}`);
    const data = await res.json();
    if (data) {
      setData(data.users);
      console.log(data.users);
    }
  };

  const handleName = (name: string) => {
    setName(name);

    setData([]);
  };
  useEffect(() => {
    fetchUsers();
  }, [name]);

  console.log(name);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      {data && name
        ? data.map((user) => (
            <li key={user.id} onClick={() => handleName(user.firstName)}>
              {user.firstName}
            </li>
          ))
        : null}
    </div>
  );
};

export default Autocomplete;
