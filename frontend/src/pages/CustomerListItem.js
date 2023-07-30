// const func = ({task, index, completed}) => {};
// const func = props => {}; /// props = {}
import constants from "../contexts/constants";
import CustomerEdit from "./CustomerEdit";

const styles = {
  textNormal : {
    textDecoration: 'none'
  },
  textStrikeThrough: {
    textDecoration: 'line-through'
  }
}

const CustomerListItem = ({customer, deleteCustomer, editCustomer}) => {
  if (!customer) return null;
  return (
    <>
      <tr className="fw-normal" key={customer.customerId}>
        <th>
          <img src={customer.customerImage ? `${constants.ENDPOINT}/${customer.customerImage}` : ''}
            className="shadow-1-strong rounded-circle" alt="avatar 1"
            style={{width:"55px", height: "auto"}} /> 
        </th>
        <td className="align-middle">
          <span >
              {customer.customerFirstName}
          </span>
        </td>
        <td className="align-middle">
          <span >
              {customer.customerLastName}
          </span>
        </td>
        <td className="align-middle">
          <span >
              {customer.customerEmailAddress}
          </span>
        </td>
        <td className="align-middle">
          <span >
              {customer.customerPassword}
          </span>
        </td>
        <td className="align-middle">
          <span >
              {customer.customerRole}
          </span>
        </td>
        <td className="align-middle" style={{padding: '0px 5px'}}>
          <div className="d-flex justify-content-around">
            <a 
              href="#!"  
              title="Edit"
              data-mdb-toggle="modal" data-mdb-target="#customerEdit"
              onClick={() => {editCustomer(customer)}}
              >
                <i className="fas fa-pencil-alt text-warning"></i>
            </a>
            <a 
              href="#!" 
              data-mdb-toggle="tooltip" 
              title="Remove"
              onClick={() => deleteCustomer(customer.customerId)}
              >
                <i className="fas fa-trash-alt text-danger"></i>
            </a>
          </div>
            
        </td>
      </tr>
    </>
  );
};

export default CustomerListItem;