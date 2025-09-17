import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import RequestForm from './components/RequestForm'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solicitar" element={<RequestForm />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App