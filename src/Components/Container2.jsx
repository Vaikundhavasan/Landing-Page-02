import React from "react";

const Container2 = ({ text, para }) => {
  return (
    <div className="bg-white w-96 h-96">
      <div className="bg-[url('./assets/service2.jpg')] h-56 bg-center bg-cover flex justify-center items-end">
        <h1 className="backdrop-brightness-50 flex justify-center w-full text-white text-2xl py-3 font-semibold">
          {text}
        </h1>
      </div>
      <p className="p-5">{para}</p>
    </div>
  );
};

export default Container2;
