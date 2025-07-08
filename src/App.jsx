import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './component/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Skills from './pages/Skills'
import Project from './pages/Project'
import Contact from './pages/Contact'

function App() {
  return (
   <Routes>
    <Route path='/' element={<Layout/>} >
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='services' element={<Services />}/>
      <Route path='skills' element={<Skills />}/>
      <Route path='project' element={<Project />}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>
   </Routes>
  )
}

export default App;
