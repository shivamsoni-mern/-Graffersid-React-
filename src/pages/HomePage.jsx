import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import CompanyCard from '../components/CompanyCard';

// 'reviews' prop aa raha hai
function HomePage({ companies, reviews, searchTerm }) {
  const [city, setCity] = useState('');
  const [sortType, setSortType] = useState('Name');


  const filteredAndSortedCompanies = useMemo(() => {
    
    let companiesWithData = companies.map(company => {
      const companyReviews = reviews.filter(r => r.companyId === company.id);
      const reviewCount = companyReviews.length;

      
      let displayRating = 4.5; 
      if (reviewCount === 0) {
        displayRating = 0;
      }

      return {
        ...company,
        avgRating: displayRating, // Dummy Rating (0 ya 4.5)
        reviewCount: reviewCount, // Dynamic Review Count
      };
    });

    let filtered = companiesWithData;

    // 1. Search
    if (searchTerm) {
      filtered = filtered.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    // 2. Filter (City)
    if (city) {
      filtered = filtered.filter(c => c.city === city);
    }
    // 3. Sort
    if (sortType === 'Name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === 'Rating') {
      filtered.sort((a, b) => b.avgRating - a.avgRating);
    }
    
    return filtered;
  }, [companies, reviews, city, sortType, searchTerm]);

  const uniqueCities = [...new Set(companies.map(c => c.city))];

  return (
    <div>
      {}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8 p-4 bg-white rounded-lg shadow">
        
        {/* Left & Middle Group */}
        <div className="flex flex-col md:flex-row items-end gap-4 w-full md:w-auto">
          
          {/* 1. City Filter  */}
          <div className="w-full md:w-96"> {/* <-- UPDATE: 80 se 96 kar diya */}
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Select City</label>
            <div className="relative">
              <select
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
              >
                <option value="">All Cities</option>
                {uniqueCities.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* 2. Find Button (Invisible label + Gradient) */}
          <div className="w-full md:w-auto">
            <label className="block text-sm font-medium text-transparent mb-1 select-none">.</label>
            <button 
              className="w-full md:w-auto px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg shadow hover:from-purple-700 hover:to-indigo-700 transition"
            > {}
              Find Company
            </button>
          </div>

          {}
          <div className="w-full md:w-auto">
            <label className="block text-sm font-medium text-transparent mb-1 select-none">.</label>
            <Link
              to="/add-company"
              className="block w-full md:w-auto px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg shadow hover:from-purple-700 hover:to-indigo-700 transition text-center"
            > {}
              + Add Company
            </Link>
          </div>
        </div>

        {}
        <div className="flex-shrink-0 w-full md:w-auto">
          <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">Sort:</label>
          <select
            id="sort"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="Name">Name</option>
            <option value="Rating">Rating</option>
          </select>
        </div>

      </div>
      {/* ------------------------------------- */}


      {/* --- Company List --- */}
      <p className="text-gray-600 mb-4">Result Found: {filteredAndSortedCompanies.length}</p>
      
      <div className="space-y-6">
        {filteredAndSortedCompanies.map(company => (
          <CompanyCard
            key={company.id}
            company={company} // Isme dummy rating (0 ya 4.5) aur asli review count hai
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;