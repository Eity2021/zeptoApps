import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WishList from "../../../component/svg/WishList";
import ColorWishList from "../../../component/svg/ColorWishList";

export default function ZeptoProductList({ dataList }) {
  const { title, authors, formats, id } = dataList;
  const [inWishlist, setInWishlist] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  console.log(wishlistCount);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  //   if (savedWishlist.includes(id)) {
  //     setInWishlist(true);
  //   }
  // }, [id]);

  const handleDetailsPage = (id, dataList) => {
    navigate(`/bookDetails/${id}`, { state: { data: dataList } });
  };

  const toggleWishlist = () => {
    // const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // if (inWishlist) {

    //   const updatedWishlist = savedWishlist.filter((itemId) => itemId !== id);
    //   localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    //   setWishlistCount(wishlistCount - 1);
    // } else {

    //   savedWishlist.push(id);
    //   localStorage.setItem("wishlist", JSON.stringify(savedWishlist));
    //   setWishlistCount(wishlistCount + 1);
    // }

    // setInWishlist(!inWishlist); 
  };

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
                <p
                  className="text-[13px] text-[#2c2c2c]  font-bold text-center font-poppins "
                  key={author.name}
                >
                  {author.name}
                </p>
              ))}
            </div>

            <div className="flex gap-2 justify-center">
              <div className="flex justify-center">
                <button
                  onClick={() => handleDetailsPage(id, dataList)}
                  className="bg-[#056DB4] text-[#fff] w-[140px] text-[13px] mb-4 flex justify-center py-1 rounded-sm"
                >
                  View Details
                </button>
              </div>
              <div>
                <button onClick={toggleWishlist}>
                  {inWishlist ? <ColorWishList /> : <WishList />}
                </button>
                {/* <p className="text-center text-[12px]">
                  {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
