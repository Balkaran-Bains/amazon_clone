import React from 'react';
import { Link } from 'react-router-dom';
import AmazonLogo from './a.jpg'; // Assuming the image file is named amazon-logo.png and is located in the same directory as this component

function YetToBeAdd() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-300 to-pink-400">
      <Link to="/">
        <img
          src={AmazonLogo}
          alt="Amazon Logo"
          className="h-20 w-56 mb-8 rounded-md transition-transform duration-300 transform hover:scale-110"
        />
      </Link>
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Coming Soon!</h1>
        <p className="text-lg text-center text-gray-700">This feature is not available yet, but it will be added <strong>soon</strong>.</p>
      </div>
    </div>
  );
}

export default YetToBeAdd;
