// src/components/Sidebar.jsx
import React from 'react';
import { Home, Users, Ticket, Contact, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='flex flex-col justify-between'>
      <div className="w-24 h-screen bg-white shadow-md flex flex-col items-center py-6 space-y-12">
      <button><Menu /></button>
      <Link to="/"><Home size={20} /></Link>
      <Link to="/audience"><Users size={20} /></Link>
      <Link to="/tickets"><Ticket size={20} /></Link>
      <Link to="/contacts"><Contact size={20} /></Link>
    </div>

    
    </div>
  );
};

export default Sidebar;
