// import React from "react";
// import useGetQuery from "./useGetQuery";

// const Sample = () => {
//   const { data, loading } = useGetQuery({
//     url: "https://jsonplaceholder.typicode.com/users",
//   });
//   console.log(data);

//   if (loading) {
//     <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {data.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </div>
//   );
// };

// export default Sample;
import React, { useEffect, useState } from "react";

const Sample = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const filteredData = data.filter((item) =>
    item.username.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {filteredData.map((user) => (
          <li>{user.username}</li>
        ))}
      </ul>
      {/* <ul>
        {filteredData.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Sample;
