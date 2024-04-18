import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import Profile from "./Screenshot_20221006-171617.jpg";
import Title from "./Title";
import Link from "next/link";
const Intro = () => {
  return (
    <section className=" px-3 border-b border-[--gray] mb-2 grid md:grid-cols-2 md:px-10 md:py-10 md:gap-10 max-w-screen-lg mx-auto ">
      <div>
        <Title
          head="Hi, I am"
          secondHead="jaimeen makavana"
          body=" India based front-end developer passionate about building
          accessible and user friendly websites."
        />
        <div className=" flex justify-start items-center gap-3">
          <Button
            name="Contact Me"
            href="tel:+919737114083"
            icon={
              <GoArrowUpRight className="text-white bg-black rounded-full p-1 size-[25px] group-hover:text-[green] group-hover:bg-[#222222]" />
            }
          />
          <Button
            href="https://www.linkedin.com/in/jaimeen-makavana-37720426b/"
            name="LinkedIn"
            icon={
              <FaLinkedinIn className="text-white bg-black rounded-full p-1 size-[25px] group-hover:text-[green] group-hover:bg-[#222222]" />
            }
          />
          <Button
            name="Github"
            href="https://github.com/JaimeenMakavana"
            icon={
              <FaGithub className="text-white bg-black rounded-full p-1 size-[25px] group-hover:text-[green] group-hover:bg-[#222222]" />
            }
          />
        </div>
      </div>

      <div className=" max-h-[300px] max-w-sm my-10 overflow-hidden rounded-2xl md:my-0 md:max-h-[400px]">
        <Image
          src={Profile}
          alt="profile"
          className="size-[100%] object-cover object-center md:object-top"
        />
      </div>
    </section>
  );
};

export default Intro;

const Button = ({ name, icon, href }: any) => {
  return (
    <Link
      href={href}
      className=" uppercase transition-all duration-500 group flex p-1 rounded-full justify-start items-center gap-1 bg-[green] "
    >
      <p className=" text-black font-medium px-2 hidden group-hover:block">
        {name}
      </p>
      {icon}
    </Link>
  );
};
