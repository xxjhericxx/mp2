import React from "react";
import { useState, useEffect } from "react";
// import Data Table
import DataTable from 'react-data-table-component';
// import Dashboard Header
import DashboardHeader from '../components/DashboardHeader';
import constants from "../contexts/constants";


const Products = () => {

    // fetch data from db
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${constants.ENDPOINT}/api/products`, {method: 'GET', mode: 'cors'})
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setProducts(data.data);
            })
            .catch(error => console.error(error));
    }, []);


    // Data for Table
    const columns = [
        {
            name: 'Product',
            selector: row => <img src={row.productImage ? `${constants.ENDPOINT}/${row.productImage}` : ''} alt="" />, 
        },
        {
            name: 'Product ID',
            selector: row => row.productId,
        },
        {
            name: 'Stock',
            selector: row => row.productQuantity,
        },
        {
            name: 'Price',
            selector: row => row.productPrice,
        }
    ];


    return ( 
        <div>
            <DashboardHeader />
            <section className='py-16'>
                <h1 className="text-center text-5xl mt-6">
                Products Overview
                </h1>
                
            </section>
            <div className="container">
                <table className="table table-striped text-center">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Product ID</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                        <td>Image Here</td>
                        <td>ID Here</td>
                        <td>Stock Here</td>
                        <td>Price Here</td>
                        <td>
                            <button className="btn btn-primary">Edit</button>
                        </td>
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

export default Products;