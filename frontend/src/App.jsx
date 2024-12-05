import { useState } from 'react'
import React from 'react'
import Signup from './components/signup/Signup'
import Login from './components/login/Login'
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
      <Navbar/>
      {/* <Hero/>
      <Boxes/>
      <Nav/>
      <Heroclub/>
      <Welcome/>
      <Login/>
      <Video/>
      <About/>
      <Zenith/> 
      <Signup/> 
       <Events/> */}
       <Team/>
    </>
  )
}

export default App
