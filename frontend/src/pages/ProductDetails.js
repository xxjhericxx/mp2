import React, { useContext } from 'react';
// import useParams
import { useParams } from 'react-router-dom';
// import cart context
import { CartContext } from '../contexts/CartContext';
// import product context
import { ProductContext } from '../contexts/ProductContext';
// import components
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import constants from '../contexts/constants';

const ProductDetails = () => {
  // get the product id from the url
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  //get the product based on its id
  const product = products.find((item) => {
    return item.productId === parseInt(id);
  });

  // if product is not found
  if (!product) {
    return (
      <section className='h-screen flex justify-center items-center'>
        Loading...
      </section>
    );
  }

  // destructure product
  const { productName, productPrice, productDescription, productImage } = product;
  return (
    <div>
    <Header />
    <Sidebar />
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      <div className='container mx-auto'>
        {/* image & text wrapper */}
        <div className='flex flex-col lg:flex-row items-center'>
          {/* image */}
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img 
              className='max-w-[200px] lg:max-w-sm'
              src={productImage ? `${constants.ENDPOINT}/${productImage}` : ''} alt='/' />
          </div>
          {/* text */}
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>
              {productName}
            </h1>
            <div className='text-xl text-red-500 font-medium mb-6'>
              $ {productPrice}
            </div>
            <p className='mb-8'>
              {productDescription}
            </p>
            <button
              onClick={() => addToCart(product, product.productId)}
              className='bg-primary py-4 px-8 text-white'
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
};

export default ProductDetails;
