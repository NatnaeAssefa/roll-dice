import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {
  const [probabilities, setProbabilities] = useState([]);
  const [rollResult, setRollResult] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 setProbabilities={setProbabilities} />} />
        <Route path="/roll" element={<Page2 probabilities={probabilities} setRollResult={setRollResult} />} />
        <Route path="/result" element={<Page3 rollResult={rollResult} />} />
      </Routes>
    </Router>
  );
}

export default App;
