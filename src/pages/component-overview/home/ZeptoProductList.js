import React from "react";
import { useNavigate } from "react-router-dom"; 


export default function ZeptoProductList({ dataList }) {
  console.log(dataList);
  const { title, authors, formats,id } = dataList;

  const navigate = useNavigate(); 
  const handleDetailsPage = (id ,dataList) => {

    navigate(`/bookDetails/${id}`, { state: { data: dataList } });

  }

  return (
    <div className="relative  py-4 shadow-lg  rounded-md">
      <div className="flex justify-center ">
        <img
          src={formats["image/jpeg"]}
          alt="cover-Image"
          className="h-[60%] w-[60%]"
        />
      </div>

      <div className="mt-8 mb-12">
        <div className="flex justify-center">
          <div className="absolute bottom-0 ">
            <p className="text-[14px]  font-bold text-center font-poppins">
              {title}
            </p>

            <div className="pb-2">
              {authors.map((author) => (
                <p className="text-[13px]  font-bold text-center font-poppins ">
                  {author.name}
                </p>
              ))}
            </div>

            <div className="flex justify-center">
              <div className="bg-[#03608b] text-[#fff] w-[140px] text-[13px] mb-4 flex justify-center py-1 rounded-sm">
              <button onClick={() => handleDetailsPage(id , dataList)}>View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
