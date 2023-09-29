'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useLogin from '../hooks/useLogin';


const defaultPageLink = "/dashboard";

function Login() {
  const { username, setUsername, password, setPassword, login } = useLogin();

  const handleSubmit = async () => {
    if (!username || !password) {
      console.error('Incorrect credentials');
      return;
    }
    try {
      await login();
      window.location.href = defaultPageLink;
      console.log('Logged In')

    } catch (err) {
      console.error('Login failed:', err);
    }
  };


  return (
    <div className="max-w-full w-auto h-auto mt- ml-10 bg-white pl-[280px] pt-20">
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
              <label htmlFor="organizationEmail" className="block text-gray-700 mb-2 ml-10 font-nunito">
                Organization Email:
              </label>
              <input
                type="text"
                id="organizationEmail"
                name="organizationEmail"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-[583px] h-[87px] rounded-[10px] border-2 border-green-400 border-opacity-30"
                required
              />
            </div>
            <div className="mb-10 mt-10">
              <label htmlFor="password" className="block text-gray-700 mb-2 ml-10 font-nunito ">
                Enter Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[583px] h-[87px] rounded-[10px] border-2 border-green-400 border-opacity-30"
                required
              />
            </div>
            <div className='pl-40'>
            {/* <Link href={defaultPageLink}> */}
              <button
                type='submit'
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
              {/* </Link> */}
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
            className='w-[600px] h-[auto]'
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
