import Image from "next/image";
import React from "react";
import DummyImage from "./Screenshot_20221006-171617.jpg";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
const ProjectCard = () => {
  return (
    <section className=" py-5">
      <ImageDiv />
      <Description />
      <ProjectInfo />
      <SocialMedia />
    </section>
  );
};

export default ProjectCard;

const ImageDiv = () => {
  return (
    <div className=" px-4 pt-10 rounded-lg bg-gray-900 relative">
      <button className=" absolute left-4 text-white top-[6px] text-sm bg-black rounded-full px-2 py-1">
        Conceptual Work
      </button>
      <div className=" relative max-h-[300px] overflow-hidden rounded-t-md">
        <Image
          src={DummyImage}
          alt=" "
          className=" object-cover min-w-full min-h-full object-bottom"
        />
      </div>
    </div>
  );
};

const Description = () => {
  return (
    <div className="my-5">
      <h1 className=" text-white text-2xl">
        Promotional landing page for our favorite show
      </h1>
      <p className=" text-[--gray] mt-4">
        Teamed up with a designer to breathe life into a promotional webpage for
        our beloved show, Adventure Time. Delivered a fully responsive design
        with dynamic content capabilities, seamlessly integrating a newsletter
        feature to keep fans updated with the latest adventures.
      </p>
    </div>
  );
};

const ProjectInfo = () => {
  return (
    <div>
      <div className=" flex justify-between items-center pb-2">
        <p className=" text-white text-lg">PROJECT INFO</p>
      </div>
      <div className=" flex justify-between items-center py-2 border-y border-[--gray]">
        <p className=" text-white text-lg">Year</p>
        <p>2023</p>
      </div>
      <div className=" flex justify-between items-center py-2 border-b border-[--gray]">
        <p className=" text-white text-lg">Role</p>
        <p>Front-end developer</p>
      </div>
    </div>
  );
};

const SocialMedia = () => {
  return (
    <div className=" flex justify-start items-center gap-5 mt-5">
      <button className=" flex justify-start items-center gap-2 border-b border-[--green]">
        <p className=" text-[--green] font-medium">LIVE DEMO</p>
        <GoArrowUpRight className=" text-[--green]" />
      </button>
      <button className=" flex justify-start items-center gap-2 border-b border-[--green]">
        <p className=" text-[--green] font-medium">SEE ON GITHUB</p>
        <FaGithub className=" text-[--green]" />
      </button>
    </div>
  );
};
