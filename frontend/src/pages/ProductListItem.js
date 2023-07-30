// const func = ({task, index, completed}) => {};
// const func = props => {}; /// props = {}
import constants from "../contexts/constants";
import ProductEdit from "./ProductEdit";

const styles = {
  textNormal : {
    textDecoration: 'none'
  },
  textStrikeThrough: {
    textDecoration: 'line-through'
  }
}

const ProductListItem = ({product, deleteProduct, editProduct, productCategories}) => {
  if (!product) return null;
  return (
    <>
      <tr className="fw-normal" key={product.productId}>
        <th>
          <img src={product.productImage ? `${constants.ENDPOINT}/${product.productImage}` : ''}
            className="shadow-1-strong rounded-circle" alt="avatar 1"
            style={{width:"55px", height: "auto"}} /> 
        </th>
        <td className="align-middle">
          <span >
              {product.productName}
          </span>
        </td>
        <td className="align-middle">
          <span >
              {product.productCode}
          </span>
        </td>
        <td className="align-middle">
          <h6 className="mb-0"><span>{product.productCategory}</span></h6>
        </td>
        <td className="align-middle">
          <span >
              ${product.productPrice}
          </span>
        </td>
        <td className="align-middle">
          <span >
              {product.productQuantity}
          </span>
        </td>
        <td className="align-middle" style={{padding: '0px 5px'}}>
          <div className="d-flex justify-content-around">
            <a 
              href="#!"  
              title="Edit"
              data-mdb-toggle="modal" data-mdb-target="#productEdit"
              onClick={() => {editProduct(product)}}
              >
                <i className="fas fa-pencil-alt text-warning"></i>
            </a>
            <a 
              href="#!" 
              data-mdb-toggle="tooltip" 
              title="Remove"
              onClick={() => deleteProduct(product.productId)}
              >
                <i className="fas fa-trash-alt text-danger"></i>
            </a>
          </div>
            
        </td>
      </tr>
    </>
  );
};

export default ProductListItem;