import { useState } from 'react'
import React from 'react'
import Signup from './signup/Signup'
import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
       {/*<Hero/>
      <Boxes/>
      <Nav/>
      <Heroclub/>
      <Welcome/>
      <Login/>*/}
      <Signup/>
    </>
  )
}

export default App
