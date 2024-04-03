import React, { useState } from 'react';
import AmazonImage from './a.jpg';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigateTo = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log('User signed in:', authUser);
        navigateTo('/');
      })
      .catch((error) => alert(error.message));
  }

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
    <div>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
        <div className="mb-6">
          <img src={AmazonImage} alt="" className="w-64 h-20 rounded-md" />
        </div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              onClick={signin}
              className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
          <div className="mt-4">
            <h1 className="text-gray-700 text-center font-bold mb-2">
              By signing in, you agree to Amazon's Conditions of Use and Privacy Notice.
            </h1>
            <button
              onClick={register}
              className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Create Your Amazon Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
