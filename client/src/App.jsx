import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';
import ManagerDashboard from './pages/ManagerDashboard';
import TeamDashboard from './pages/TeamDashboard';
import FreelancerDashboard from './pages/FreelancerDashboard';
import NotFound from './pages/NotFound';

import ResetPassword from './pages/ResetPassword';
import NotAuthorized from './pages/NotAuthorized';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default function App() {
  return (
   <BrowserRouter>
    <Routes>
    {/* Public Routes */}
      <Route path="/" element={<Home/>} />
       <Route path='/about' element={<About />} /> 
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    {/* Authenticated Routes */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/manager" element={<ManagerDashboard />} />
      <Route path="/team" element={<TeamDashboard />} />
      <Route path="/freelancer" element={<FreelancerDashboard />} />
       {/* Fallbacks */}
        <Route path="/unauthorized" element={<NotAuthorized />} />
        <Route path="*" element={<NotFound />} />
        
    </Routes>
   </BrowserRouter>
  )
}
