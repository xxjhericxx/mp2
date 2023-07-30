import { useEffect, useState } from "react";
import constants from "../contexts/constants";

const ProductEdit = ({product, editProduct, productCategories}) => {
  const [productCode, setProductCode] = useState('');
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');


  useEffect(() => {
    setProductCode(product.productCode);
    setProductName(product.productName);
    setProductDescription(product.productDescription);
    setSelectedCategory(productCategories.filter(category => category === product.productCategory)[0]);
    setProductPrice(product.productPrice);
    setProductQuantity(product.productQuantity);
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault(); //dont refresh
    console.log('Form Update hit.');
    console.dir(e.target);
    console.log(selectedCategory.productCategoryTitle);
    // console.log(e.target.productImage.files[0]);
    const productImage = e.target.productImage.files[0];
    console.log(productImage);
    const data = {
      productId: product.productId,
      productCode: productCode,
      productName: productName,
      productDescription: productDescription,
      productCategory: selectedCategory.productCategoryTitle,
      productPrice: productPrice,
      productQuantity: productQuantity
    };
    editProduct(data, productImage);
    document.getElementById('editProductClose').click()

  }

  const renderEditForm = (product) => {
    return (
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="">
          <label className="form-label" htmlFor="productName">Product Name</label>
          <input 
            type="text" 
            id="productName" 
            className="form-control" 
            value={productName} 
            onChange={(e) => {setProductName(e.target.value)}}
          />
        </div>
        <div className="mt-3">
          <label className="form-label" htmlFor="productCode">Product Code</label>
          <input 
            type="text" 
            id="productCode" 
            className="form-control" 
            value={productCode}
            onChange={(e) => {setProductCode(e.target.value)}}
          />
        </div>
        <div className="mt-3">
          <label className="form-label" htmlFor="productDescription">Product Description</label>
          <input 
            type="text" 
            id="productDescription" 
            className="form-control" 
            value={productDescription}
            onChange={(e) => {setProductDescription(e.target.value)}}
          />
        </div>
        <div className="mt-4">
          <label className="form-label" htmlFor="productCategory">Product Categories</label>
          <div className="btn-group ms-3">
            <button type="button" className="btn btn-primary bg-primary">{selectedCategory ? selectedCategory.productCategoryTitle : 'Categories'}</button>
            <button
              type="button"
              className="btn dropdown-toggle dropdown-toggle-split bg-primary show"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
              {
                productCategories.map(category => {
                  return (
                    <li key={category.productCategoryTitle}>
                      <button type="button" className="dropdown-item" onClick={(e) => {
                        try {
                          e.target.parentElement.parentElement.classList.remove('show'); 
                        } catch (error) {}
                        setSelectedCategory(category)
                        console.log(category);
                      }}>
                        {category.productCategoryTitle}
                      </button>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
        <div className="mt-3">
          <label className="form-label" htmlFor="productPrice">Product Price</label>
          <input 
            type="text" 
            id="productPrice" 
            className="form-control" 
            value={productPrice}
            onChange={(e) => {setProductPrice(e.target.value)}}
          />
        </div>
        <div className="mt-3">
          <label className="form-label" htmlFor="productQuantity">Product Quantity</label>
          <input 
            type="text" 
            id="productQuantity" 
            className="form-control" 
            value={productQuantity}
            onChange={(e) => {setProductQuantity(e.target.value)}}
          />
        </div>
        <div className="mt-4">
          <label className="form-label" htmlFor="customFile">Default file input example</label>
          <input type="file" className="form-control" name="productImage" id="productImage" />
        </div>
        <button type="submit" id="editProductSubmit" style={{visibility: 'hidden'}}>Save</button>
      </form>
    );
  }

  return (
    <>
    <div className={`modal fade`} id="productEdit" tabIndex="-1" aria-labelledby="productEditLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="productEditLabel">Edit: {product.productName}</h5>
            <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {
              renderEditForm(product)
            }
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal" id="editProductClose">Close</button>
            <button 
              type="submit" 
              className="btn btn-primary bg-primary" 
              onClick={() => {document.getElementById('editProductSubmit').click()}}
            >Save</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );

};

export default ProductEdit;