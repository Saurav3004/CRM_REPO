// src/App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Leads from './pages/Leads';
import Contacts from './pages/Contacts';
import Tickets from './pages/Tickets';
import Login from './pages/Login';
import Analytics from './pages/Analytics'; // default page under dashboard

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Dashboard Layout with Sidebar */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Analytics />} /> 
          <Route path="leads" element={<Leads />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="tickets" element={<Tickets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
