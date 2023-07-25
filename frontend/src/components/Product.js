import React, { useContext } from 'react';
// import link
import { Link } from 'react-router-dom';
// import icons
import { BsPlus, BsEyeFill } from 'react-icons/bs';
// import cart context
import { CartContext } from '../contexts/CartContext';
import constants from '../contexts/constants';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext)
  //destructure product
  const { productId, productCode, productName, productDescription, productCategory, productImage, productPrice, productQuantity } = product;
  console.log(productId, productCode, productName, productDescription, productCategory, productImage, productPrice, productQuantity)
  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          {/* image */}
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img 
              className='max-h-[160px] group-hover:scale-110 transition duration-300'
              src={productImage ? `${constants.ENDPOINT}/${productImage}` : ''}
              alt=''
            />
          </div>
        </div>
        {/* buttons */}
        <div className='absolute top-6 -right-11 group-hover:right-5  p-2 flex flex-col 
        items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all durtation-300'>
          <button onClick={() => addToCart(product, productId)}>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
              <BsPlus className='text-3x1' />
            </div>
          </button>
          <Link
            to={`/product/${productId}`}
            className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* category & title & price */}
      <div>
        <div className='text-sm capitalize text-gray-500 mb-1'>{productCategory}</div>
        <Link to ={`/product/${productId}`}>
          <h2 className='font-semibold mb-1'>{productName}</h2>
        </Link>
        <div className='font-semibold'>$ {productPrice}</div>
      </div>
    </div>
  );
};

export default Product;
