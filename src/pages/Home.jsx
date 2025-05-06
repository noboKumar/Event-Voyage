import React from "react";
import Slider from "../components/slider/Slider";
import UpcomingEvents from "../components/UpcomingEvents";
import Review from "../components/Review";
import CountUpSection from "../components/CountUpSection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto py-8">
      <Helmet>
        <title>Home | Event Voyage</title>
      </Helmet>
      <Slider></Slider>
      <UpcomingEvents></UpcomingEvents>
      <Review></Review>
      <CountUpSection></CountUpSection>
    </div>
  );
};

export default Home;
