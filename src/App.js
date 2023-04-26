import React from 'react'
import './App.css';
import HomePage from './pages/HomePage';
import LoginForm from './pages/LoginForm';
import { Route, Routes } from 'react-router-dom'
import ThreeDayForecast from './pages/ThreeDayForecast'

function App() {
    return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/threeday/:searchValue" element={<ThreeDayForecast/>} />
      </Routes>
    </div>
  );
}

export default App;
