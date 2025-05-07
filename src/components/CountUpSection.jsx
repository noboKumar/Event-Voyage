import React from "react";
import CountUp from "react-countup";

const CountUpSection = () => {
  return (
    <div className="bg-gray-200 rounded-2xl shadow-sm my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-20 px-10 w-11/12 mx-auto space-y-5">
        <div className="text-center">
          <p className="text-2xl">Total Clients</p>
          <CountUp
            className="text-5xl text-primary font-semibold"
            start={0}
            end={1200}
            duration={5}
            suffix="+"
          ></CountUp>
        </div>
        <div className="text-center">
          <p className="text-2xl">Total Reviews</p>
          <CountUp
            className="text-5xl text-primary font-semibold"
            start={0}
            end={450}
            duration={5}
            suffix="+"
          ></CountUp>
        </div>
        <div className="text-center">
          <p className="text-2xl">Events Organized</p>
          <CountUp
            className="text-5xl text-primary font-semibold"
            start={0}
            end={200}
            duration={5}
            suffix="+"
          ></CountUp>
        </div>
        <div className="text-center">
          <p className="text-2xl">Areas Covered</p>
          <CountUp
            className="text-5xl text-primary font-semibold"
            start={0}
            end={15}
            duration={5}
            suffix="+"
          ></CountUp>
        </div>
      </div>
    </div>
  );
};

export default CountUpSection;
