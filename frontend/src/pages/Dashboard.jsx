// Dashboard.jsx
import React from 'react';
import Sidebar from '../components/SideBar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* ✅ Fixed Sidebar */}
      <div className="w-64 shrink-0">
        <Sidebar />
      </div>

      {/* ✅ Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
