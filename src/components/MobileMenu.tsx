import React from "react";

const MobileMenu = ({ toggle, setToggle }: any) => {
  return (
    <div
      className={` fixed top-0 bottom-0 shadow-sm shadow-white text-[gray] bg-[--background] w-[300px] z-20 transition-all duration-500 ${
        toggle ? "-translate-x-[12px]" : "-translate-x-[315px]"
      } md:hidden`}
    >
      MobileMenu
      <p onClick={() => setToggle(false)}>Cancel</p>
    </div>
  );
};

export default MobileMenu;
