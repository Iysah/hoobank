import React, { useState } from 'react';

import {close, logo, menu } from '../assets';
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex py-6 items-start navbar container flex-wrap justify-between items-center mx-auto'>
      <img src={logo} alt="Hoobank" className='w-[124px] h-[32px]' />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu } alt='menu' className='w-[24px] h-[24px] object-contain cursor-pointer' onClick={() => setToggle((prev) => !prev)}/>

          <div className={`${toggle ? 'flex' : 'hidden'} bg-black-gradient absolute top-20 right-0 mx-4 p-6 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
             ))}
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar