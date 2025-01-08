import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const [username, setUsername] = useState('USERNAME');
    const location = useLocation();
    
    useEffect(() => {
        if (location.state && location.state.name) {
            setUsername(location.state.name);
        }
    }, [location.state]);

    return (
        <div className="home-page">
            <h2>Welcome back, {username}</h2>
            <div className="dashboard-link">
                <h3>Student Dashboard</h3>
                <p>Login: <a href="https://bip.bitsathy.ac.in/dashboard">Student dashboard</a> to view your individual performance.</p>
            </div>
            <div className="support-info">
                <h3>Support Information</h3>
                <p>For Any Support, (Academic/Non-Academic/Personal) <a href="https://supportdesk.bitsathy.ac.in">Login</a></p>
            </div>
        </div>
    );
};

export default HomePage;
