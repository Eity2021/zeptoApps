import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ZeptoData() {
  const [zeptoData, setZeptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(zeptoData);

  useEffect(() => {
    // Fetching data with Axios
    axios
      .get("https://gutendex.com/books")
      .then((response) => {
        setZeptoData(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return <div>fsdfsdfdf</div>;
}
