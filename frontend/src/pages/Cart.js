import React, { useContext } from 'react';
// import product context
import { ProductContext } from '../contexts/ProductContext';
// import components
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';
// import cart context
import { CartContext } from '../contexts/CartContext';
// import icons
import { FiTrash2 } from 'react-icons/fi';
// import link
import { Link } from 'react-router-dom';

const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);
  console.log(products);
  // get cart items to view
  const {cart, clearCart, total } = useContext(CartContext);

  return (
    <div>
      <Header />
      <Sidebar />
      <section className='py-16'>
      <div className='flex justify-center'> 
        <h1 className='text-5xl font-bold'>
        Cart
        </h1>
      </div>
      <br />
        <div className="container mx-auto">
        <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto 
      overflow-x-hidden border-b'>
        {cart.map((item) => {
        return <CartItem item={item} key={item.id} />;
      })}
      </div>
      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full justify-between items-center'>
          {/* total */}
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div 
          onClick={clearCart} 
          className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex 
          justify-center items-center text-xl'
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to='/checkout'
          className='bg-primary flex p-4 justify-center items-center text-white w-full font-medium'
        >
          Checkout
        </Link>
      </div>
        </div>
      </section>
      <Footer />
  </div>
  );
};

export default Home;
