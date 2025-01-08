import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import ProfileModal from './ProfileModal';
import profilePic from '../assets/profileimage.jpg';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [profilePicture, setProfilePicture] = useState(profilePic);
    const [username, setUsername] = useState('USERNAME');

    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.name) {
            setUsername(location.state.name);
        }
    }, [location.state]);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const openModal = () => {
        setModalOpen(true);
        setDropdownOpen(false);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <header className="header">
            <div className="logo-and-nav">
                <h1>BIT Placement Registration</h1>
            </div>
            <div className="profile" onClick={toggleDropdown}>
                <img src={profilePicture} alt="Profile" className="profile-pic" />
                <span className="username">{username}</span>
                {dropdownOpen && (
                    <ul className="dropdown-menu">
                        <li><Link to="/logout">Logout</Link></li>
                    </ul>
                )}
            </div>
            <ProfileModal isOpen={modalOpen} onClose={closeModal} setProfilePicture={setProfilePicture} />
        </header>
    );
};

export default Header;
