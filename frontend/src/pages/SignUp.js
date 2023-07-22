import React from 'react';
// import image
import imageSignup from '../img/signupImg.jpg'

const SignUpPage = () => {
  return (
      <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={imageSignup} alt="" />
        </div>

        
      </div>
  );
};

export default SignUpPage;
