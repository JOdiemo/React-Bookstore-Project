import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/NavBar';
import MainCategory from './components/MainCategory';
import MainBooks from './components/MainBooks';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<MainBooks />} exact />
      <Route path="/Category" element={<MainCategory />} exact />
    </Routes>
  </Router>
);

export default App;
