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
  // console.log(productId, productCode, productName, productDescription, productCategory, productImage, productPrice, productQuantity)
  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          {/* image */}
          <div className='w-[200px] mx-auto flex justify-center items-center'>
          <Link
            to={`/product/${productId}`}
          >
            <img 
              className='max-h-[160px] group-hover:scale-110 transition duration-300'
              src={productImage ? `${constants.ENDPOINT}/${productImage}` : ''}
              alt=''
            />
          </Link>
          </div>
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
