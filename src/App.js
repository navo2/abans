import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SlideA from './SemiFinal-1/slidB';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/abans" element={<SlideA />} />
    </Routes>
  </Router>
  );
}

export default App;
