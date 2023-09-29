import { BASE_URL } from "@/config";

import { useState } from 'react';

const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const login = async () => {
    setError('');
    setLoading(true)
    const loginData = {
      username,
      password,
    };
  
    try {
      setLoading(true);
      setError('');
      const response = await fetch(`https://nezabackend-2a2e9782ab7f.herokuapp.com/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
  
      if (!response.ok) {
        const errorText = `${response.status} ${response.statusText}`;
        throw new Error(`Login failed: ${errorText}`);
      }
  
      const data = await response.json();
      const token = data.token;
      localStorage.setItem('authToken', token);
  
      return data;
    } catch (err:any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };
  

  return {
    username,
    setUsername,
    password,
    setPassword,
    login
  };
};

export default useLogin;
