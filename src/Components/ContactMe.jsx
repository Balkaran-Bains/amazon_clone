import React from 'react';

function ContactMe() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-pink-400 to-purple-600">
      <div className="max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-pink-600">Contact Information</h1>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2 text-purple-700">Name:</h2>
          <span className="text-gray-800">Balkaran Singh Bains</span>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2 text-purple-700">Mobile No.:</h2>
          <span className="text-gray-800">9815742102 (whatsapp)</span>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2 text-purple-700">Email:</h2>
          <span className="text-gray-800">bainsbalkaran22@gmail.com</span>
          <span className="text-gray-800 block">bbains_be20@thapar.edu</span>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2 text-purple-700">Twitter:</h2>
          <a href="https://twitter.com/Bains_Thinking" target="_blank" className="text-blue-500 hover:underline">https://twitter.com/Bains_Thinking</a>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2 text-purple-700">GitHub:</h2>
          <a href="https://github.com/Balkaran-Bains" target="_blank" className="text-blue-500 hover:underline">https://github.com/Balkaran-Bains</a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
