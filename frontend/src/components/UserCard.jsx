// src/components/UserTable.jsx
import React from 'react';

const users = [
  {
    first: "Eleanor",
    last:"Dunn",
    email: "eleanor.dunn@icloud.com",
    mobile: "0401 006 686",
    age: 22,
    city: "Sydney",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    first: "Eleanor",
    last:"Dunn",
    email: "eleanor.dunn@icloud.com",
    mobile: "0401 006 686",
    age: 22,
    city: "Sydney",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    first: "Eleanor",
    last:"Dunn",
    email: "eleanor.dunn@icloud.com",
    mobile: "0401 006 686",
    age: 22,
    city: "Sydney",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    first: "Eleanor",
    last:"Dunn",
    email: "eleanor.dunn@icloud.com",
    mobile: "0401 006 686",
    age: 22,
    city: "Sydney",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    first: "Eleanor",
    last:"Dunn",
    email: "eleanor.dunn@icloud.com",
    mobile: "0401 006 686",
    age: 22,
    city: "Sydney",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    first: "Bleanor",
    last:"Dunn",
    email: "eleanor.dunn@icloud.com",
    mobile: "0401 006 686",
    age: 22,
    city: "Sydney",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    first: "Eleanor",
    last:"Dunn",
    email: "eleanor.dunn@icloud.com",
    mobile: "0401 006 686",
    age: 22,
    city: "Sydney",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    first: "Eleanor",
    last:"Dunn",
    email: "eleanor.dunn@icloud.com",
    mobile: "0401 006 686",
    age: 22,
    city: "Sydney",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    first: "Eleanor",
    last:"Dunn",
    email: "eleanor.dunn@icloud.com",
    mobile: "0401 006 686",
    age: 22,
    city: "Sydney",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
];

const UserCard = ({ searchTerm,filters }) => {
  const filteredUsers = users.filter((user) => {
    const matchSearch = [user.first, user.last, user.email, user.mobile, user.city]
      .some(field => field.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchCity = filters.city === "" || user.city.toLowerCase().includes(filters.city.toLowerCase());
    const matchAge = filters.age === "" || user.age >= Number(filters.age);

    return matchSearch && matchCity && matchAge;
  })

  return (
    <div className="overflow-x-auto bg-white rounded-md shadow border">
      <table className="min-w-[1200px] text-sm text-gray-700">
        <thead className="bg-gray-100 text-left text-xs text-gray-500 uppercase">
          <tr>
            <th className="px-8 py-4"><input type="checkbox" /></th>
            <th className="p-4 min-w-[150px]">Firstname</th>
            <th className="p-4 min-w-[150px]">Lastname</th>
            <th className="p-4 min-w-[250px]">Email</th>
            <th className="p-4 min-w-[180px]">Mobile</th>
            <th className="p-4 min-w-[80px]">Age</th>
            <th className="p-4 min-w-[150px]">City</th>
            <th className="p-4 min-w-[150px]">City</th>
            <th className="p-4 min-w-[150px]">City</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((u, idx) => (
            <tr key={idx} className="border-t hover:bg-gray-50">
              <td className="px-8 py-4"><input type="checkbox" /></td>
              <td className="p-4 flex items-center gap-2">
                <img src={u.avatar} className="w-8 h-8 rounded-full" />
                {u.first}
              </td>
              <td className="p-4">{u.last}</td>
              <td className="p-4">{u.email}</td>
              <td className="p-4">{u.mobile}</td>
              <td className="p-4">{u.age}</td>
              <td className="p-4">{u.city}</td>
              <td className="p-4">{u.city}</td>
              <td className="p-4">{u.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default UserCard;
