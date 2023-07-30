import { useState } from "react";

const ProductCreate = ({addProduct, productCategories}) => {
    const [productCode, setProductCode] = useState('');
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQuantity, setProductQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // dont refresh the action
    if (!productCode || !productName || !productDescription || !productPrice || !productQuantity) return;
    const data = {
      productCode: productCode,
      productName: productName,
      productDescription: productDescription,
      productCategory: selectedCategory.productCategoryTitle,
      productImage: null,
      productPrice: productPrice,
      productQuantity: productQuantity
    };
    console.log(data);
    addProduct(data);
    setProductCode('');
    setProductName('');
    setProductDescription('');
    setProductPrice('');
    setProductQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <div className="btn-group">
        <button type="button" className="btn btn-primary bg-primary">{selectedCategory ? selectedCategory.productCategoryTitle : 'Categories'}</button>
        <button
          type="button"
          className= "btn dropdown-toggle dropdown-toggle-split"
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
                        console.log(category);
                      e.target.parentElement.parentElement.classList.remove('show'); 
                    } catch (error) {}
                    setSelectedCategory(category)
                  }}>
                    {category.productCategoryTitle}
                  </button>
                </li>
              );
            })
          }
        </ul>
      </div>
      <input type="text" 
        className="form-control" 
        placeholder="Add a product code ..."
        value={productCode} 
        onChange={(e) => {
            setProductCode(e.target.value);
        }}
      />
      <input type="text" 
        className="form-control" 
        placeholder="Add a product code ..."
        value={productName} 
        onChange={(e) => {
            setProductName(e.target.value);
        }}
      />
      <input type="text" 
        className="form-control" 
        placeholder="Add a product code ..."
        value={productDescription} 
        onChange={(e) => {
            setProductDescription(e.target.value);
        }}
      />
      <input type="text" 
        className="form-control" 
        placeholder="Add a product code ..."
        value={productPrice} 
        onChange={(e) => {
            setProductPrice(e.target.value);
        }}
      />
      <input type="text" 
        className="form-control" 
        placeholder="Add a product code ..."
        value={productQuantity} 
        onChange={(e) => {
            setProductQuantity(e.target.value);
        }}
      />
      <button type="submit" className="btn btn-primary bg-primary">Add Product</button>
      </div>
    </form>
  );
};

export default ProductCreate;