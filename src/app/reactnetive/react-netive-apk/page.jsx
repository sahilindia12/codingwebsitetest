
'use client'

import React, { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoIosCopy } from 'react-icons/io';
import { toast } from 'react-toastify';
import { apk1 } from './netive';

import { FaArrowRight } from "react-icons/fa";const Page = () => {
    const [copied, setCopied] = useState(false);


    const handleCopy =async(cod)=>{
        try {
            await navigator.clipboard.writeText(cod);
            setCopied(true);
            setTimeout(() => setCopied(false), 1000); // Reset after 2 seconds
            toast.success("coped")
          } catch (err) {
            console.error('Failed to copy!', err);
          }
    }
    return (
       <>
        <div className=' md:mx-[14vw] '>
          
      <div className=' flex justify-center items-center '>
      <h1 className=' text-green-600 ' >

API not working on release apk in android react-native in 2024 letests
</h1>

      </div>

<div className=' md:flex md:justify-center md:items-center p-2 '>
<div className=' shadow-xl border-3 md:w-[44vw] border-green-400 flex justify-center items-center  '>
<img className=' w-[99vw]' src="../netive/netive.png" alt="" />

</div>
</div>

{/* 
paragraph strt */}

<div className=' mx-4 '>
    <p className=' fonm md:text-[18px]'>
    How to create an APK in React Native What to do to create an APK in React Native and many more
Things that we know about how to create an Android APK
If you want to create an apk in react native then you have to do everything step by step only then you will be able to create your apk in react native so let's know how to create an android apk

    </p>
</div>
<div>

<div className=' sm:mx-2 '>
<li className=' flex list-none md:text-[32px] sm:text-[18px] text-green-500  '> step1<FaArrowRight className=' text-green-500  sm:size-[8vw]   md:size-[4vw] '/></li>

</div>
  
    
</div>

      {/* <div className=' 0 px-2  m-2 grid md:grid-cols-2 '>

<div className='   '>
    <img className=' w-[15vw]' src="../netive/apk.png" alt="" />
</div>
<div className='  '>
<p>


    sadfasdfasdf
</p>

</div>
</div> */}
  </div>

  <div className=' sm:mx-2 p-3  rounded-md  lg:mx-[23vw] bg-slate-900'>
     <div className='  flex justify-end'>
  {
copied===false?<IoIosCopy  onClick={()=>handleCopy(apk1)} className=' text-white size-7'/>:<IoIosCopy  onClick={()=>handleCopy(apk1)} className='  text-green-600  size-9'/>
  } 
     </div>
     <pre className=' text-white'>{apk1}</pre>
     </div>

{/* 


     <div>

        <div>


        </div>
     </div> */}

       </>
    );
}

export default Page;
