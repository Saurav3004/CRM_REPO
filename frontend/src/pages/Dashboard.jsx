import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Sidebar from '../components/Sidebar';
import UserCard from '../components/UserCard';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ city: "", age: "" });

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="fixed top-0 self-start">
        <Sidebar />
      </div>

      <main className="ml-24 flex-1 overflow-y-auto bg-[#f9fafb] p-6 relative">
        <div className="sticky top-0 bg-[#f9fafb] z-20 pb-4">
          <TopBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setFilters={setFilters} />
        </div>

        <div className='w-full overflow-x-auto mt-2'>
          <UserCard searchTerm={searchTerm} filters={filters} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
