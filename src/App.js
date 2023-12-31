import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import PasoUno from './viwsis/PasoUno';
import PasoDos from './viwsis/PasoDos';

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
// Subido
export default App;
