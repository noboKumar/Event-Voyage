import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";

const MyBookingCard = ({ booking }) => {
  const { name, thumbnail, date, location, entry_fee } = booking;
  return (
    <div className="md:flex items-center justify-between border-2 border-gray-200 px-5 space-y-5 md:space-y-0 md:px-40 py-5 rounded-2xl">
      <div>
        <h1 className="text-xl md:text-2xl font-semibold">{name}</h1>
        <p className="flex items-center md:text-xl gap-2">
          <IoTime size={25} />
          {date}
        </p>
        <p className="flex items-center gap-2 md:text-xl">
          <FaLocationDot size={25} /> {location}
        </p>
        <p className=" flex items-center text-xl md:text-2xl">
          <MdAttachMoney size={25} />
          {entry_fee} TK.
        </p>
      </div>
      <div>
        <img className="md:w-[300px] md:h-[150px] rounded-2xl" src={thumbnail} alt="" />
      </div>
    </div>
  );
};

export default MyBookingCard;
