import React, { useEffect, useState } from "react";
import axios from "axios";
import ZeptoProductList from "./ZeptoProductList";
import Search from "../../../component/svg/Search";

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
     <div className="mt-14 relative">
     <div className="flex justify-end">
     <input className="border w-[40%] h-[50px] rounded-none pl-2" placeholder="Search Book" />
      </div>
      <div className="absolute right-2 top-3">
        <Search></Search>
      </div>
     </div>
     <div class="w-32">
  <label for="options" class="block text-sm font-medium text-gray-700">Select an option</label>
  <select id="options" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-none shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
    <option value="option4">Option 4</option>
  </select>
</div>
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
