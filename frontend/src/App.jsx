import { useState } from 'react'
import React from 'react'
import Signup from './signup/Signup'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import About from './components/About/About'
import Video from './components/Video/Video'
import Events from './components/Events/Events'
import Zenith from './components/Zenith/Zenith'
import Team from './components/Team/Team'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar/>
      <Hero/>
      <Boxes/>
      <Nav/>
      <Heroclub/>
      <Welcome/>
      <Login/>
      <Signup/> 
      <Events/>
      <Video/>
      <About/> 
      <Zenith/> */}
      <Team/>
      
    </>
  )
}

export default App
