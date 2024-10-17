import React, { useState } from "react";

import ZeptoProductList from "./ZeptoProductList";
import Search from "../../../component/svg/Search";
import { useAppContextZepto } from "../../../AppContextZepto";


export default function ZeptoData() {

  const { zeptoData,filteredData,setFilteredData } = useAppContextZepto();
  const [searchTerm, setSearchTerm] = useState("");

  // console.log(zeptoData);



  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = zeptoData.filter((data) =>
      data.title.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  return (
    <div className="container">
      <div className="mt-14 relative">
        <div className="flex justify-end">
          <input
            className="border w-[40%] h-[50px] rounded-none pl-2"
            placeholder="Search Book"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="absolute right-2 top-3">
          <Search></Search>
        </div>
      </div>
      <div className="flex justify-end mt-12">
        <div class="w-32">
          <select
            id="options"
            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-none shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="option1" selected>
              select genre
            </option>

            <option value="option2">option</option>
          </select>
        </div>
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-4 gap-4">
          {filteredData.map((dataList) => (
            <ZeptoProductList key={dataList.id} dataList={dataList} />
          ))}
        </div>
      </div>
    </div>
  );
}
