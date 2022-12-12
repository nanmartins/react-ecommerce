import React from "react";
import { makeResquest } from "../makeRequest.js";
import { useEffect } from "react";

const useFetch = (url) => {

  const [ data, setData ] = React.useState([]);
  const [ loading, setLoading ] = React.useState(false);
  const [ error, setError ] = React.useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeResquest.get(url);
        setData(res.data.data);
      }catch(err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };

};

export default useFetch;
