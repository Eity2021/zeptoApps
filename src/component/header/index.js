import React from 'react';
import Logo from "./Logo";
import NavList from './NavList';
export default function Header() {
  return (
    <div> 

<div className=" py-[30px]  xl:px-0  px-4  shadow-md ">
      <div className="flex  justify-between container">
      <div>
        <Logo></Logo>
      </div>
      <div className='flex items-center'>
        <NavList></NavList>
      </div>
      </div>
    </div>

    </div>
  )
}
