import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [idToken, setIdToken] = useState('');

  const handleLogin = async () => {
    const res = await axios.post('http://localhost:5000/api/auth/google', { idToken });
    localStorage.setItem('token', res.data.token);
    window.location.href = '/users';
  };

  const handleChange = (event) => {
    setIdToken(event.target.value);
  };

  return (
    <div>
      <h1>Login with Google</h1>
      <input type="text" placeholder="Google ID Token" value={idToken} onChange={handleChange} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
