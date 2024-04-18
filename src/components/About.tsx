import React from "react";
import Profile from "./Screenshot_20221006-171617.jpg";
import Image from "next/image";

const About = () => {
  return (
    <section className=" border-t border-[--gray] px-3 py-5">
      <div>
        <p className=" text-[--gray]">
          I am a front-end developer based in Sydney looking for exciting
          opportunities. Has Mechanical Engineering background. Likes to focus
          on accessibility when developing.{" "}
        </p>
        <button className=" text-[--green] border-b border-[--green] mt-2 uppercase">
          About me
        </button>
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

export default About;
