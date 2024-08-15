import React from 'react'
import Home from '../pages/Home'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import Doctors from '../pages/Doctors/Doctors'
import Login from '../pages/Login'
import Services from '../pages/Services'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'


import { Route, Routes } from 'react-router-dom'

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/doctor/:id" element={<DoctorDetails/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/register" element={<Signup/>}/>
    </Routes>
  )
}

export default Routers
