import React, { createContext, useState, useEffect } from 'react';
import constants from './constants';

// create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // products state
  const [products, setProducts] = useState([]);
  // fetch products
  useEffect(() => {
    fetch(`${constants.ENDPOINT}/api/products`, {method: 'GET', mode: 'cors'})
      .then(response => response.json())
      .then(data => {
        setProducts(data.data);
      })
      .catch(error => console.error(error));
  }, []);
  return (
  <ProductContext.Provider value={{ products }}>
    {children}
  </ProductContext.Provider>
  ); 
};

export default ProductProvider;
