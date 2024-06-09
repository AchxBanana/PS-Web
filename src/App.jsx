import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'

import Header from './components/header.jsx'
import Services from './components/services.jsx'
import Contant from './components/contant.jsx'
import Footer from './components/Footer.jsx'
import Imagegal from './components/imagegal.jsx'
import Contact from './components/contact.jsx'

function App() {
  return (
    <>
      <div className="bg-gradient-to-tl from-blue-500 to-pink-600">
        <Navbar />
        <Header />
        <Contant id="contant" />
        <Imagegal />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
