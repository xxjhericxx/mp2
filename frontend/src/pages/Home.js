import React, { useContext } from 'react';
// import product context
import { ProductContext } from '../contexts/ProductContext';
// import components
import Product from '../components/Product';
import Hero from '../components/Hero';

// import components
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);
  return (
    <div>
      <Header />
      <Sidebar />
      <Hero />
      <div className='flex justify-center'> 
        <h1 className='text-5xl font-bold mt-5'>
        Products
        </h1>
      </div>
      <section className='py-16'>
        <div className="container mx-auto">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {products.map((product) => {
              return <Product product={product} key={product.productId} />;
            })}
          </div>
        </div>
      </section>
      <div className='flex justify-center'> 
        <h1 className='text-5xl font-bold mt-5'>
            Newsletter
        </h1>
      </div>
      <section className='py-16'>
        
      </section>
      <Footer />
  </div>
  );
};

export default Home;
