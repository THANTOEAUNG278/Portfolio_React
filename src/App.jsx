import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './component/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
   <Routes>
    <Route path='/' element={<Layout/>} >
      <Route/>
    </Route>
   </Routes>
  )
}

export default App
