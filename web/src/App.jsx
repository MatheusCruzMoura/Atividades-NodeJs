import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import Login2 from './screens/Login2';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/loginBootstrap' element={<Login2 />} />
      </Routes>
    </Router>
  )
}

export default App
