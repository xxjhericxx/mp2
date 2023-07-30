import React from "react";
import { useState, useEffect } from "react";
// import Data Table

// import Dashboard Header
import DashboardHeader from '../components/DashboardHeader';
import constants from "../contexts/constants";
import CustomerListItem from "./CustomerListItem";
import CustomerEdit from "./CustomerEdit";
import CustomerCreate from "./CustomerCreate";


const Users = () => {

    const [customers, setCustomers] = useState([]);
    const [customersCount, setCustomersCount] = useState(0);
    const [selectedCustomers, setSelectedCustomers] = useState({});

    // fetch products from db
    useEffect(() => {
        fetch(`${constants.ENDPOINT}/api/customers`, {method: 'GET', mode: 'cors'})
            .then(response => response.json())
            .then(data => {
                setCustomers(data.data);
            })
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        setCustomersCount(customers.length);
    }, [customers]);

    // helper function
    const getIndexById = (id) => customers.indexOf(customers.filter((customer) => customer.customerId === id)[0]);

    // delete product
    const deleteCustomer = (id) => {
        fetch(`${constants.ENDPOINT}/api/customers/${id}`, {
          method: 'DELETE', 
          mode: 'cors',
          headers: {
            'Authorization' : `Basic ${btoa('admin@admin.com:YWRtaW5wYXNz')}`
          }})
        .then(response => response.json())
        .then(data => {
          if(data.success === true && data.data.recordsAffected === 1) {
            const newCustomers = [...customers];
            newCustomers.splice(getIndexById(id), 1);
            setCustomers(newCustomers);
          } else {
            alert(`Unable to delete product id=${id}`)
          }
        })
        .catch(error => console.error(error));
      }

      // refresh task
  const refreshCustomers = () => {
    fetch(`${constants.ENDPOINT}/api/customers`, {
      method: 'GET',
      mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
      setCustomers([...data.data]);
    })
    .catch(error => console.error(error));
  };

  // add product
  const addCustomer = (customer) => {
    fetch(`${constants.ENDPOINT}/api/customers`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customer)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        const newCustomers = [...customers];
        newCustomers.push(data.data);
        setCustomers(newCustomers);
      } else {
        alert('There was an issue adding this customer.');
      }
    })
    .catch(error => console.error(error));
  };

  // edit task
  const editCustomer = (customer, customerImage) => {
    fetch(`${constants.ENDPOINT}/api/customers/${customer.customerId}`, {
      method: 'PUT',
      mode: 'cors', 
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(customer)
    })
    .then(response => response.json())
    .then(data => {
      if(data.success) {
          const newCustomers = [...customers];
          newCustomers[getIndexById(customer.customerId)] = data.data.entity;
          setCustomers(newCustomers);
        if(customerImage) {
          // process image upload here...
          const formData = new FormData();
          formData.append('image', customerImage);
          fetch(`${constants.ENDPOINT}/api/customers/${customer.customerId}/image`, {
            method: 'POST',
            mode: 'cors', 
            body: formData
          })
          .then(response => response.json())
          .then(data => {
            if(data.success) {
              const newCustomers = [...customers];
              newCustomers[getIndexById(customer.customerId)] = data.data.entity;
              setCustomers(newCustomers);   
            } else {
              alert('There was an issue updating avatar for this customer.');
            }
          })
          .catch(error => console.error(error));
        }
      } else {
        alert('There was an issue completing/restoring this customer.');
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
                <th scope="col"> First Name</th>
                <th scope="col"> Last Name</th>
                <th scope="col"> Email</th>
                <th scope="col"> Password</th>
                <th scope="col"> Role</th>
                <th scope="col"> Actions</th>
                </tr>
            </thead>
            );
        };

        const renderRefreshBtn = () => {
            return (
              <button 
                className='btn btn-sm btn-primary'
                onClick={() => refreshCustomers()}
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
      const renderProductListItem = (customer) => {
        return (<CustomerListItem 
          key={customer.customerId}
          customer={customer} 
          deleteCustomer={deleteCustomer}
          editCustomer={setSelectedCustomers}
        />);
      }


    return ( 
        <div>
            <DashboardHeader />
            <section className='py-16'>
                <h1 className="text-center text-5xl mt-6">
                Customers Overview
                </h1>
                
            </section>
            <>
            <CustomerEdit 
                customer={selectedCustomers} 
                editCustomer={editCustomer}
            />
      <section className="vh-100" style={styles.body}> 
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-10">

              <div className="card">
                <div className="card-header p-3">
                  <div className='d-flex justify-content-between'>
                  <div className='me-2'>
                    <h5 className="mb-0" style={{minWidth: '115px'}}><i className="fas fa-tasks me-2"></i>&nbsp;Customer&nbsp;List</h5>
                  </div>
                  </div>
                </div>
                <div className="card-body" data-mdb-perfect-scrollbar="true" style={styles.cardBody}>
                  <div className="d-flex justify-content-between">
                    <p>
                      <strong>Customers ({customersCount})</strong>
                    </p>
                    <div>
                      {renderRefreshBtn()}
                    </div>
                  </div>

                  {/* Incomplete Tasks */}
                  {customersCount <= 0 ? 
                  (
                    <p className="text-center">No items to show</p>
                  ) : 
                  (
                    <table className="table mb-0">
                      {renderTableHeading()}
                      <tbody>
                        {
                          customers.map(customer => renderProductListItem(customer))
                        }
                      </tbody>
                    </table>
                  )}
                 
                </div>
                <div className="card-footer text-end p-3">
                  <CustomerCreate addCustomer={addCustomer} />
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

export default Users;