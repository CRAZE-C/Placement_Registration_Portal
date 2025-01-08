import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import Logo from './assets/BITlogo.png'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email.toLowerCase() === 'admin@gmail.com') {
            navigate('/admin', { state: { email,name } });
        } else if (email.toLowerCase() === 'user@gmail.com') {
            navigate('/student', { state: { email,name } });
        } else {
            alert('Invalid name. Please enter "admin" or "user".');
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Welcome Back!</h2>
                <img src={Logo} alt="Logo" className="logo" />
                <form onSubmit={handleLogin}>
                <label>Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    
                    <button type="submit" className="login-button">Log In</button>
                </form>
                <p>Sign in with your BIT account</p>
            </div>
        </div>
    );
};

export default LoginPage;
