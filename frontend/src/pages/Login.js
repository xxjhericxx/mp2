import React from 'react';
import { useEffect, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import constants from '../contexts/constants'

const LoginPage = () => {

const [errorMessages, setErrorMessage] = useState([]);

const renderErrorMessage = (error) => {
  return (
    <div className="error">{error}</div>
  );
}

const navigate = useNavigate();

const handleLogin = (event) => {
  event.preventDefault();

  const body = {
    customerEmailAddress: event.target['username'].value,
    customerPassword: event.target['password'].value
  };
  // console.log(constants.ENDPOINT);
  fetch(`${constants.ENDPOINT}/api/auth/login`, {method: 'POST', mode: 'cors', headers: {
    "Content-Type": "application/json",
  }, body: JSON.stringify(body)})
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      if(data.success) {
        localStorage.setItem('AUTH', 'LOGGED_IN');
        localStorage.setItem('USER', JSON.stringify(data.data.data));
        data.data.data.customerRole === "admin" ? navigate(`/dashboard`) : navigate(`/home`);
      } else {
        localStorage.setItem('AUTH', '');
        alert('Invalid login.')
      }
    })
    .catch(error => console.error(error));
}

useEffect(() => {
  const auth = localStorage.getItem('AUTH');
  // console.log(auth);
  if(auth === 'LOGGED_IN') {
    const user = JSON.parse(localStorage.getItem('USER'));
    // console.log(user);
    user.customerRole === 'admin' ? navigate(`/dashboard`) : navigate('/home');
  }
});

  
  return (
    <div className="h-screen md:flex">
    <div
      className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-red-400 to-purple-700 i justify-around items-center hidden">
      <div>
        <h1 className="text-white font-bold text-4xl font-sans">Ecom</h1>
        <p className="text-white mt-1">Ecommerce Clothing Store Project</p>
        <Link to='/home' type="submit" className="block w-28 bg-white text-red-800 mt-4 py-2 rounded-2xl font-bold mb-2 text-center">Home</Link>
      </div>
      <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
    </div>
    <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
      <form className="bg-white" onSubmit={handleLogin}>
        <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello There!</h1>
        <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back to our Site!</p>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path style={{strokeLinecap:"round", strokeLineJoin:"round", strokeWidth:"2",
                  d:"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"}} />
              </svg>
              <input className="pl-2 outline-none border-none" type="text" name="username" id="username" placeholder="Email Address" required/>
        </div>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path style={{fillRule:"evenodd",
                    d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
                    clipRule:"evenodd"}} />
                </svg>
                <input className="pl-2 outline-none border-none" type="password" name="password" id="password" placeholder="Password" required/>
        </div>
                <button type="submit" className="block w-full bg-red-400 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
                <Link to='/signup' className="text-sm ml-2 hover:text-blue-500 cursor-pointer" >Don't Have an Account ?</Link>
          {/** Display error messages here */}
          {renderErrorMessage(errorMessages)}
      </form>
    </div>
  </div>
  );
};

export default LoginPage;
