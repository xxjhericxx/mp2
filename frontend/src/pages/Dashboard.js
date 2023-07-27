import React  from "react";
// import Dashboard Header
import DashboardHeader from '../components/DashboardHeader';

const Dashboard = () => {
  return ( 
    <div>
    <DashboardHeader />
      <section className='py-16'>
        <h1 className="text-center text-5xl mt-6">
          Site Overview
        </h1>
      </section>
    </div>
  );
}

export default Dashboard;