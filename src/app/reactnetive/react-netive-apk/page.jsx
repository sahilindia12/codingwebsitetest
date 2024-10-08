
'use client'

import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const Page = () => {
    return (
       <>
        <div className=' bg-red-700 justify-center items-center '>
            how to crate reacvte netive appk til e
            <h1 >

                this i syour nae this yuf sadfjlaskdjfl;k
            </h1>

      
        </div>
  <div className=' flex justify-center items-center '>
   <button onClick={()=>console.log(alert('ples inter'))}> loging with facbbok</button>   <FaFacebook className=' mx-2 mb-1 text-blue-500  text-2xl'/>
  </div>

  <div className=' my-2 flex justify-center items-center '>
   <button onClick={()=>console.log(alert('ples inter'))}> loging with facbbok</button>   <FcGoogle className=' mx-2 mb-1 text-blue-500  text-2xl'/>
  </div>
       </>
    );
}

export default Page;
