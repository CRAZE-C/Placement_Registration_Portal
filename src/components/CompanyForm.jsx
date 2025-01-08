import React, { useState, useContext } from 'react';
import { CompaniesContext } from '../context/CompaniesContext';

const CompanyForm = () => {
    const { addCompany } = useContext(CompaniesContext);
    const [company, setCompany] = useState({ name: '', eligibility: '' });

    const handleChange = (e) => {
        setCompany({ ...company, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addCompany(company);
        setCompany({ name: '', eligibility: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Company Name:</label>
            <input
                type="text"
                name="name"
                value={company.name}
                onChange={handleChange}
                required
            />
            
            <label>Eligibility Criteria:</label>
            <input
                type="text"
                name="eligibility"
                value={company.eligibility}
                onChange={handleChange}
                required
            />
            
            <button type="submit">Add Company</button>
        </form>
    );
};

export default CompanyForm;
