import React from "react";

const Title = ({ head, secondHead, body }: any) => {
  return (
    <div className=" mt-7 mb-3 max-w-screen-sm">
      <h1 className=" uppercase bebas text-white text-[38px] font-medium leading-9 mb-2">
        {head} <br />
        <span className={`bebas ${secondHead?.length > 0 ? "" : "hidden"}`}>
          {secondHead}
        </span>
      </h1>
      <p className=" text-[gray] ">{body}</p>
    </div>
  );
};

export default Title;
