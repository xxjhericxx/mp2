import { useEffect, useState } from "react";
import constants from "../contexts/constants";

const CustomerEdit = ({customer, editCustomer}) => {
  const [customerFirstName, setCustomerFirstName] = useState('');
  const [customerLastName, setCustomerLastName] = useState('');
  const [customerEmailAddress, setCustomerEmailAddress] = useState('');
  const [customerPassword, setCustomerPassword] = useState('');
  const [customerRole, setCustomerRole] = useState('');


  useEffect(() => {
    setCustomerFirstName(customer.customerFirstName);
    setCustomerLastName(customer.customerLastName);
    setCustomerEmailAddress(customer.customerEmailAddress);
    setCustomerPassword(customer.customerPassword);
    setCustomerRole(customer.customerRole);
  }, [customer]);

  const handleSubmit = (e) => {
    e.preventDefault(); //dont refresh
    console.log('Form Update hit.');
    console.dir(e.target);
    // console.log(e.target.customerImage.files[0]);
    const customerImage = e.target.customerImage.files[0];
    const data = {
      customerId: customer.customerId,
      customerFirstName: customerFirstName,
      customerLastName: customerLastName,
      customerEmailAddress: customerEmailAddress,
      customerPassword: customerPassword,
      customerRole: customerRole
    };
    editCustomer(data, customerImage);
    document.getElementById('editCustomerClose').click()

  }

  const renderEditForm = (customer) => {
    return (
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="">
          <label className="form-label" htmlFor="customerFirstName">First Name</label>
          <input 
            type="text" 
            id="customerFirstName" 
            className="form-control" 
            value={customerFirstName} 
            onChange={(e) => {setCustomerFirstName(e.target.value)}}
          />
        </div>
        <div className="mt-3">
          <label className="form-label" htmlFor="customerLastName">Last Name</label>
          <input 
            type="text" 
            id="customerLastName" 
            className="form-control" 
            value={customerLastName}
            onChange={(e) => {setCustomerLastName(e.target.value)}}
          />
        </div>
        <div className="mt-3">
          <label className="form-label" htmlFor="customerEmailAddress">Email</label>
          <input 
            type="text" 
            id="customerEmailAddress" 
            className="form-control" 
            value={customerEmailAddress}
            onChange={(e) => {setCustomerEmailAddress(e.target.value)}}
          />
        </div>
        <div className="mt-3">
          <label className="form-label" htmlFor="customerPassword">Password</label>
          <input 
            type="text" 
            id="customerPassword" 
            className="form-control" 
            value={customerPassword}
            onChange={(e) => {setCustomerPassword(e.target.value)}}
          />
        </div>
        <div className="mt-3">
          <label className="form-label" htmlFor="customerRole">Role</label>
          <input 
            type="text" 
            id="customerRole" 
            className="form-control" 
            value={customerRole}
            onChange={(e) => {setCustomerRole(e.target.value)}}
          />
        </div>
        <div className="mt-4">
          <label className="form-label" htmlFor="customFile">Default file input example</label>
          <input type="file" className="form-control" name="customerImage" id="customerImage" />
        </div>
        <button type="submit" id="editCustomerSubmit" style={{visibility: 'hidden'}}>Save</button>
      </form>
    );
  }

  return (
    <>
    <div className={`modal fade`} id="customerEdit" tabIndex="-1" aria-labelledby="customerEditLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="customerEditLabel">Edit: {customer.customerFirstName}</h5>
            <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {
              renderEditForm(customer)
            }
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal" id="editCustomerClose">Close</button>
            <button 
              type="submit" 
              className="btn btn-primary bg-primary" 
              onClick={() => {document.getElementById('editCustomerSubmit').click()}}
            >Save</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );

};

export default CustomerEdit;