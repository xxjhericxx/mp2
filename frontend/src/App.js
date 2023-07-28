import React from 'react';

// import react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Product from './pages/Product';
import Bags from './pages/Bags';
import Jackets from './pages/Jackets';
import Shirts from './pages/Shirts';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Users from './pages/Users';


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
        <Route path='/users' element={<Users />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/bags' element={<Bags />} />
        <Route path='/product/jackets' element={<Jackets />} />
        <Route path='/product/shirts' element={<Shirts />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/thankyou' element={<ThankYou />} />
      </Routes>
    </Router>
  </div>
  </>
  );
};

export default App;