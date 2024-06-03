import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Header from './components/header.jsx'
import Services from './components/services.jsx'

const handleMouseMove = (event) => {
  console.log('Mouse position:', event.clientX, event.clientY);
  // Additional logic
};

function App() {

  return (
    <>
      <div className="bg-zinc-900">
        <Navbar />
        <Header />
        <Services />
      </div>
    </>
  )
}

export default App
