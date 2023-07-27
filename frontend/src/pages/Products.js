import React from "react";
// import Data Table
import DataTable from 'react-data-table-component';
// import Dashboard Header
import DashboardHeader from '../components/DashboardHeader';

const Products = () => {
    // Data for Table
    const columns = [
        {
            name: 'Product',
            selector: row => row.product,
            sortable: true
        },
        {
            name: 'Product ID',
            selector: row => row.id,
            sortable: true
        },
        {
            name: 'Stock',
            selector: row => row.stock,
            sortable: true
        },
        {
            name: 'Price',
            selector: row => row.price,
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
                    data={data}
                    fixedHeader
                    pagination
                ></DataTable>
                </div>
            </div>
        </div>
    )
}

export default Products;