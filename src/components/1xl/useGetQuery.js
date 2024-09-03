import { useEffect, useState } from "react";

const useGetQuery = (config = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    try {
      const res = await fetch(config.url);
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

  return { data, loading };
};

export default useGetQuery;
