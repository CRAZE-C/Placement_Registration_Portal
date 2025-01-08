import React, { useContext, useState } from 'react';
import CompanyForm from './CompanyForm';
import { CompaniesContext } from '../context/CompaniesContext';
import ProfileModal from './ProfileModal';
import HomePage from './Homepage';
import './AdminDashboard.css';
import profilePic from '../assets/profileimage.jpg';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const { companies, studentApplications, deleteCompany } = useContext(CompaniesContext);

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

    const renderContent = () => {
        switch (activeTab) {
            case 'job-post':
                return (
                    <>
                        <div className='admin-dashboard__content'>
                        <CompanyForm />
                        <div>
                        <h3>Added Companies</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Company Name</th>
                                    <th>Eligibility Criteria</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {companies.map((company, index) => (
                                    <tr key={index}>
                                        <td>{company.name}</td>
                                        <td>{company.eligibility}</td>
                                        <td>
                                            <button onClick={() => deleteCompany(company.name)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                        </div>
                        
                    </>
                );
            case 'registrations':
                return (
                    <div className="company-tiles">
                        {Object.keys(studentApplications).length === 0 ? (
                            <div>No applications found.</div>
                        ) : (
                            Object.keys(studentApplications).map((companyName, index) => (
                                <div key={index} className="company-tile">
                                    <h3>{companyName}</h3>
                                    <ol>
                                        {studentApplications[companyName].map((application, idx) => (
                                            <li key={idx}>{application.studentName} ({application.studentEmail})</li>
                                        ))}
                                    </ol>
                                </div>
                            ))
                        )}
                    </div>
                );
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="admin-dashboard">
            <nav className="sidebar">
                <ul>
                    <li onClick={() => setActiveTab('home')}>Home</li>
                    <li onClick={() => setActiveTab('job-post')}>Job Post</li>
                    <li onClick={() => setActiveTab('registrations')}>Registrations</li>
                </ul>
            </nav>
            <div className="content">
                {renderContent()}
            </div>
        </div>
    );
};

export default AdminDashboard;
