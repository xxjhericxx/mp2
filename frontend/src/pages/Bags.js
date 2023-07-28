import React, { useContext } from 'react';
// import product context
import { ProductContext } from '../contexts/ProductContext';
// import components
import Product from '../components/Product';

// import components
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Bags = () => {
  // get products from product context
  const { products } = useContext(ProductContext);
  console.log(products);
  // get only bags category
  const filteredProducts = products.filter((item) => {
    return (
      item.productCategory === "Bag"
    );
  });

  return (
    <div>
      <Header />
      <Sidebar />
      <section className='py-16'>
      <div className='flex justify-center'> 
        <h1 className='text-5xl font-bold'>
          Bags
        </h1>
      </div>
      <br />
        <div className="container mx-auto">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
      <Footer />
  </div>
  );
};

export default Bags;
