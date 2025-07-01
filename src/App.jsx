import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './component/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
   <Routes>
    <Route path='/' element={<Layout/>} >
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
    </Route>
   </Routes>
  )
}

export default App
