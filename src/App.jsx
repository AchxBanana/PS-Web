import React from "react";
import Navbar from "./components/Navbar.jsx";

import Header from "./components/header.jsx";
import Contant from "./components/contant.jsx";
import Footer from "./components/Footer.jsx";
import Imagegal from "./components/imagegal.jsx";
import Contact from "./components/contact.jsx";
import Course from "./components/course.jsx";
import Apply from "./components/apply.jsx";

function App() {
  return (
    <div className="bg-gradient-to-tl from-blue-500 to-pink-600">
      <Navbar />
      <Header />
      <Apply />
      <Course />
      <Contant />
      <Imagegal />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
