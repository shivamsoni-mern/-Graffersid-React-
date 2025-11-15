import React, { useState } from 'react';
import RatingStars from './RatingStars';
import { FaEdit, FaTrash } from 'react-icons/fa';

function ReviewCard({ review, onUpdateReview, onDeleteReview }) {
  const [isEditing, setIsEditing] = useState(false);
  

  const [editFormData, setEditFormData] = useState({
    subject: review.subject,
    text: review.text,
    rating: review.rating,
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (newRating) => {
    setEditFormData(prev => ({ ...prev, rating: newRating }));
  };

  // Edit save karna
  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdateReview(review.id, editFormData);
    setIsEditing(false); // Form band karo
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      
      {/* Edit Form (Jab 'isEditing' true hai) */}
      {isEditing ? (
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              value={editFormData.subject}
              onChange={handleFormChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Review Text</label>
            <textarea
              name="text"
              rows="3"
              value={editFormData.text}
              onChange={handleFormChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <RatingStars
              rating={editFormData.rating}
              setRating={handleRatingChange}
              readOnly={false}
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="px-4 py-2 bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:bg-purple-800 transition"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        
       
        <div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{review.subject}</h3>
              <p className="text-sm text-gray-500 mb-2">By {review.reviewerName}</p>
            </div>
            <RatingStars rating={review.rating} readOnly={true} />
          </div>
          
          <p className="text-gray-700 my-4">{review.text}</p>
          
          <div className="flex space-x-4">
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
            >
              <FaEdit />
              <span>Edit</span>
            </button>
            <button
              onClick={() => onDeleteReview(review.id)}
              className="flex items-center space-x-2 text-red-600 hover:text-red-800"
            >
              <FaTrash />
              <span>Delete</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewCard;