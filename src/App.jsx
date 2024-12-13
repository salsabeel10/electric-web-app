import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import './App.css'
import Home from './Component/Home/Home'
import AboutPage from './Component/About/AboutPage'
import ContactPage from './Component/Contact/ContactPage'
import ServicesPage from './Component/Services/ServicesPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service" element={<ServicesPage />} />
      </Routes>
    </Router>
  )
}

export default App
