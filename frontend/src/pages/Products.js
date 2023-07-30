import React from "react";
import { useState, useEffect } from "react";
// import Data Table

// import Dashboard Header
import DashboardHeader from '../components/DashboardHeader';
import constants from "../contexts/constants";
import ProductListItem from "./ProductListItem";
import ProductEdit from "./ProductEdit";
import ProductCreate from "./ProductCreate";


const Products = () => {

    const [products, setProducts] = useState([]);
    const [productCategories, setProductCategories] = useState([]);
    const [productsCount, setProductsCount] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState({});

    // fetch products from db
    useEffect(() => {
        fetch(`${constants.ENDPOINT}/api/products`, {method: 'GET', mode: 'cors'})
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setProducts(data.data);
            })
            .catch(error => console.error(error));
    }, []);

    // fetch product categories from db
    useEffect(() => {
        fetch(`${constants.ENDPOINT}/api/productCategories`, {method: 'GET', mode: 'cors'})
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setProductCategories(data.data);
            })
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        setProductsCount(products.length);
    }, [products]);

    // helper function
    const getIndexById = (id) => products.indexOf(products.filter((product) => product.productId === id)[0]);

    // delete product
    const deleteProduct = (id) => {
        fetch(`${constants.ENDPOINT}/api/products/${id}`, {
          method: 'DELETE', 
          mode: 'cors',
          headers: {
            'Authorization' : `Basic ${btoa('admin@admin.com:YWRtaW5wYXNz')}`
          }})
        .then(response => response.json())
        .then(data => {
          if(data.success === true && data.data.recordsAffected === 1) {
            console.log(id);
            // 1. Make your own copy of data
            const newProducts = [...products]; //copy [1,2,3]
            // 2. Modify your copy data
            newProducts.splice(getIndexById(id), 1);
            // 3. Replace the original data
            setProducts(newProducts);
          } else {
            alert(`Unable to delete product id=${id}`)
          }
        })
        .catch(error => console.error(error));
      }

      // refresh task
  const refreshProducts = () => {
    fetch(`${constants.ENDPOINT}/api/products`, {
      method: 'GET',
      mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
      setProducts([...data.data]);
    })
    .catch(error => console.error(error));
  };

  // add product
  const addProduct = (product) => {
    fetch(`${constants.ENDPOINT}/api/products`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        const newProducts = [...products];
        newProducts.push(data.data);
        setProducts(newProducts);
      } else {
        alert('There was an issue adding this product.');
      }
    })
    .catch(error => console.error(error));
  };

  // edit task
  const editProduct = (product, productImage) => {
    fetch(`${constants.ENDPOINT}/api/products/${product.productId}`, {
      method: 'PUT',
      mode: 'cors', 
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(product)
    })
    .then(response => response.json())
    .then(data => {
      if(data.success) {
          const newProducts = [...products];
          newProducts[getIndexById(product.productId)] = data.data.entity;
          setProducts(newProducts);
          console.log(productImage);
        if(productImage) {
          // process image upload here...
          console.log(productImage);
          const formData = new FormData();
          formData.append('image', productImage);
          console.log(formData);
          fetch(`${constants.ENDPOINT}/api/products/${product.productId}/image`, {
            method: 'POST',
            mode: 'cors', 
            body: formData
          })
          .then(response => response.json())
          .then(data => {
            if(data.success) {
              const newProducts = [...products];
              newProducts[getIndexById(product.productId)] = data.data.entity;
              setProducts(newProducts);   
            } else {
              alert('There was an issue updating avatar for this product.');
            }
          })
          .catch(error => console.error(error));
        }
      } else {
        alert('There was an issue completing/restoring this product.');
      }
    })
    .catch(error => console.error(error));
    
  }

      // helpers
        const renderTableHeading = () => {
            return (
            <thead>
                <tr>
                <th scope="col"> Image</th>
                <th scope="col"> Name</th>
                <th scope="col"> Code</th>
                <th scope="col"> Category</th>
                <th scope="col"> Price</th>
                <th scope="col"> Stock</th>
                <th scope="col"> Actions</th>
                </tr>
            </thead>
            );
        };

        const renderRefreshBtn = () => {
            return (
              <button 
                className='btn btn-sm btn-primary'
                onClick={() => refreshProducts()}
                >
                  <i className="fa-solid fa-arrows-rotate test-white"></i>
              </button>
            );
          };

  // styles
  const styles = {
    body: {
      backgroundColor : '#eee'
    },
    cardBody: {
      position: 'relative',
      height: '400px',
      overflow: 'auto'
    }
  }

      // render productList
      const renderProductListItem = (product) => {
        return (<ProductListItem 
          key={product.ptoductId}
          product={product} 
          deleteProduct={deleteProduct}
          editProduct={setSelectedProduct}
          productCategories={productCategories}
        />);
      }


    return ( 
        <div>
            <DashboardHeader />
            <section className='py-16'>
                <h1 className="text-center text-5xl mt-6">
                Products Overview
                </h1>
                
            </section>
            <>
            <ProductEdit 
                product={selectedProduct} 
                editProduct={editProduct}
                productCategories={productCategories}
            />
      <section className="vh-100" style={styles.body}> 
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-10">

              <div className="card">
                <div className="card-header p-3">
                  <div className='d-flex justify-content-between'>
                  <div className='me-2'>
                    <h5 className="mb-0" style={{minWidth: '115px'}}><i className="fas fa-tasks me-2"></i>&nbsp;Product&nbsp;List</h5>
                  </div>
                  </div>
                </div>
                <div className="card-body" data-mdb-perfect-scrollbar="true" style={styles.cardBody}>
                  <div className="d-flex justify-content-between">
                    <p>
                      <strong>Products ({productsCount})</strong>
                    </p>
                    <div>
                      {renderRefreshBtn()}
                    </div>
                  </div>

                  {/* Incomplete Tasks */}
                  {productsCount <= 0 ? 
                  (
                    <p className="text-center">No items to show</p>
                  ) : 
                  (
                    <table className="table mb-0">
                      {renderTableHeading()}
                      <tbody>
                        {
                          products.map(product => renderProductListItem(product))
                        }
                      </tbody>
                    </table>
                  )}
                 
                </div>
                <div className="card-footer text-end p-3">
                  <ProductCreate addProduct={addProduct} productCategories={productCategories} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
        </div>
    )
}

export default Products;