// src/components/Sidebar.jsx
import React from 'react';
import { Home, Users, Ticket, Contact } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-[#1e293b] text-white p-5">
      <h1 className="text-2xl font-bold mb-8">CRM Panel</h1>
      <ul className="space-y-6">
        <Link to="/dashboard" className="flex items-center gap-3 hover:text-gray-300">
          <Home size={20} /> Home
        </Link>
        <Link to="/dashboard/leads" className="flex items-center gap-3 hover:text-gray-300">
          <Users size={20} /> Leads
        </Link>
        <Link to="/dashboard/contacts" className="flex items-center gap-3 hover:text-gray-300">
          <Contact size={20} /> Contacts
        </Link>
        <Link to="/dashboard/tickets" className="flex items-center gap-3 hover:text-gray-300">
          <Ticket size={20} /> Tickets
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
