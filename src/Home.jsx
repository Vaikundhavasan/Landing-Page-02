import React from "react";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div className="bg-[url('./assets/home2.jpg')] h-screen bg-cover bg-center">
      <div className=" w-full h-full backdrop-brightness-[.45] text-white text-center font-semibold">
        <NavBar />
        <div className="absolute flex justify-center flex-col items-center w-full h-full ">
          <h1 className="text-6xl sm:text-9xl font-bold py-3">BEST BBQ!</h1>
          <p className="text-2xl sm:text-4xl">Get The Best Tasty Food</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
