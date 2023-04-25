import React from 'react'
import './App.css';
import HomePage from './pages/HomePage';
import LoginForm from './pages/LoginForm';
import { Route, Routes } from 'react-router-dom'

function App() {
    return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
