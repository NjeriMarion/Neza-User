// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// function Login() {
//   return (
   
//  <div className="max-w-xl mt-5 ml-9 bg-white p-9">
//         <Image
//         src="/LOGO.png"
//       width={50}
//       height={50}
//       alt="logo"
//       className='mb-10'/>
//         <div className="text-black text-[25px] ml-20">SIGN IN </div>
//     <form className='mt-10 ml-5'>
//       <div className="mb-4">
//         <label htmlFor="organizationName" className="block text-gray-700 mb-2">
//           Organization Name:
//         </label>
//         <input
//           type="text"
//           id="organizationName"
//           name="organizationName"
//           className="w-full px-4 py-4 border border-green-600 rounded-md focus:outline-none focus:border-green-800"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="organizationEmail" className="block text-gray-700 mb-2">
//           Enter Password:
//         </label>
//         <input
//           type="email"
//           id="organizationEmail"
//           name="organizationEmail"
//           className="w-full px-4 py-4 border border-green-600 rounded-md focus:outline-none focus:border-blue-400"
//           required
//         />
//       </div>
//       <div className='pl-20'>
//       <Link href={`./Navigation`}>
//         <button
//           type="submit"
//           className="w-60 mr-45px mt-5 px-1 py-4 bg-white-600 border border-green-600 text-green-600 rounded-xl hover:bg-green-600 hover:text-white focus:outline-none focus:bg-green-600">
//           Sign In
//         </button>
//         </Link>   
//       </div>

//     </form>
//     <a href='./signup'><p className='mt-5'>Don't have an account? <span className='text-green-600'>Sign Up</span></p></a>
//   </div>
 
   
//   );
// }
// export default Login;


import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link'

function SignIn() {
//   const [formData, setFormData] = useState({
//     organizationName: '',
//     organizationEmail: '',
//   });
//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/submit', {
//         method: 'POST',
//         body: JSON.stringify(formData),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       if (response.ok) {
//         // Handle success
//       } else {
//         // Handle errors
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//  };
  return (
    <div className="max-w-full mt- ml-10 bg-white pl-[280px] pt-20">
      <Image
      src="/LOGO.png"
      width={70}
      height={60}
      alt="logo"
      className=''/>
      <div className='flex gap-x-20 '>
        <div>
    <div className="text-black text-[43px] ml-20 pl-[150px] font-['Nunito']">Sign In </div>
    <form className='mt-10 ml-2 w-max text-[20px] font-["Nunito"]'>
      <div className="mb-4">
        <label htmlFor="organizationName" className="block text-gray-700 mb-2 ml-10 font-['Nunito']">
          Organization Name:
        </label>
        <input
          type="text"
          id="organizationName"
          name="organizationName"
          className= "w-[583px] h-[87px] rounded-[10px] border-2 border-green-600 border-opacity-30 font-['Nunito']"
          required
        />
      </div>
      <div className="mb-10 mt-10">
        <label htmlFor="organizationEmail" className="block text-gray-700 mb-2 ml-10">
          Enter Password:
        </label>
        <input
          type="email"
          id="organizationEmail"
          name="organizationEmail"
          className= "w-[583px] h-[87px] rounded-[10px] border-2 border-green-600 border-opacity-30"
          required
        />
      </div>
      <div className='pl-40'>
      <Link href="/navbar">
         <button
          type="submit"
          className="w-[270px] h-[70px] mt-5 px-1 py-4 bg-white-600 border border-green-600 text-green-600 rounded-[10px] hover:bg-green-600 hover:text-white focus:outline-none focus:bg-green-600">
          Sign In
        </button>
      </Link>
      <Link href="./Login/login">
      <p className='mt-10 text-black text-xl'>Don't have an account? <span className='custom-green'>Sign Up</span></p>
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