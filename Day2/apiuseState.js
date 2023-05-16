import React, { useState, useEffect } from "react";
import axios from "axios";

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.example.com/data");
        setData(response.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);

  return <div>{data ? <p>{data}</p> : <p>Loading...</p>}</div>;
}

export default MyComponent;
