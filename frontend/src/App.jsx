import { useState } from 'react'
import React from 'react'
import Signup from './signup/Signup'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import About from './components/About/About'
import Video from './components/Video/Video'
import Events from './components/Events/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*<Navbar/>
      <Hero/>
      <Boxes/>
      <Nav/>
      <Heroclub/>
      <Welcome/>
      <Login/>
      <Signup/>
      <Video/>
      <About/>*/}
      <Events/>
    </>
  )
}

export default App
