import React from "react";
import Slider from "../components/slider/Slider";
import UpcomingEvents from "../components/UpcomingEvents";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto py-8">
      <Slider></Slider>
      <UpcomingEvents></UpcomingEvents>
    </div>
  );
};

export default Home;
