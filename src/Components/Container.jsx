import React from "react";

const Container = ({ imgURL, text, para }) => {
  return (
    <div className="bg-white w-52 h-80 sm:w-96 sm:h-96">
      <div
        className={`${imgURL} h-36 sm:h-56 bg-center bg-cover flex justify-center items-end`}
      >
        <h1 className="backdrop-brightness-[.6] flex justify-center w-full text-white text-sm sm:text-2xl py-3 font-semibold">
          {text}
        </h1>
      </div>

      <p className="p-2 sm:p-5 text-sm">{para}</p>
    </div>
  );
};

export default Container;
