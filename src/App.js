import React, { useState } from 'react';
import AuthForm from './components/authForm';

const App = () => {
  const [formType, setFormType] = useState('login');

  const toggleFormType = () => {
    setFormType(formType === 'login' ? 'signup' : 'login');
  };

  return (
    <div>
      {formType === 'login' ? <h1>Login</h1> : <h1>Sign Up</h1>}
      <AuthForm type={formType} />
      <button onClick={toggleFormType}>
        {formType === 'login' ? 'Switch to Sign Up' : 'Switch to Login'}
      </button>
    </div>
  );
};

export default App;
