import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
// import Navbar from './components/dropdowntest.jsx'

import Header from './components/header.jsx'
import Services from './components/services.jsx'

const handleMouseMove = (event) => {
  console.log('Mouse position:', event.clientX, event.clientY);
  // Additional logic
};

function App() {

  return (
    <>
      <div className="bg-gradient-to-br from-purple-500 to-pink-500">
        <Navbar />
        <Header />
        <Services />
      </div>
    </>
  )
}

export default App
