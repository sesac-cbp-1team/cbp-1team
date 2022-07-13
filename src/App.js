import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages';
import ResetStyle from './styles/ResetStyle';
import './styles/GlobalStyle.scss';
import Login from './pages/login';
import IrPerfo from './pages/ir/IrPerfo';
import IrPlan from './pages/ir/IrPlan';
import IrProcess from './pages/ir/IrProcess';
import Ir from './pages/ir/index';
function App() {
  return (
    <div className="App">
      <ResetStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ir" element={<Ir />} />
          <Route path="/irPerfo" element={<IrPerfo />} />
          <Route path="/irPlan" element={<IrPlan />} />
          <Route path="/irProcess" element={<IrProcess />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
