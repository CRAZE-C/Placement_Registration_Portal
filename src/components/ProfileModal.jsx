import React, { useState } from 'react';
import './ProfileModal.css';

const ProfileModal = ({ isOpen, onClose, setProfilePicture }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setName] = useState('abcd');
    const [rollNumber, setRollNumber] = useState('123456');
    const [email, setEmail] = useState('abcd@example.com');

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                const result = reader.result;
                setSelectedImage(result);
                setProfilePicture(result); 
            };
            reader.readAsDataURL(file);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="profile-modal-overlay">
            <div className="profile-modal">
                <button className="close-btn" onClick={onClose}>×</button>
                <div className="profile-picture-upload">
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageChange} 
                        id="profile-pic-input"
                        style={{ display: 'none' }}
                    />
                    <label htmlFor="profile-pic-input">
                        <img 
                            src={selectedImage || "https://via.placeholder.com/100"} 
                            alt="Profile" 
                            className="selected-profile-pic" 
                        />
                    </label>
                </div>
                <div className="profile-details">
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Roll Number:</strong> {rollNumber}</p>
                    <p><strong>Email:</strong> {email}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileModal;
