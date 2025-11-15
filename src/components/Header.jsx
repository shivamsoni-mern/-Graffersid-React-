import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaStar } from 'react-icons/fa'; // FaStar imported hai

function Header({ searchTerm, setSearchTerm }) {
  return (
    <header className="bg-white shadow-md w-full">
      <nav className="container mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
        
        {}
        <Link to="/" className="flex items-center text-3xl font-bold text-purple-700">
          
          {}
          <FaStar className="text-purple-700 mr-2" /> 
          
          <span>Review&RATE</span>
        </Link>
        {/* ------------------------------- */}

        {/* 2. Search Bar */}
        <div className="relative w-full max-w-md hidden md:block">
          <input
            type="text"
            placeholder="Search by company name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>

        {/* 3. Links */}
        <div className="flex items-center space-x-6">
          <Link to="/signup" className="text-gray-700 font-medium hover:text-purple-700">
            SignUp
          </Link>
          <Link to="/login" className="text-gray-700 font-medium hover:text-purple-700">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;