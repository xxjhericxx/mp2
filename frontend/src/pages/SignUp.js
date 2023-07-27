import React from 'react';
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import constants from '../contexts/constants';

const SignUpPage = () => {

	const [errorMessages, setErrorMessage] = useState([]);

	const renderErrorMessage = (error) => {
	  return (
		<div className="error">{error}</div>
	  );
	}
	
	const navigate = useNavigate();
	const handleSignUp = (event) => {
	  event.preventDefault();
	
		// encrypt password
		const encryptedPasswrd = btoa(event.target['password'].value)

		// compose body request
	  const body = {
		customerFirstName: event.target['firstName'].value,
		customerLastName: event.target['lastName'].value,
		customerEmailAddress: event.target['email'].value,
		customerPassword: encryptedPasswrd
	  }; 
	  fetch(`${constants.ENDPOINT}/api/customers`, {method: 'POST', mode: 'cors', headers: {
		"Content-Type": "application/json",
	  }, body: JSON.stringify(body)})
		.then(response => response.json())
		.then(data => {
		  if(data.success) {
			alert('Congratulations! You have successfully created an account.');
			navigate(`/login`);
		  } else {
			alert('Sign up unsuccessful.')
		  }
		})
		.catch(error => console.error(error));
	}
	
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
			<form className="bg-white" onSubmit={handleSignUp}>
				<h1 className="text-gray-800 font-bold text-2xl mb-1">Hello There!</h1>
				<p className="text-sm font-normal text-gray-600 mb-7">Create an Account by Filling up the form below!</p>
						<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
							<input className="pl-2 outline-none border-none" type="text" name="firstName" id="firstName" placeholder="First Name" required />
						</div>
						<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
							<input className="pl-2 outline-none border-none" type="text" name="lastName" id="lastName" placeholder="Last Name" required/>
						</div>
						<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
							<input className="pl-2 outline-none border-none" type="email" name="email" id="email" placeholder="Email Address" required/>
						</div>
						<div className="flex items-center border-2 py-2 px-3 rounded-2xl">
								<input className="pl-2 outline-none border-none" type="password" name="password" id="password" placeholder="Password" required/>
						</div>
						<button type="submit" className="block w-full bg-red-400 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Sign Up</button>
						<Link to='/login' className="text-sm ml-2 hover:text-blue-500 cursor-pointer" >Already Have an Account ?</Link>
				{/** Display error messages here */}
				{renderErrorMessage(errorMessages)}
			</form>
		</div>
	</div>
	);
};

export default SignUpPage;
