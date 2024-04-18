"use client";
import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [mobileMenu, setmobileMenu] = useState(false);
  console.log("mobileMenu", mobileMenu);

  return (
    <section className=" fixed top-0 inset-x-0 bg-[--background] z-10">
      <div className=" flex justify-between items-center py-2 px-3 relative md:px-10 max-w-screen-lg mx-auto">
        <p className=" text-[gray] font-bold uppercase">Jaimeen</p>
        <HiOutlineMenuAlt4
          className=" text-[gray] size-[25px] md:hidden"
          onClick={() => setmobileMenu(!mobileMenu)}
        />
        <ul className="hidden  md:inline-flex justify-start items-center gap-3 text-[--gray] text-sm">
          <li>Work</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <MobileMenu toggle={mobileMenu} setToggle={setmobileMenu} />
      </div>
    </section>
  );
};

export default Header;
