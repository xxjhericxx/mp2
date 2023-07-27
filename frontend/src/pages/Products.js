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
            setProducts(data.data);
          })
          .catch(error => console.error(error));
      }, []);

    // Data for Table
    const columns = [
        {
            name: 'Product',
            selector: row => <img src={row.productImage ? `${constants.ENDPOINT}/${row.productImage}` : ''} />, 
            sortable: true
        },
        {
            name: 'Product ID',
            selector: row => row.productId,
            sortable: true
        },
        {
            name: 'Stock',
            selector: row => row.productQuantity,
            sortable: true
        },
        {
            name: 'Price',
            selector: row => row.productPrice,
            sortable: true
        },
        {
            name: 'Edit',
            selector: row => row.action1,
            sortable: true
        },
        {
            name: 'Delete',
            selector: row => row.action2,
            sortable: true
        },
    ];
    const data = [
        {
            product: 'image here',
            id: 1,
            stock: '100',
            price: '$100',
            action1: <button>Edit</button>,
            action2: <button>Delete</button>
        }
    ]

    return ( 
        <div>
            <DashboardHeader />
            <section className='py-16'>
                <h1 className="text-center text-5xl mt-6">
                Products Overview
                </h1>
                
            </section>
            <div className="mt-10 px-10">
                <div>
                <DataTable
                    columns={columns}
                    data={products}
                    fixedHeader
                    pagination
                ></DataTable>
                </div>
            </div>
        </div>
    )
}

export default Products;