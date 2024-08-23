import React, { useEffect, useState } from 'react';
import { navLinks } from './index';
import { useGoogleLogin } from '@react-oauth/google';
import {Link, useNavigate} from 'react-router-dom';
import toast, { Toaster} from 'react-hot-toast';

const Navbar = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storeLoginData = localStorage.getItem('isLoggedIn');
    if (storeLoginData === 'true') {
      setLoggedIn(true);
    }
  }, []);
  
  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse);
      setLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true'); 
      localStorage.setItem('token', tokenResponse.access_token);
      toast.success('Login Successfully.');
      console.log(tokenResponse.json());
    }
  });

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('token');
    toast.success('Logout Successfully.');
    navigate('/')

  };

  return (
    <div className='w-full h-[70px] bg-white shadow-lg flex items-center justify-between px-14 fixed z-20'>
      <h3 className='text-2xl font-bold hover:scale-105 cursor-pointer transition-all'>
        Blog<span className='text-orange-600'>X</span>
      </h3>

      <div className='flex space-x-6 mr-8 items-center'>
        {navLinks.map((navItem) => (
          <Link
            key={navItem.id}
            to={navItem.path}
            className='text-gray-700 hover:text-orange-600 hover:scale-105 transition duration-300'
          >
            {navItem.name}
          </Link>
        ))}
        <button
          className={`w-[100px] h-[36px] bg-black cursor-pointer rounded-lg text-sm text-white ${isLoggedIn ? 'bg-red-500' : 'bg-black'} hover:bg-orange-600`}
          onClick={isLoggedIn ? handleLogout : login}
        >
          {isLoggedIn ? 'Sign Out' : 'Sign In'}
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default Navbar;
