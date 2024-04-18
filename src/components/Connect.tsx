import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Connect = () => {
  return (
    <section className=" px-3 max-w-screen-lg mx-auto grid md:grid-cols-2 md:gap-10 md:px-10 ">
      <div>
        <div>
          <h1 className=" text-2xl font-bold mb-2">LET&apos;S CONNECT</h1>
          <p className=" text-[--gray]">
            Say hello at{" "}
            <span className=" underline underline-[--green] underline-offset-[3px]">
              jaimeen.makavana@gmail.com
            </span>
          </p>
          <p className=" text-[--gray] mt-3">
            For more info, here&apos;s my{" "}
            <span className=" underline underline-[--green] underline-offset-[3px]">
              Resume
            </span>
          </p>
        </div>
        <div className=" flex justify-start items-center gap-4 my-5">
          <FaLinkedinIn className=" text-[--green] size-[28px]" />
          <FaGithub className=" text-[--green] size-[28px]" />
          <FaXTwitter className=" text-[--green] size-[28px]" />
          <FaInstagram className=" text-[--green] size-[28px]" />
        </div>
      </div>

      <ConnectForm />
      <p className="text-white text-[8px] my-5 italic col-span-full">
        @2024 Jaimeen Makavana
      </p>
    </section>
  );
};

export default Connect;

const ConnectForm = () => {
  return (
    <form action="" className="grid gap-y-3">
      <Field label="Name" placeholder="Name" />
      <Field label="Email" placeholder="Email" />
      <Field label="Subject" placeholder="Subject" />
      <div className="">
        <label htmlFor="" className=" text-white mb-2 text-sm">
          Message
        </label>
        <br />
        <textarea
          name=""
          id=""
          placeholder="Subject"
          className=" bg-[#484848] focus:outline-none focus:border-none w-full px-2 rounded-sm py-1 text-sm"
        ></textarea>
      </div>
      <button className=" px-5 py-1 rounded-full text-black bg-[--green] w-fit">
        Submit
      </button>
    </form>
  );
};

const Field = ({ label, placeholder }: any) => {
  return (
    <div className="">
      <label htmlFor="" className=" text-white mb-2 text-sm">
        {label}
      </label>
      <br />
      <input
        type="text"
        placeholder={placeholder}
        className=" bg-[#484848] focus:outline-none focus:border-none w-full px-2 rounded-sm py-1 text-sm"
      />
    </div>
  );
};
