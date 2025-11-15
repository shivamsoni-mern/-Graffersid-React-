import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { toast } from 'react-toastify';

// Mock Data
import { mockCompanies, mockReviews } from './data.js';

// Pages
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AddCompanyPage from './pages/AddCompanyPage';
import CompanyDetailsPage from './pages/CompanyDetailsPage';
import NotFoundPage from './pages/NotFoundPage';

// Logo generate karne ka function
const getLogoUrl = (name) => {
  const initials = name.split(' ').map(word => word[0]).join('').substring(0, 2);
  return `https://ui-avatars.com/api/?name=${initials}&background=random&color=FFFFFF&size=128`;
};

function App() {

  const [companies, setCompanies] = useState(mockCompanies);
  const [reviews, setReviews] = useState(mockReviews);


  const [searchTerm, setSearchTerm] = useState('');


  const handleAddCompany = (companyData) => {
    const newCompany = {
      ...companyData,
      id: Date.now(), 
      logoUrl: getLogoUrl(companyData.name),
    };
    setCompanies([newCompany, ...companies]); 
    toast.success("Company added successfully!");
  };


  const handleAddReview = (reviewData) => {
    const newReview = {
      ...reviewData,
      id: Date.now(), // Unique ID
    };
    setReviews([newReview, ...reviews]);
    toast.success("Review added successfully!");
  };

  const handleUpdateReview = (reviewId, updatedData) => {
    setReviews(prevReviews =>
      prevReviews.map(review =>
        review.id === reviewId ? { ...review, ...updatedData } : review
      )
    );
    toast.info("Review updated!");
  };

  const handleDeleteReview = (reviewId) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      setReviews(prevReviews =>
        prevReviews.filter(review => review.id !== reviewId)
      );
      toast.error("Review deleted!");
    }
  };

  return (
 
    <div className="min-h-screen bg-gray-50">
      
      {}
      <Header 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {}
      <main className="container mx-auto max-w-7xl px-4 py-8">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                companies={companies}
                reviews={reviews} // <-- Yeh 'reviews' pass karna zaroori hai
                searchTerm={searchTerm}
              />
            }
          />
          <Route
            path="/add-company"
            element={<AddCompanyPage onAddCompany={handleAddCompany} />}
          />
          <Route
            path="/company/:id"
            element={
              <CompanyDetailsPage
                companies={companies}
                reviews={reviews}
                onAddReview={handleAddReview}
                onUpdateReview={handleUpdateReview}
                onDeleteReview={handleDeleteReview}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;