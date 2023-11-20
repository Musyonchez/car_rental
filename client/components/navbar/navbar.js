import React from 'react';
import { Link } from 'react-router-dom';
import './globals.css';
// import LogoImage from './images/.'; // Assuming logoimage is an image file path
import { WrappedAuthComponent } from "@/components/auth/AuthComponent";

const Navbar = () => {
  return (
    <div className='max-w-screen flex flex-row justify-between mx-10 pt-2'>
      <div className='text-black'>
          <h1 className=' text-xl font-bold'>A-DASH</h1>
      </div>
      <div className=''>
        <WrappedAuthComponent />
      </div>
    </div>
  );
}

export default Navbar;
