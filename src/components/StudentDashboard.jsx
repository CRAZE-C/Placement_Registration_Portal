import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CompaniesContext } from '../context/CompaniesContext';
import HomePage from './Homepage';
import './StudentDashboard.css';
import profilePic from '../assets/profileimage.jpg';

const StudentDashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { email = '', name = '' } = location.state || {};

    useEffect(() => {
        if (!email || !name) {
            navigate('/'); 
        }
    }, [email, name, navigate]);

    const { companies, studentApplications, addApplication } = useContext(CompaniesContext);
    const [activeTab, setActiveTab] = useState('home');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [profilePicture, setProfilePicture] = useState(profilePic);
    const [appliedCompanies, setAppliedCompanies] = useState([]);

    useEffect(() => {
        if (studentApplications) {
            const applied = Object.keys(studentApplications).filter(companyName => 
                studentApplications[companyName].some(application => application.studentEmail === email)
            );
            setAppliedCompanies(applied);
        }
    }, [studentApplications, email]);

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

    const handleApply = (companyName) => {
        const application = {
            studentName: name,
            studentEmail: email,
            companyName: companyName,
        };
        addApplication(application);
        setAppliedCompanies([...appliedCompanies, companyName]);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return <HomePage />;
            case 'companies':
                return (
                    <div className="company-tiles">
                        {companies.map((company, index) => (
                            <div key={index} className="company-tile">
                                <h3>{company.name}</h3>
                                <p><strong>Eligibility Criteria:</strong> {company.eligibility}</p>
                                <button 
                                    onClick={() => handleApply(company.name)}
                                    disabled={appliedCompanies.includes(company.name)}
                                >
                                    {appliedCompanies.includes(company.name) ? 'Applied' : 'Apply'}
                                </button>
                            </div>
                        ))}
                    </div>
                );
            case 'applied-companies':
                return (
                    <div>
                        <h2>Applied Companies</h2>
                        <table className="applied-companies-table">
                            <thead>
                                <tr>
                                    <th>Company Name</th>
                                    <th>Eligibility Criteria</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appliedCompanies.map((companyName, index) => {
                                    const company = companies.find(c => c.name === companyName);
                                    return (
                                        <tr key={index}>
                                            <td>{company.name}</td>
                                            <td>{company.eligibility}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                );
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="student-dashboard">
            <nav className="sidebar">
                <ul>
                    <li onClick={() => setActiveTab('home')}>Home</li>
                    <li onClick={() => setActiveTab('companies')}>Companies</li>
                    <li onClick={() => setActiveTab('applied-companies')}>Applied Companies</li>
                </ul>
            </nav>
            <div className="content">
                {renderContent()}
            </div>
        </div>
    );
};

export default StudentDashboard;
