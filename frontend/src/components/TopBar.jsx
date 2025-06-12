import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopBar = ({ searchTerm, setSearchTerm, setFilters }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [city, setCity] = useState('');
  const [age, setAge] = useState('');

  const applyFilters = () => {
    setFilters({ city, age });
    setShowFilter(false);
  };

  return (
    <div className="mb-4">
      <div className='flex gap-4 items-center'>
        <img src="https://i.pinimg.com/originals/41/1a/48/411a4835d38ff899e55ce2802b08329c.jpg" alt="Logo" className="w-10 h-10 border rounded-full mt-2" />
        <Link to={'/'} className="text-3xl text-purple-500 font-semibold mt-2">My Audience</Link>
      </div>

      <div className="relative flex items-center space-x-4">
        <button
          className='flex items-center justify-center gap-2 border px-9 py-3 rounded-md border-slate-400 mt-8'
          onClick={() => setShowFilter(!showFilter)}
        >
          <Filter size={13} />
          <span>Filter</span>
        </button>

        {/* Filter Box */}
        {showFilter && (
          <div className="absolute left-0 mt-40 z-50 bg-white shadow-md p-4 rounded-md border space-y-2">
            <div>
              <label className="text-sm text-gray-600">City</label>
              <input
                type="text"
                className="border px-3 py-1 mt-1 rounded w-full"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Sydney"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Age (min)</label>
              <input
                type="number"
                className="border px-3 py-1 mt-1 rounded w-full"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="e.g. 25"
              />
            </div>
            <button
              className="mt-2 bg-purple-500 text-white px-4 py-1 rounded"
              onClick={applyFilters}
            >
              Apply
            </button>
          </div>
        )}

        <div className='flex items-center gap-8 border border-slate-400 px-9 py-3 rounded-md w-[600px] mt-8'>
          <Search size={13} />
          <input
            type="text"
            value={searchTerm}
            placeholder="Search 623,563 contacts..."
            className='outline-none w-full h-6'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
