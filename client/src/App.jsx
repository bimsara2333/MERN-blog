import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import SignIn from './pages/signIn';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import About from './pages/about';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}