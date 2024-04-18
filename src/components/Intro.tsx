import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import Profile from "./Screenshot_20221006-171617.jpg";
import Title from "./Title";
const Intro = () => {
  return (
    <section className=" px-3 border-b border-[--gray] mb-2">
      <Title
        head="Hi, I am"
        secondHead="jaimeen makavana"
        body=" A Sydney based front-end developer passionate about building
          accessible and user friendly websites."
      />
      <div className=" flex justify-start items-center gap-3">
        <Button
          name="Contact Me"
          icon={
            <GoArrowUpRight className="text-white bg-black rounded-full p-1 size-[25px] group-hover:text-[green] group-hover:bg-[#222222]" />
          }
        />
        <Button
          name="LinkedIn"
          icon={
            <FaLinkedinIn className="text-white bg-black rounded-full p-1 size-[25px] group-hover:text-[green] group-hover:bg-[#222222]" />
          }
        />
        <Button
          name="Github"
          icon={
            <FaGithub className="text-white bg-black rounded-full p-1 size-[25px] group-hover:text-[green] group-hover:bg-[#222222]" />
          }
        />
      </div>
      <div className=" max-h-[300px] my-10 overflow-hidden rounded-2xl">
        <Image
          src={Profile}
          alt="profile"
          className="size-[100%] object-cover"
        />
      </div>
    </section>
  );
};

export default Intro;

const Button = ({ name, icon }: any) => {
  return (
    <button className=" uppercase transition-all duration-500 group flex p-1 rounded-full justify-start items-center gap-1 bg-[green] ">
      <p className=" text-black font-medium px-2 hidden group-hover:block">
        {name}
      </p>
      {icon}
    </button>
  );
};
