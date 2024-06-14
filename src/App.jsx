import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import MouseTracker from './components/MouseTracker.jsx'

import Header from './components/header.jsx';
import Services from './components/services.jsx';
import Contant from './components/contant.jsx';
import Footer from './components/Footer.jsx';
import Imagegal from './components/imagegal.jsx';
import Contact from './components/contact.jsx';
import Course from './components/course.jsx';
import Apply from './components/apply.jsx';
import withSplashScreen from './components/Splahscreen.jsx'

function App() {
  return (
    <BrowserRouter>      
      <div className="bg-gradient-to-tl from-blue-500 to-pink-600">
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Header />
        <Apply />
        <Course />
        <Contant />
        <Imagegal />
        <Contact />
        <MouseTracker />
        <Footer />
      </div>
    </BrowserRouter>

  );
}


function Dashboard() {
  return <div><h1>Dashboard Page</h1></div>;
}

export default App;
