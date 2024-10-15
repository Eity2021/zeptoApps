import React, { useEffect, useState } from "react";
import axios from "axios";
import ZeptoProductList from "./ZeptoProductList";

export default function ZeptoData() {
  const [zeptoData, setZeptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <div className="container">
     <div className="mt-24">
     <div className="grid grid-cols-4 gap-4">
        {zeptoData.map((dataList) => (
          <ZeptoProductList key={dataList.id} dataList={dataList} />
        ))}
      </div>
     </div>
    </div>
  );
}
