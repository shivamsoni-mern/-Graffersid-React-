import React from 'react';
import { Link } from 'react-router-dom';
import RatingStars from './RatingStars'; 

function CompanyCard({ company }) {
  const { id, name, logoUrl, location, foundedOn, avgRating, reviewCount } = company;

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      
      {}
      <div className="flex-shrink-0 md:w-48">
        <img
          src={logoUrl}
          alt={`${name} Logo`}
          className="w-full h-48 md:h-full object-cover"
        />
      </div>

      {}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{name}</h2>
        <p className="text-gray-600 text-sm mb-4">{location}</p>
        
        <div className="flex items-center space-x-4">
          <RatingStars rating={avgRating} />
          <span className="text-gray-700 font-medium">{avgRating.toFixed(1)}</span>
          <span className="text-gray-500">({reviewCount} Reviews)</span>
        </div>
      </div>

      {}
      <div className="flex-shrink-0 p-6 flex flex-col justify-between items-start md:items-end border-t md:border-t-0 md:border-l border-gray-200">
        <p className="text-gray-500 text-sm mb-4 md:mb-0">
          Founded on: {foundedOn}
        </p>
        <Link
          to={`/company/${id}`}
          className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition text-center"
        >
          Detail Review
        </Link>
      </div>
    </div>
  );
}

export default CompanyCard;