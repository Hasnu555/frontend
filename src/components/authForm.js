import React, { useState } from 'react';
import axios from 'axios';

const AuthForm = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const userData = {
        email,
        password,
        name,
        age
      };
      const response = await axios.post(`http://localhost:5000/${type}`, userData); // Adjust the URL to match your backend
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ width: '300px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', textAlign: 'center' }}>
      <h2>{type === 'login' ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {type === 'signup' && (
          <div style={{ marginBottom: '10px' }}>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        )}
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {type === 'signup' && (
          <div style={{ marginBottom: '10px' }}>
            <label>Age:</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
        )}
        <button type="submit">{type === 'login' ? 'Login' : 'Sign Up'}</button>
      </form>
      <button style={{ marginTop: '10px' }}>{type === 'login' ? 'Switch to Sign Up' : 'Switch to Login'}</button>
    </div>
  );
};

export default AuthForm;
