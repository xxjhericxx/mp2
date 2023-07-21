import React from 'react';

// import react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Admin from './pages/Admin';
import Login from './pages/Login';


const App = () => {
  
  return (
  <>
  <div className='overflow-hidden'>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} component />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
    <Router>
    </Router>
  </div>
  </>
  );
};

export default App;