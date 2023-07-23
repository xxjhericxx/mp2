import React, { useContext, useState, useEffect } from 'react';
// sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// cart context
import { CartContext } from "../contexts/CartContext";
// import icons
import { MdLogin, MdOutlineShoppingBag } from 'react-icons/md';
// import link
import { Link } from 'react-router-dom';
// import logo
import Logo from '../img/logo.svg';

const Header = () => {
  // header state
  const  [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
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
      {/* logo */}
      <Link to={'/'}>
          <img className='w-[40px]' src={Logo} alt="" />
      </Link>
      {/* cart */}
        <div className='display flex'>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className='cursor-pointer flex relative'
      >
        <MdOutlineShoppingBag className='text-3xl'/>
        <div className='bg-red-500 absolute -right-2
        -bottom-0 text-[12px] w-[18px] h-[18px] text-white rounded-full
        flex justify-center'>
          {itemAmount}
        </div>
      </div>
      {/* Login */}
          <Link to={'/login'} className='cursor-pointer flex relative' style={{paddingLeft: '60px'}}>
            <a href='/'>
              <MdLogin className='text-3xl' />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
