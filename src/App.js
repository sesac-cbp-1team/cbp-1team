import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages';
import ResetStyle from './styles/ResetStyle';
import './styles/GlobalStyle.scss';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
      <ResetStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
