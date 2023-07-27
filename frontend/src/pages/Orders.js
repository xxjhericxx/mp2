import React  from "react";
// import Dashboard Header
import DashboardHeader from '../components/DashboardHeader';

const Orders = () => {
  return ( 
    <div>
    <DashboardHeader />
      <section className='py-16'>
        <h1 className="text-center text-5xl mt-6">
          Orders Overview
        </h1>
          
      </section>
    </div>
  );
}

export default Orders;