import React from 'react';
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import constants from '../contexts/constants';

const Checkout = () => {

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
				<h1 className="text-white font-bold text-4xl font-sans">Checkout</h1>
				<p className="text-white mt-1">Please Fill in your Information</p>
				<Link to='/cart' type="submit" className="block w-28 bg-white text-red-800 mt-4 py-2 rounded-2xl font-bold mb-2 text-center">Back</Link>
			</div>
			<div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
			<div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
			<div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
			<div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		</div>
		<div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form class="w-full max-w-lg">
			<div className='flex justify-center'> 
				<h1 className='text-5xl font-bold py-5'>
					Checkout Form
				</h1>
			</div>
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
				<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
					First Name
				</label>
				<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
				</div>
				<div class="w-full md:w-1/2 px-3">
				<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
					Last Name
				</label>
				<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
				</div>
			</div>
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
				<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
					Contact No.
				</label>
				<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="number" />
				</div>
				<div class="w-full md:w-1/2 px-3">
				<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
					Email Address
				</label>
				<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" />
				</div>
			</div>
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full px-3">
				<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
					Address
				</label>
				<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" />
				</div>
			</div>
			<div class="flex flex-wrap -mx-3 mb-2">
				<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
				<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
					City
				</label>
				<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />
				</div>
				<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
				<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
					State
				</label>
				<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />
				</div>
				<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
				<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
					Zip Code
				</label>
				<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" />
				</div>
				<button className="block w-full bg-red-400 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"><a href="/thankyou">Confirm Order</a></button>
			</div>
				{/** Display error messages here */}
				{renderErrorMessage(errorMessages)}
			</form>
		</div>
	</div>
	);
};

export default Checkout;
