import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const HeadingSection = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const storeLoginData = localStorage.getItem('isLoggedIn');
    if (storeLoginData === 'true') {
      setLoggedIn(true);
    }
  }, []);
  
  const handleClick = () => {
    if (isLoggedIn) {
      navigate('/blogs');
    } else {
      toast.error('Please sign in first!');
    }
  };

  return (
    <div className='w-full h-[83vh] bg-gray-50 flex items-center justify-center text-center'>
      <div className='mt-3 flex flex-col items-center justify-center'>
        <h2 className='text-[45px] text-gradient font-bold'>Welcome to BlogX - Your Ultimate Sports Hub</h2>
        <p className='mt-4 text-lg text-gray-700 max-w-[95%] md:max-w-[80%] lg:max-w-[60%]'>
          Dive into the latest sports news, in-depth analyses, and exciting stories. Whether it’s game recaps, player insights, or breaking news, we bring the sports world to your fingertips. Stay ahead with us!
        </p>
        <button
          onClick={handleClick}
          className='mt-6 px-6 py-3 bg-custom-gradient text-white font-semibold rounded-lg hover:bg-hover-btn'
        >
          Let's Get Started
        </button>
        <Toaster />
      </div>
    </div>
  );
};

export default HeadingSection;
