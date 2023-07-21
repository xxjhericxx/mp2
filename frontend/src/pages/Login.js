import React from 'react';
// import image
import imageLogin from '../img/loginImg.jpg'

const LoginPage = () => {
  return (
      <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={imageLogin} alt="" />
        </div>

        <div className='bg-red-400 flex flex-col justify-center'>
          <form className='max-w-[400px] w-full mx-auto bg-gray-100 p-8 px-8 rounded-lg'>
            <h2 className='text-4xl dark:text-black font-bold text-center'>SIGN IN</h2>
            <div className='flex flex-col text-gray-900 py-2'>
              <label>Email</label>
              <input 
              className='rounded-lg bg-gray-300 mt-2 p-2 focus:outline-black focus:bg-gray-100' 
              type="text" />
            </div>
            <div className='flex flex-col text-gray-900 py-2'>
              <label>Password</label>
              <input 
              className='rounded-lg bg-gray-300 mt-2 p-2 focus:outline-black focus:bg-gray-100' 
              type="password" />
            </div>
            <div>
              <p><input type="checkbox" /> Remember Me</p>
              <p>Forgot Password?</p>
            </div>
            <button>Sign In</button>
          </form>
        </div>
      </div>
  );
};

export default LoginPage;
