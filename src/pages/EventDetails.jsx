import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const EventDetails = () => {
  const { id } = useParams();
  const eventData = useLoaderData();
  const [event, setEvent] = useState({});

  useEffect(() => {
    const eventDetails = eventData.find((singleEvent) => singleEvent.id == id);
    setEvent(eventDetails);
  }, [eventData, id]);

  const handleReserveSeat = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Successfully booked a seat",
      text: "",
      icon: "success",
    });
  };

  return (
    <div className="w-11/12 mx-auto mt-10">
      <Helmet>
        <title>{id}</title>
      </Helmet>
      <img
        className="rounded w-full max-h-[700px]"
        src={event.thumbnail}
        alt="event-photo"
      />
      <div className="md:flex items-center">
        <div className="space-y-3 py-5">
          <h1 className="md:text-4xl text-2xl font-semibold">{event.name}</h1>
          <p className="md:text-2xl md:w-4/6">{event.description}</p>
          <p className="flex items-center md:text-xl gap-2">
            <IoTime size={25} />
            {event.date}
          </p>
          <p className="flex items-center gap-2 md:text-xl">
            <FaLocationDot size={25} /> {event.location}
          </p>
          <p className="font-bold flex items-center text-xl md:text-2xl">
            <MdAttachMoney size={25} />
            {event.entry_fee} TK.
          </p>
        </div>
        <div className=" py-5 border-2 border-gray-300 px-10 rounded-2xl my-10">
          <form
            onSubmit={handleReserveSeat}
            className="flex flex-col space-y-3"
          >
            <h1 className="text-4xl font-semibold">Reserve a seat</h1>
            {/* name field */}
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                type="text"
                required
                placeholder="Username"
                pattern="[A-Za-z][A-Za-z0-9\-]*"
                minLength="3"
                maxLength="30"
                title="Only letters, numbers or dash"
              />
            </label>
            {/* email field */}
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <button className="btn bg-primary text-white">Reserve Seat</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
