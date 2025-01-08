import React, { useState, useContext } from 'react';
import { CompaniesContext } from '../context/CompaniesContext';

const RegistrationForm = ({ companies }) => {
    const { addApplication } = useContext(CompaniesContext);
    const [selectedCompany, setSelectedCompany] = useState('');
    const [studentName, setStudentName] = useState('');

    const handleChangeCompany = (e) => {
        setSelectedCompany(e.target.value);
    };

    const handleChangeName = (e) => {
        setStudentName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const application = {
            studentName: studentName,
            companyName: selectedCompany
        };
        addApplication(application);
        setSelectedCompany('');
        setStudentName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Student Name:</label>
            <input type="text" value={studentName} onChange={handleChangeName} required />
            
            <label>Select Company:</label>
            <select name="company" value={selectedCompany} onChange={handleChangeCompany} required>
                <option value="">Select...</option>
                {companies.map((company, index) => (
                    <option key={index} value={company.name}>{company.name}</option>
                ))}
            </select>
            
            <button type="submit">Apply</button>
        </form>
    );
};

export default RegistrationForm;
