import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function AddCompanyPage({ onAddCompany }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    city: '',
    foundedOn: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCompany(formData);
    navigate('/'); 
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      
      {}
      <button
        onClick={() => navigate(-1)} // -1 ka matlab 'pichle page par jao'
        className="flex items-center space-x-2 text-gray-600 hover:text-purple-700 mb-6"
      >
        <FaArrowLeft />
        <span>Back</span>
      </button>
      
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Add New Company</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Company Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location (Full Address)</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label htmlFor="foundedOn" className="block text-sm font-medium text-gray-700">Founded On</label>
            <input
              type="date"
              id="foundedOn"
              name="foundedOn"
              value={formData.foundedOn}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 py-3 px-6 bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:bg-purple-800 transition"
        >
          Submit Company
        </button>
      </form>
    </div>
  );
}

export default AddCompanyPage;