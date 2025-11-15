import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import RatingStars from '../components/RatingStars';
import ReviewCard from '../components/ReviewCard';
import NotFoundPage from './NotFoundPage';

function CompanyDetailsPage({ companies, reviews, onAddReview, onUpdateReview, onDeleteReview }) {
  const { id } = useParams();
  const navigate = useNavigate();

 
  const [reviewFormData, setReviewFormData] = useState({
    reviewerName: '',
    subject: '',
    text: '',
    rating: 0,
  });


  const company = companies.find(c => c.id === parseInt(id));
  const companyReviews = useMemo(() => {
    return reviews.filter(r => r.companyId === parseInt(id));
  }, [reviews, id]);

 
  const averageRating = useMemo(() => {
    if (companyReviews.length === 0) return 0;
    const total = companyReviews.reduce((acc, r) => acc + r.rating, 0);
    return (total / companyReviews.length);
  }, [companyReviews]);


  if (!company) {
    return <NotFoundPage />;
  }

  // Form handling
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setReviewFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (newRating) => {
    setReviewFormData(prev => ({ ...prev, rating: newRating }));
  };


  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (reviewFormData.rating === 0) {
      alert("Please select a rating.");
      return;
    }
    onAddReview({
      ...reviewFormData,
      companyId: company.id,
    });
    
    setReviewFormData({ reviewerName: '', subject: '', text: '', rating: 0 });
  };

  return (
    <div className="space-y-8">
      
      {}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 text-gray-600 hover:text-purple-700 mb-4"
      >
        <FaArrowLeft />
        <span>Back to List</span>
      </button>

      {/* Company Header */}
      <div className="flex flex-col md:flex-row gap-8 bg-white p-8 rounded-lg shadow-lg">
        <img
          src={company.logoUrl}
          alt={`${company.name} Logo`}
          className="w-full md:w-60 h-60 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{company.name}</h1>
          <p className="text-gray-600 text-lg mb-4">{company.location}</p>
          <p className="text-gray-500 mb-4">Founded on: {company.foundedOn}</p>
          <div className="flex items-center space-x-3">
            <span className="text-3xl font-bold text-purple-700">{averageRating.toFixed(1)}</span>
            <RatingStars rating={averageRating} readOnly={true} />
            <span className="text-gray-600">({companyReviews.length} Reviews)</span>
          </div>
        </div>
      </div>

      {/* Reviews Section (Grid Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left/Top: Add Review Form */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-lg sticky top-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Add Your Review</h2>
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label htmlFor="reviewerName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="reviewerName"
                  name="reviewerName"
                  value={reviewFormData.reviewerName}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={reviewFormData.subject}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="text" className="block text-sm font-medium text-gray-700">Review Text</label>
                <textarea
                  id="text"
                  name="text"
                  rows="4"
                  value={reviewFormData.text}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Rating</label>
                <RatingStars
                  rating={reviewFormData.rating}
                  setRating={handleRatingChange}
                  readOnly={false} // Isse stars clickable honge
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:bg-purple-800 transition"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>

        {/* Right/Bottom: Review List */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            All Reviews ({companyReviews.length})
          </h2>
          {companyReviews.length > 0 ? (
            companyReviews.map(review => (
              <ReviewCard
                key={review.id}
                review={review}
                onUpdateReview={onUpdateReview}
                onDeleteReview={onDeleteReview}
              />
            ))
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <p className="text-gray-600">No reviews yet. Be the first to add one!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CompanyDetailsPage;