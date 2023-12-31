import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import PasoUno from './views/PasoUno';
import PasoDos from './views/PasoDos';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<PasoUno />} />
          <Route path='/pasodos' element={<PasoDos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
