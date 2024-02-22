import React from "react";
import Container from "./Components/Container";

const Dishes = () => {
  const imgURL1 = "bg-[url('./assets/service1.jpg')] ";
  const imgURL2 = "bg-[url('./assets/service2.jpg')] ";
  const imgURL3 = "bg-[url('./assets/service3.jpg')] ";
  return (
    <div className="h-auto bg-[#eeb484] ">
      <div className="text-center px-10 sm:px-60 [&>h1]:py-2 sm:[&>h1]:py-5">
        <h1 className="text-3xl font-semibold">SIGNATURE DISHES</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae
          porro consequatur aliquam, incidunt eius magni provident, doloribus
          omnis minus ovident, doloribus omnis minus temporibus perferendis
          nesciunt.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 sm:gap-10 justify-center items-center mt-10 sm:mt-28 pb-20">
        <Container
          imgURL={imgURL1}
          text="Cobb Salad"
          para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, inciduntLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt"
        />
        <Container
          imgURL={imgURL2}
          text="Twinkies"
          para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, inciduntLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt"
        />
        <Container
          imgURL={imgURL3}
          text="Pot roast"
          para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, inciduntLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt"
        />
      </div>
    </div>
  );
};

export default Dishes;
