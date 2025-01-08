import React, { createContext, useState, useEffect } from 'react';

export const CompaniesContext = createContext();

export const CompaniesProvider = ({ children }) => {
    const [companies, setCompanies] = useState([]);
    const [studentApplications, setStudentApplications] = useState({});

    useEffect(() => {
        const savedCompanies = JSON.parse(localStorage.getItem('companies')) || [];
        const savedStudentApplications = JSON.parse(localStorage.getItem('studentApplications')) || {};
        setCompanies(savedCompanies);
        setStudentApplications(savedStudentApplications);
    }, []);

    useEffect(() => {
        localStorage.setItem('companies', JSON.stringify(companies));
        localStorage.setItem('studentApplications', JSON.stringify(studentApplications));
    }, [companies, studentApplications]);

    const addCompany = (company) => {
        setCompanies([...companies, company]);
    };

    const addApplication = (application) => {
        setStudentApplications(prevApplications => ({
            ...prevApplications,
            [application.companyName]: [
                ...(prevApplications[application.companyName] || []),
                application
            ]
        }));
    };

    const deleteCompany = (companyName) => {
        setCompanies(companies.filter(company => company.name !== companyName));
        const { [companyName]: _, ...rest } = studentApplications;
        setStudentApplications(rest);
    };

    return (
        <CompaniesContext.Provider value={{ companies, setCompanies, studentApplications, addApplication, addCompany, deleteCompany }}>
            {children}
        </CompaniesContext.Provider>
    );
};
