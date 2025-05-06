import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router";
import MyBookingCard from "../components/MyBookingCard";

const MyBookings = () => {
  const bookingsData = useLoaderData();
  return (
    <div className="w-11/12 mx-auto py-5">
      <Helmet>
        <title>Bookings | Event Voyage</title>
      </Helmet>
      <h1 className="md:text-4xl text-2xl font-semibold">My Bookings</h1>
      <div className="bg-primary w-10 h-1 my-2"></div>
      <div className="py-5 flex flex-col gap-5">
        {bookingsData.map((booking) => (
          <MyBookingCard key={booking.id} booking={booking}></MyBookingCard>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
