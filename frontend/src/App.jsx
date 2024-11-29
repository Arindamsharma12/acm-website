import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Boxes from './components/Boxes'
import Nav from './clubs/Nav'
import Heroclub from './clubs/Heroclub'
import Welcome from './clubs/Welcome'
import Signup from './signup/Signup'
import Login from './login/Login'

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
      <Signup/>*/}
      <Login/>
      
    </>
  )
}

export default App
