import React from 'react';

const SignUpPage = () => {
	return (
	<div className="h-screen md:flex">
		<div
			className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-red-400 to-purple-700 i justify-around items-center hidden">
			<div>
				<h1 className="text-white font-bold text-4xl font-sans">Ecom</h1>
				<p className="text-white mt-1">Ecommerce Clothing Store Project</p>
				<a href='/home' type="submit" className="block w-28 bg-white text-red-800 mt-4 py-2 rounded-2xl font-bold mb-2 text-center">Home</a>
			</div>
			<div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
			<div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
			<div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
			<div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		</div>
		<div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
			<form className="bg-white">
				<h1 className="text-gray-800 font-bold text-2xl mb-1">Hello There!</h1>
				<p className="text-sm font-normal text-gray-600 mb-7">Create an Account by Filling up the form below!</p>
						<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
							<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="First Name" />
		</div>
		<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
							<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Last Name" />
		</div>
		<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
							<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Address" />
		</div>
		<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
							<input className="pl-2 outline-none border-none" type="number" name="" id="" placeholder="ZipCode" />
		</div>
		<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
							<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Country" />
		</div>
				<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
							<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" />
		</div>
							<div className="flex items-center border-2 py-2 px-3 rounded-2xl">
								<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Password" />
		</div>
		
		
								<button type="submit" className="block w-full bg-red-400 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
								<a href='/login' className="text-sm ml-2 hover:text-blue-500 cursor-pointer" >Already Have an Account ?</a>
			</form>
		</div>
	</div>
  );
};

export default SignUpPage;
