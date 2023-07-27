import React from "react";
// import Data Table
import DataTable from 'react-data-table-component';
// import Dashboard Header
import DashboardHeader from '../components/DashboardHeader';

const Products = () => {
    // Data for Table
    const columns = [
        {
            name: 'Order ID',
            selector: row => row.id,
            sortable: true
        },
        {
            name: 'Product Orders',
            selector: row => row.order,
            sortable: true
        },
        {
            name: 'Quantity',
            selector: row => row.quantity,
            sortable: true
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable: true
        },
        {
            name: 'State',
            selector: row => row.state,
            sortable: true
        }
    ];
    const data = [
        {
            id: '1',
            order: 'image here',
            quantity: '2',
            price: '$200',
            state: 'Processing'
        }
    ]

    return ( 
        <div>
            <DashboardHeader />
            <section className='py-16'>
                <h1 className="text-center text-5xl mt-6">
                Order Overview
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