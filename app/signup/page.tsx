'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import signUp from '../hooks/signup';

function Signup() {
  const [organizationName, setOrganizationName] = useState('');
  const [organizationEmail, setOrganizationEmail] = useState('');
  const {loading, error, sendRequest} = signUp();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!organizationName || !organizationEmail) {
      console.error('Please fill in all required fields.');
      return;
    }
  
    const signUpData = {
      organizationName,
      organizationEmail,

    };
  
    const response = await sendRequest(
      'https://nezabackend-2a2e9782ab7f.herokuapp.com/api/users/',
      'POST',
      signUpData
    );
  
    if (error) {
      console.error('Signup failed:', error);
    } else if (response) {
      <Link href ='/Login'/>;
    }
  };
  

  return (
    <div className="max-w-full mt- ml-10 bg-white pl-[280px] pt-5">
      <Image
      src="/LOGO.png"
      width={70}
      height={60}
      alt="logo"
      className=''/>
      <div className='flex gap-x-20 '>
        <div>
    <div className="text-black text-[43px] ml-20 pl-[150px] font-['Nunito']">Sign Up </div>
    <form className='mt-5 ml-2 text-[20px] font-["Nunito"]'>
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 ml-10 font-nunito">
          Organization Name:
        </label>
        <input
          id="username"
          name="username"
          className= "w-[583px] h-[57px] rounded-[10px] border-2 border-green-400 border-opacity-30"
          required
        />
      </div>
      <div className="mt-5">
        <label htmlFor="email" className="block text-gray-700 ml-10 font-nunito ">
          Organization Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className= "w-[583px] h-[57px] rounded-[10px] border-2 border-green-400 border-opacity-30"
          required
        />
      </div>      
      <div className="mt-5">
        <label htmlFor="password" className="block text-gray-700 ml-10 font-nunito ">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className= "w-[583px] h-[57px] rounded-[10px] border-2 border-green-400 border-opacity-30"
          required
        />
      </div>
      <div className="mt-5">
        <label htmlFor="org_type" className="block text-gray-700 ml-10 font-nunito ">
          Organisation Type:
        </label>
        <input
          type="email"
          id="org_type"
          name="org_type"
          className= "w-[583px] h-[57px] rounded-[10px] border-2 border-green-400 border-opacity-30"
          required
        />
      </div>
      <div className="mt-5">
        <label htmlFor="website" className="block text-gray-700 ml-10 font-nunito ">
          Organisation website:
        </label>
        <input
          type="text"
          id="website"
          name="website"
          className= "w-[583px] h-[57px] rounded-[10px] border-2 border-green-400 border-opacity-30"
          required
        />
      </div>
      <div className="mt-5">
        <label htmlFor="phone_number" className="block text-gray-700 ml-10 font-nunito ">
          Phone number:
        </label>
        <input
          type="phoneNumber"
          id="phone_number"
          name="phone_number"
          className= "w-[583px] h-[57px] rounded-[10px] border-2 border-green-400 border-opacity-30"
          required
        />
      </div>
      <div className='pl-40'>
      <Link href="/Login">
      <button
            className="ml-5 bg-green-500 text-white px-4 py-3 mt-5 rounded-md pr-5 font-nunito"
            style={{
              width: '200px',
              height: '70px',
              borderRadius: '10px',
              background: '#2DCD1F',
            }}
          > 
            Sign Up
          </button>
      </Link>
      <Link href="/Login">
      <p className='mt-5 text-black text-xl font-normal font-["Nunito"]'>Already have an account? <span className='text-green-400'>Sign In</span></p>
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
export default Signup;