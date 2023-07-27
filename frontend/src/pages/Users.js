import React from "react";
// import Dashboard Header
import DashboardHeader from '../components/DashboardHeader';

const Users = () => {
    return ( 
        <div>
            <DashboardHeader />
            <section className='py-16'>
                <h1 className="text-center text-5xl mt-6">
                Users Overview
                </h1>
                
            </section>
            <div className="container">
                <table className="table table-striped text-center">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Address</th>
                            <th>Password</th>
                            <th></th>
                        </tr>
                        <td>Customer</td>
                        <td>User</td>
                        <td>Customer@User.com</td>
                        <td>MyPassword</td>
                        <td>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </thead>
                    <tbody>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Users
;