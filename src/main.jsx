import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { CompaniesProvider } from './context/CompaniesContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <CompaniesProvider>
            <App />
        </CompaniesProvider>
    </React.StrictMode>
);
