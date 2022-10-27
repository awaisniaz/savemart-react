import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home/index'
const Systemrouting = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        < Route path="/about" element={<p>About</p>} />
    </Routes>
}

export default Systemrouting;