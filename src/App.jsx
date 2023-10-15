import React from "react"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Skills from "./Components/Skills"
import Viewpage from "./Components/Viewpage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <>
    <Router>
          
           <Navbar/> 
           <Routes></Routes>
           <Home/>
           <Skills/>
           <Viewpage/>
           
    </Router>  
           
    </>
  )
}

export default App
