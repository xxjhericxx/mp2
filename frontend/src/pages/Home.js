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
import Newsletter from '../components/Newsletter';
import FAQ from '../components/FAQ';


const items = [
  {
    title: 'Returns Policy',
    content: 'Original receipt of purchase is needed for product exchange/refund within 30 days after purchase date or shipment date provided the product is bought through our website.'
  },
  {
    title: 'How long does delivery usually take?',
    content: 'We can only provide estimates, but more detailed information may be viewed on your order status once the items have been shipped. We will allocate additional days for cases of unforeseen events such as natural calamities.'
  },
  {
    title:'How can i cancel my order online?',
    content:'You can Contact us through out Contact form, But once orders are shipped there are no refunds through our site. you will have to pay for the products you ordered.'
  }
];

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
        <Newsletter />
          <div className='flex justify-center'> 
            <h1 className='text-5xl font-bold mt-5 mb-5'>
            FAQs
            </h1>
          </div>
          <div className="p-4">
            <FAQ items={items} />
          </div>
      <Footer />
  </div>
  );
};

export default Home;
