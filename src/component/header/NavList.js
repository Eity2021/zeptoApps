import React from "react";
import { Link } from "react-router-dom";
import WishList from "../svg/ColorWishList";

export default function NavList() {
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
        <li>
          <div className="pr-8">
          <Link to="/wishlist"><WishList></WishList></Link>  
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
