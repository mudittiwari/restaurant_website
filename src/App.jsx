import React from 'react';
import './App.css';
import './homepage.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import "aos/dist/aos.css";
import Homepagecompone from './components/Homepagecompone.jsx';
import Homepagecomptwo from './components/Homepagecomptwo.jsx';
import Homepagecompthree from './components/Homepagecompthree.jsx';
import Homepagecompfour from './components/Homepagecompfour.jsx';
import Homepagecompfive from './components/Homepagecompfive.jsx';
import Homepagecompsix from './components/Homepagecompsix.jsx';
import Footer from './components/Footer.jsx';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  , []);
  return (
    <div>
      <Navbar />
      <Homepagecompone />
      <Homepagecomptwo />
      <Homepagecompthree />
      <Homepagecompfour />
      <Homepagecompfive />
      <Homepagecompsix />
      <Footer />
    </div>
  );
}

export default App;