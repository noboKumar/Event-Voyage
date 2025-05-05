import React, { useEffect, useState } from "react";
import EventCards from "./EventCards";

const UpcomingEvents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("eventData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="py-10">
      <h1 className="md:text-4xl font-semibold">
        Upcoming Events
      </h1>
      <div className="bg-primary w-10 h-1 mt-2"></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-10">
        {
            data.map(eventData=> <EventCards eventData={eventData} key={eventData.id}></EventCards>)
        }
      </div>
    </div>
  );
};

export default UpcomingEvents;
