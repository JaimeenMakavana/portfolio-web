"use client";
import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [mobileMenu, setmobileMenu] = useState(false);
  console.log("mobileMenu", mobileMenu);

  return (
    <section className=" fixed top-0 inset-x-0 bg-[--background]">
      <div className=" flex justify-between items-center py-2 px-3 relative">
        <p className=" text-[gray] font-bold uppercase">Jaimeen</p>
        <HiOutlineMenuAlt4
          className=" text-[gray] size-[25px]"
          onClick={() => setmobileMenu(!mobileMenu)}
        />
        <MobileMenu toggle={mobileMenu} setToggle={setmobileMenu} />
      </div>
    </section>
  );
};

export default Header;
