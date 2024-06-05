import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
// import Navbar from './components/dropdowntest.jsx'

import Header from './components/header.jsx'
import Services from './components/services.jsx'
import Footer from './components/footer.jsx'
import Contant from './components/contant.jsx'

const handleMouseMove = (event) => {
  console.log('Mouse position:', event.clientX, event.clientY);
  // Additional logic
};

function App() {

  return (
    <>
      <div className="bg-gradient-to-br from-zinc-900 to-gray-900">
        <Navbar />
        <Header />
        <Services />
        <Contant />
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default App
