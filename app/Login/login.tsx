'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useLogin from '../hooks/uselogin';

const defaultPageLink = "/dashboard";
function SignIn() {
  const {
    organizationEmail,
    setOrganizationEmail,
    password,
    setPassword,
    loading,
    error,
    login,
  } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login();
      console.log('Login successful:', response);
      return (
        <Link href={defaultPageLink}>

        </Link>
      );
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="max-w-full mt- ml-10 bg-white pl-[280px] pt-20">
      <Image
        src="/LOGO.png"
        width={70}
        height={60}
        alt="logo"
        className=""
      />
      <div className='flex gap-x-20 '>
        <div>
          <div className="text-black text-[43px] ml-20 pl-[150px] font-['Nunito']">Sign In </div>
          <form className='mt-10 ml-2 w-max text-[20px] font-["Nunito"]' onSubmit={handleSubmit}>
            {/* ... (your form inputs and submit button) */}

            {/* Add the "Continue to Default Page" link */}
            <div className='pl-40'>
              <button
                type="submit"
                className="w-[270px] h-[70px] mt-5 px-1 py-4 bg-green-600 border border-green-600 text-white rounded-[10px] hover:bg-green-600 hover:text-white focus:outline-none focus:bg-green-600">
                Sign In
              </button>
              <p className='mt-10 text-black text-xl'>Don't have an account? <span className='text-green-600'>Sign Up</span></p>
              {/* Link to the default page */}
              <Link href={defaultPageLink}>
                <a>Continue to Default Page</a>
              </Link>
            </div>
          </form>
        </div>
        <div className='ml-10'>
          <Image
            src="/loc.jpg"
            width={500}
            height={500}
            alt="logo"
            className='w-[600px] h-[600px]'
          />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
