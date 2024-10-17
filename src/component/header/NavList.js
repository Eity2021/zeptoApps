import React from "react";
import { Link } from "react-router-dom";
import WishList from "../svg/ColorWishList";
import { useAppContextZepto } from "../../AppContextZepto";

export default function NavList() {
  const { wishList } = useAppContextZepto();
  return (
    <div className="flex ">
      <ul className="hidden md:flex gap-8">
        <li className="text-link text-header font-bold">
          <Link to="/">HOME</Link>
        </li>

        <li className="text-link text-header font-bold">
          <Link to="/about">ABOUT US</Link>
        </li>

        <li className="text-link text-header font-bold">
          <Link to="/contact">CONTACT</Link>
        </li>
        <li className="relative">
          <div className="pr-8">
          <Link to="/wishlist"><WishList></WishList></Link>  
          </div>
        <div className="absolute top-3 right-11">
        <div className="w-4 h-4 border bg-[#fff] flex justify-center items-center rounded-[50%] shadow-lg">
            <p className="text-[12px]">{wishList.length}</p>
          </div>
        </div>
        </li>
      </ul>

      {/* <div className="md:hidden pl-2">
      <button onClick={toggleSidebar}>
        <Hamburger></Hamburger>
      </button>
    </div> */}
    </div>
  );
}
