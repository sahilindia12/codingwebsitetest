'use client'

import Link from 'next/link';
import React, { useState } from 'react';

function  DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
  <div className=' mx-10 '>

<div className="relative inline-block  text-left">
      <div>
        <button
          onClick={toggleMenu}
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md"
        >
          Menu {isOpen ? '▲' : '▼'}
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-34 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#item1" className="block px-4  no-underline   py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
          <Link className='  no-underline' href={'./'}> home</Link>
            </a>
            <a href="#item2" className="block   no-underline  px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
            <Link className='  no-underline' href={'./'}> home</Link>
            </a>  
            <a href="#item3" className="block  no-underline px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
            <Link className='  no-underline' href={'./'}> home</Link>
            </a>
          </div>
        </div>
      )}
    </div>
  </div>
  );
}

export default DropdownMenu;
