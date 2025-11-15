import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-9xl font-bold text-purple-700">404</h1>
      <p className="text-3xl font-semibold text-gray-800 mt-4">Page Not Found</p>
      <p className="text-gray-500 mt-2 mb-8">
      Page not found
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:bg-purple-800 transition"
      >
        Go Back to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
