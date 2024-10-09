'use client'
import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react';
import { IoIosHome } from "react-icons/io";



const NavbarContainer = styled.div`
  background-color: ;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: ;
    padding: 1rem;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const NavbarLink = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;




// stle

const headingStyle = {
  color: 'white',
  
  fontSize: '55px',
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer className='0   rounded-sm shadow-md   bg-slate-800'> <div  className=" flex justify-center "><h1> <span className=" sm:text-[33px] text-white  text-[44px]">Code </span> <span className=" text-[44px] sm:text-[33px] text-green-400">Solution</span> </h1></div>
      <Link href="/" >
        <NavbarLink className=' text-base no-underline' ><label style={headingStyle}  class='  '></label></NavbarLink>
      </Link>
     
      <NavbarLinks className='   sm:bg-slate-500   ' isOpen={isOpen}>

      <Link className='  lg:mr-[3vw]   text-white lg:text-2xl hover:text-black   mx-auto  no-underline hover:bg-green-500 px-1 rounded-md   ' href="/movie/newmov">
      {/* <NavbarLink>About</NavbarLink> */} next.js 
        </Link>
        <Link className='  lg:mr-[3vw]   text-white lg:text-2xl hover:text-black   mx-auto  no-underline hover:bg-green-500 px-1 rounded-md   ' href="/movie/newmov">
          {/* <NavbarLink>About</NavbarLink> */}react.js

        </Link>
        <Link className='  lg:mr-[3vw]   text-white lg:text-2xl  hover:bg-green-500  mx-auto  no-underline px-1 rounded-md   ' href="/">
          {/* <NavbarLink>About</NavbarLink> */}java script
        </Link>
  
      
      
      
      </NavbarLinks>

      <button className='  text-white md:hidden sm:block   '  onClick={toggleNavbar}><IoIosHome className=' text-white size-10'/>
      </button>

    
    </NavbarContainer>
  );
};

export default Navbar;