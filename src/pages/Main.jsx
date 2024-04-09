import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import App from '../App';
import Student from './Student';
import { useUser } from '../UserContext'; // Import useUser hook

function Main() {
  const { user } = useUser(); // Access user data using useUser hook

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<App />} />
        <Route path="/student" element={<Student user={user} />} />
        {/* <Route path="/dashboard" element={<App />} />
        <Route path="/dashboard" element={<App />} />
        <Route path="/dashboard" element={<App />} />
        <Route path="/dashboard" element={<App />} />
        <Route path="/dashboard" element={<App />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
