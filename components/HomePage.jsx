import React from "react";
import Banner from "./Banner";
import BestSelling from "./BestSelling";
import AboutUs from "./AboutUs";
import Reviews from "./Reviews";

const HomePage = () => {
  return (
    <div className="max-h-full my-10 flex flex-col gap-10">
      <Banner />
      <BestSelling />
      <AboutUs />
      <Reviews />
    </div>
  );
};

export default HomePage;
