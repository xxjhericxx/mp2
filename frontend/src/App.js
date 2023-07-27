import React from 'react';

// import react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Product from './pages/Product';
import ProductMen from './pages/ProductM';
import ProductWomen from './pages/ProductW';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Orders from './pages/Orders';


const App = () => {
  
  return (
  <>
  <div className='overflow-hidden'>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} component />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/men' element={<ProductMen />} />
        <Route path='/product/women' element={<ProductWomen />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  </div>
  </>
  );
};

export default App;