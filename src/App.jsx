import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Admin from './pages/Admin';
import Student from './pages/Student';
import Login from './LoginPage.jsx';
import './index.css';

const App = () => {
    const [userEmail, setUserEmail] = useState('');
    return(
        <Router>
        <Routes>
            <Route path="/" element={<Login setUserEmail={setUserEmail} />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/student" element={<Student />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Router>
    );
   
}

  

export default App;
