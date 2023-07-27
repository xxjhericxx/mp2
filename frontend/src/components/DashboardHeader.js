import React, { useState, useEffect }  from 'react';
// import icons
import { MdLogin, MdOutlineSpaceDashboard, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { HiOutlineTruck } from 'react-icons/hi';
// import link
import { Link } from 'react-router-dom';

const DashboardHeader = () => {
// header state
const  [isActive, setIsActive] = useState(false);
// event listener
useEffect(() => {
    window.addEventListener('scroll', () => {
    window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
});

return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} 
    fixed w-full z-10 transition-all`}
    >
        <div className='container mx-auto flex h-full' style={{justifyContent: 'space-between'}}>
    {/* Overview */}
        <Link to={'/dashboard'} className='cursor-pointer flex relative' style={{paddingLeft: '60px'}}>
            <a href='/'>
            <MdOutlineSpaceDashboard className='text-3xl' />
            </a>
        </Link>
        {/* Logout */}
        <Link to={'/products'} className='cursor-pointer flex relative' style={{paddingLeft: '60px'}}>
            <a href='/'>
            <MdOutlineProductionQuantityLimits className='text-3xl' />
            </a>
        </Link>
        {/* Logout */}
        <Link to={'/orders'} className='cursor-pointer flex relative' style={{paddingLeft: '60px'}}>
            <a href='/'>
            <HiOutlineTruck className='text-3xl' />
            </a>
        </Link>
        {/* Logout */}
        <Link to={'/login'} className='cursor-pointer flex relative' style={{paddingLeft: '60px'}}>
            <a href='/'>
            <MdLogin className='text-3xl' />
            </a>
        </Link>
        </div>
    </header>
);
};

export default DashboardHeader;
