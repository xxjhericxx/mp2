import React, { useState, useEffect }  from 'react';

import { useNavigate } from 'react-router-dom';

// import icons
import { MdLogin, MdOutlineSpaceDashboard, MdOutlineProductionQuantityLimits, MdLogout } from 'react-icons/md';
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

const [isLogin, setIsLogin] = useState(false);
const [isAuth, setIsAuth] = useState(false);
const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('AUTH');
    // console.log(token);
    if (token !== "LOGGED_IN" || token === null) {
        // console.log(token);
        setIsAuth(false);
        setIsLogin(false);
        alert("You are not authorized!");
        navigate(`/home`);
    } else {
        // console.log(token);
        setIsLogin(true);
    }
  }, [isLogin]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(`USER`));
    // console.log(user);
    if (!user || user === null || user.customerRole !== "admin" ) {
        // console.log(user.customerRole);
        setIsAuth(false);
        alert("You are not authorized!");
        navigate(`/home`);
    } else {
        // console.log(user.customerRole);
        setIsAuth(true);
    }
  }, [isAuth]);

  const handleLogout = () => {
    localStorage.removeItem('AUTH');
    localStorage.removeItem(`USER`)
    navigate('/login');
  };

return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} 
    fixed w-full z-10 transition-all`}
    >
        <div className='container mx-auto flex h-full' style={{justifyContent: 'space-between'}}>
    {/* Overview */}
        <Link to={'/dashboard'} className='cursor-pointer flex relative' style={{paddingLeft: '60px'}}>
            <MdOutlineSpaceDashboard className='text-3xl' />
        </Link>
        {/* Logout */}
        <Link to={'/products'} className='cursor-pointer flex relative' style={{paddingLeft: '60px'}}>
            <MdOutlineProductionQuantityLimits className='text-3xl' />
        </Link>
        {/* Logout */}
        <Link to={'/users'} className='cursor-pointer flex relative' style={{paddingLeft: '60px'}}>
            <HiOutlineTruck className='text-3xl' />
        </Link>
        {/* Logout */}
        {isLogin ? (
            <>
            <Link onClick={handleLogout} to={'/login'} className='cursor-pointer flex relative' style={{ paddingLeft: '60px' }}>
                < MdLogout className='text-3xl' />
              </Link>
            </>
          ) : (
            <>
            <Link to={'/login'} className='cursor-pointer flex relative' style={{ paddingLeft: '60px' }}>
                < MdLogin className='text-3xl' />
              </Link>
            </>

          )}

        </div>
    </header>
);
};

export default DashboardHeader;
