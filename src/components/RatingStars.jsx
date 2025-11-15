import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';


function RatingStars({ rating, setRating, readOnly = true }) {
  
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        // Full Star
        stars.push(
          <FaStar key={i} className="text-yellow-400" />
        );
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        // Half Star
        stars.push(
          <FaStarHalfAlt key={i} className="text-yellow-400" />
        );
      } else {
        // Empty Star
        stars.push(
          <FaRegStar key={i} className="text-gray-300" />
        );
      }
    }
    return stars;
  };


  if (!readOnly) {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          return (
            <label key={starValue} className="cursor-pointer">
              <input
                type="radio"
                name="rating"
                value={starValue}
                onClick={() => setRating(starValue)}
                className="hidden" // Radio button ko chupao
              />
              <FaStar
                size={24}
                color={starValue <= rating ? '#ffc107' : '#e4e5e9'}
              />
            </label>
          );
        })}
      </div>
    );
  }

  return <div className="flex space-x-1">{renderStars()}</div>;
}

export default RatingStars;