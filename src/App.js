import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages';
import ResetStyle from './styles/ResetStyle';
import './styles/GlobalStyle.scss';
import IrPerfo from './pages/ir/IrPerfo';
import IrPlan from './pages/ir/IrPlan';
import IrProcess from './pages/ir/IrProcess';
import Ir from './pages/ir/index';
import Footer from './components/common/Footer/index';
import Zeta from './pages/zeta/index';
import ZetaCi from './pages/zeta/ZetaCi';
import ZetaNetwork from './pages/zeta/ZetaNetwork';

function App() {
  return (
    <div className="App">
      <ResetStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ir" element={<Ir />} />
          <Route path="/irPerfo" element={<IrPerfo />} />
          <Route path="/irPlan" element={<IrPlan />} />
          <Route path="/irProcess" element={<IrProcess />} />
          <Route path="/zeta" element={<Zeta />} />
          <Route path="/zetaci" element={<ZetaCi />} />
          <Route path="/zetanetwork" element={<ZetaNetwork />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
