import { useState } from "react";

const CustomerCreate = ({addCustomer}) => {
  const [customerFirstName, setCustomerFirstName] = useState('');
  const [customerLastName, setCustomerLastName] = useState('');
  const [customerEmailAddress, setCustomerEmailAddress] = useState('');
  const [customerPassword, setCustomerPassword] = useState('');
  const [customerRole, setCustomerRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // dont refresh the action
    if (!customerFirstName || !customerLastName || !customerEmailAddress || !customerPassword || !customerRole) return;
    const data = {
      customerFirstName: customerFirstName,
      customerLastName: customerLastName,
      customerEmailAddress: customerEmailAddress,
      customerPassword: btoa(customerPassword),
      customerRole: customerRole
    };
    console.log(data);
    addCustomer(data);
    setCustomerFirstName('');
    setCustomerLastName('');
    setCustomerEmailAddress('');
    setCustomerPassword('');
    setCustomerRole('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
      <input type="text" 
        className="form-control" 
        placeholder="First Name"
        value={customerFirstName} 
        onChange={(e) => {
          setCustomerFirstName(e.target.value);
        }}
      />
      <input type="text" 
        className="form-control" 
        placeholder="Last Name"
        value={customerLastName} 
        onChange={(e) => {
          setCustomerLastName(e.target.value);
        }}
      />
      <input type="text" 
        className="form-control" 
        placeholder="Email"
        value={customerEmailAddress} 
        onChange={(e) => {
            setCustomerEmailAddress(e.target.value);
        }}
      />
      <input type="text" 
        className="form-control" 
        placeholder="Password"
        value={customerPassword} 
        onChange={(e) => {
            setCustomerPassword(e.target.value);
        }}
      />
      <input type="text" 
        className="form-control" 
        placeholder="Role"
        value={customerRole} 
        onChange={(e) => {
            setCustomerRole(e.target.value);
        }}
      />
      <button type="submit" className="btn btn-primary bg-primary">Add Customer</button>
      </div>
    </form>
  );
};

export default CustomerCreate;