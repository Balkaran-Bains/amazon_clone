import React, { useState } from 'react';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";

function Newuser() {

    const navigateTo = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log('User registered:', authUser);
        navigateTo('/');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-300 to-amber-400">
  <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
    <h2 className="text-3xl font-semibold mb-6">Create Account</h2>
    <form>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
        <input
          type="password"
          id="password"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button 
        onClick={register}
        type="button"
        className="w-full bg-yellow-400 text-white font-semibold py-2 px-4 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500"
      >
        Sign Up
      </button>
    </form>
  </div>
</div>

  )
}

export default Newuser