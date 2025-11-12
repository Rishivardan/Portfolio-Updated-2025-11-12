import { useState } from 'react'
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Tallent from './Tallent'
import Contact from './Contact'
import Footer from './Footer'
import Projects from './Projects'



function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // 1000ms animation
  }, []);
  return(
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Tallent></Tallent>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
