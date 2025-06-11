import React from "react";
import { topUsers } from "../constants/topUsers";



const TopUsers = () => {
  return (
    <div className="h-screen items-center justify-center bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Top 10 Users</h1>
      <div className="flex flex-col h-14 w-96 gap-6">
        {topUsers.map((user, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
            <p className="text-gray-600 mb-1">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Phone:</strong> {user.phone}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Location:</strong> {user.location}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Date of Birth:</strong> {user.dob}
            </p>
            <p className="text-green-600 mt-3 font-semibold">
              Total Spent: ₹{user.totalSpent}
            </p>
            <p className="text-blue-600 font-medium">
              Tickets Booked: {user.ticketsBooked}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopUsers;
