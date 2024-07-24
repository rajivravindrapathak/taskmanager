
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/auth/signup', { email, password });
      console.log('Signup success', response.data);
      // Handle success (e.g., redirect to login)
    } catch (error) {
      console.error('Signup error', error);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2 className="signup-title">Signup</h2>
        <input 
          className="signup-input" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          required 
        />  
        <input 
          className="signup-input" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          required 
        />
        <button className="signup-button" type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
