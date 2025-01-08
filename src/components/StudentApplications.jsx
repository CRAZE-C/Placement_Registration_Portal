import React, { useContext } from 'react';
import { CompaniesContext } from '../context/CompaniesContext';
import './StudentApplications.css';

const StudentApplications = () => {
    const { studentApplications } = useContext(CompaniesContext);

    return (
        <div className="applications">
            {Object.keys(studentApplications).map((companyName, index) => (
                <div key={index} className="company-section">
                    <h3>{companyName}</h3>
                    <ul>
                        {studentApplications[companyName].map((studentName, idx) => (
                            <li key={idx}>{studentName}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default StudentApplications;
