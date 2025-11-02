import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar.jsx'
import { Hero } from './components/Hero.jsx'
import { Projects } from './components/Projects.jsx'
import { Contact } from './components/Contact.jsx'
import { s } from 'framer-motion/client'
import emailjs from '@emailjs/browser';

function App() {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=>{
  setIsLoaded(true);
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  },[])
 
  return(
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
  <Navbar/>
  <Hero/>
  <Projects/>
  <Contact/>
  <>
  <p>&copy; 2025 Sumanth. All rights reserved. </p>
  </>
  </div>
  )
}

export default App
