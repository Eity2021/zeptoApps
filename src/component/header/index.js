import React from 'react';
import Logo from "./Logo";
import NavList from './NavList';
export default function Header() {
  return (
    <div> 

<div className=" py-[30px]  xl:px-0  mx-4">
      <div className="flex  justify-between container">
      <div>
        <Logo></Logo>
      </div>
      <div>
        <NavList></NavList>
      </div>
      </div>
    </div>

    </div>
  )
}
