import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home/index'
import Login from './login/login';
import Signup from './login/signup';
const Systemrouting = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>


    </Routes>
}

export default Systemrouting;