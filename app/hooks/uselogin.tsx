import { useState } from 'react';
import signUp from './signup';
// import { useClient } from 'react-server-components';

const useLogin = () => {
    const [organizationEmail, setOrganizationEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loading, error, sendRequest } = signUp();
  
    const login = async () => {
      const loginData = {
        organizationEmail,
        password,
      };
  
      try {
        const response = await sendRequest('https://nezabackend-2a2e9782ab7f.herokuapp.com/api/login/', 'POST', loginData);
        const token = response.token;
        localStorage.setItem('authToken', token);

        return response;
      } catch (err) {
        throw err;
      }
    };
  
    return {
      organizationEmail,
      setOrganizationEmail,
      password,
      setPassword,
      loading,
      error,
      login,
    };
  };
  
  export default useLogin;