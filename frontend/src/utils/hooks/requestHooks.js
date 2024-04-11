import { useState, useEffect } from "react";
import { GET_REQUEST } from "../helpers/request.helper";
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await GET_REQUEST(url);
      if (response) {
        setData(response);
      } else {
        setError(response.error);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
};
