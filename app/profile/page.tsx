'use client'
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import SideBar from '../components/Sidebar';
import useGetUserDetails from '../hooks/useProfile';
import { ACCESS_TOKEN } from '@/config';


interface UserData {
  username: string;
  email: string;
  password: string;
  org_type: string;
  phone_number: string;
  website: string;
  image: string;
}

const initialData = {
  username: '',
  email: '',
  org_type: '',
  phone_number: '',
  website: '',
  password: '',
  image: '',
};

const Profile = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState<UserData>(initialData);
  const apiToken = ACCESS_TOKEN;

  const fetchUserDetails = async () => {
    try {
      const response = await fetch('https://tinylife.pythonanywhere.com/api/user/details/', {
        headers: {
          'Authorization': `Bearer ${apiToken}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }
      const data = await response.json();
      setUserData(data);
      setFormData(data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = async () => {
    setIsEditMode(false);
    alert('Details updated successfully');

    try {
      const response = await fetch('https://tinylife.pythonanywhere.com/api/user/details/', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status code:', response.status);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      alert('Details updated successfully');
    } catch (error) {
      console.error('Error updating user details:', error);
      alert('Failed to update user details. Please try again later.');
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      
      [name]: value,
    });
  };

  const renderInputFields = () => {
    const fields = [
      { name: 'username', label: 'Username' },
      { name: 'email', label: 'Email' },
      { name: 'org_type', label: 'Organization Type' },
      { name: 'phone_number', label: 'Phone Number' },
      { name: 'website', label: 'Website' },
      { name: 'password', label: 'Password' },
      { name: 'image', label: 'Image' },
    ];

    return fields.map((field) => (
      <div className="mb-10 relative" key={field.name}>
        <label htmlFor={field.name} className="w-72 h-8 text-black text-[20px] font-normal">
          {field.label}:
        </label>
        <div className="relative">
          <input
            type="text"
            id={field.name}
            name={field.name}
            style={{ width: '564px' }}
            className="w-96 px-2 py-2 border-b border-green-600 focus:outline-none focus:border-yellow-600 relative text-black"
            required
            value={isEditMode ? formData[field.name as keyof typeof formData] : userData ? userData[field.name as keyof typeof formData] : ''}
            onChange={handleInputChange}
            readOnly={!isEditMode}
          />

          {isEditMode && (
            <div className="absolute right-4 top-2">
              <EditIcon style={{ color: 'black', margin: '-10px 0' }} onClick={handleEditClick} />
            </div>
          )}
        </div>
      </div>
    ));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
        <div className="flex">
          <SideBar />
          <div className="flex bg-white ml-[20%]">
            <div className="m-auto">
              <h1 className="text-2xl font-semibold mt-4 pl-10 text-black text-center">My Account</h1>
              <div className="max-w-md mx-auto justify-items-center">
                <div className="pl-20">
                  <div className="shrink-0 ml-20">
                    <img src="/kanini.jpg" width={200} alt="profile" className="rounded-full" />
                  </div>
                </div>
              </div>
    
              <form className="ml-10 pl-20" onSubmit={handleSubmit}>
                {renderInputFields()}
    
                <div>
                  <button
                    type="button"
                    className="w-60 h-14 ml-[3%] px-1 bg-custom-green border custom-green bg-green-600 text-white text-[20px] rounded-xl hover:bg-green-600 hover:text-white focus:outline-none focus:bg-green-600"
                    onClick={isEditMode ? handleSaveClick : handleEditClick}
                  >
                    {isEditMode ? 'Done' : 'Edit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    };
    
    export default Profile;
    