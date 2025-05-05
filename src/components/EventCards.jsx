import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";

const EventCards = ({ eventData }) => {
  const { thumbnail, name, category, date, location, entry_fee } = eventData;
  return (
    <div className="border-2 border-base-300 p-5 rounded-2xl space-y-2">
      <img className="w-full md:h-60 md:min-h-64 rounded-2xl mx-auto" src={thumbnail} alt="event-photo" />
      <p className="font-medium text-primary underline">{category}</p>
      <h1 className="text-xl md:text-2xl font-semibold">{name}</h1>
      <p className="flex items-center md:text-xl gap-2"><IoTime size={25} />{date}</p>
        <p className="flex items-center gap-2 md:text-xl"><FaLocationDot size={25} /> {location}</p>
        <p className="font-bold flex items-center text-xl md:text-2xl"><MdAttachMoney size={25} />{entry_fee} TK.</p>
      <button className="btn bg-primary text-white rounded-2xl">View more</button>
    </div>
  );
};

export default EventCards;
