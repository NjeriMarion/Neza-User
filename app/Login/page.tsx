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

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
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
          <div className="mb-4">
        <label htmlFor="organizationName" className="block text-gray-700 mb-2 ml-10 font-nunito">
          Organization Name:
        </label>
        <input
          type="text"
          id="organizationName"
          name="organizationName"
          className= "w-[583px] h-[87px] rounded-[10px] border-2 border-green-400 border-opacity-30"
          required
        />
      </div>
      <div className="mb-10 mt-10">
        <label htmlFor="organizationEmail" className="block text-gray-700 mb-2 ml-10 font-nunito ">
          Enter Password:
        </label>
        <input
          type="email"
          id="organizationEmail"
          name="organizationEmail"
          className= "w-[583px] h-[87px] rounded-[10px] border-2 border-green-400 border-opacity-30"
          required
        />
       </div>

            <div className='pl-40'>
            <Link href={defaultPageLink}>
               <button
            className="ml-10 bg-green-500 text-white px-4 py-3 mt-20 rounded-md mt-2 pr-5 font-nunito"
            style={{
              width: '200px',
              height: '70px',
              borderRadius: '10px',
              background: '#2DCD1F',
            }}
          >
            Sign In
          </button>
              </Link>
              <Link href="/signup">
      <p className='mt-10 text-black text-xl font-normal font-["Nunito"]'>Don't have an account? <span className='text-green-400'>Sign Up</span></p>
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
