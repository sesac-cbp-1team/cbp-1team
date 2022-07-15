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
import Header from './components/common/Header/index';
import Gbindex from './pages/global/index';
import GbStrategy from './pages/global/GbStrategy';
import GbCase from './pages/global/GbCase';
import Landing from './pages/landing/index';
import MngConsulting from './pages/management/MngConsulting';
import MngCertify from './pages/management/MngCertify';
import MngTrade from './pages/management/Mngtrade';
import MngValue from './pages/management/MngValue';

function App() {
  return (
    <div className="App">
      <ResetStyle />
      <BrowserRouter>
        {/*<Header />*/}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ir" element={<Ir />} />
          <Route path="/ir-perfo" element={<IrPerfo />} />
          <Route path="/ir-plan" element={<IrPlan />} />
          <Route path="/ir-process" element={<IrProcess />} />
          <Route path="/gb-index" element={<Gbindex />} />
          <Route path="/gb-strategy" element={<GbStrategy />} />
          <Route path="/gb-case" element={<GbCase />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/mng-consulting" element={<MngConsulting />} />
          <Route path="/mng-certify" element={<MngCertify />} />
          <Route path="/mng-trade" element={<MngTrade />} />
          <Route path="/mng-value" element={<MngValue />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
