'use client'

import Link from 'next/link';
import React from 'react';

const Foo = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We are a company committed to delivering the best products to our customers. 
              Quality and customer satisfaction are our top priorities.
            </p>
          </div> */}

          {/* Column 2 */}
       
          <div>
            <h3  className="text-lg text-green-400 font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><Link className=' text-white no-underline' href={'/'}>go now</Link></li>
              <li><Link className=' text-white no-underline' href={'/'}>go now</Link></li>
              <li><Link className=' text-white no-underline' href={'/'}>go now</Link></li>
              <li><Link className=' text-white no-underline' href={'/'}>go now</Link></li>


            </ul>
          </div>
          <div>
          <h3  className="text-lg text-green-400 font-semibold mb-4">Quick Links</h3>
          <ul>
              <li><Link className=' text-white no-underline' href={'/'}>go now</Link></li>
              <li><Link className=' text-white no-underline' href={'/'}>go now</Link></li>
              <li><Link className=' text-white no-underline' href={'/'}>go now</Link></li>
              <li><Link className=' text-white no-underline' href={'/'}>go now</Link></li>


            </ul>
          </div>

          <div>
          <h3  className="text-lg text-green-400 font-semibold mb-4">Quick Links</h3>
          <ul>
              <li><Link className=' text-white no-underline' href={'/'}>go now</Link></li>
              <li><Link className=' text-white no-underline' href={'/'}>go now</Link></li>
              <li><Link className=' text-white no-underline' href={'/'}>go now</Link></li>
              <li><Link className=' text-white no-underline' href={'/'}>go now</Link></li>


            </ul>
          </div>

          {/* Column 3 */}
       
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Foo;
