
'use client'

import React, { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { toast } from 'react-toastify';
import { cute, cute1, cute10, cute2, cute3, cute4, cute5, cute6, cute7, cute8, cute9 } from '@/app/componet/sad';

export default function page() {

  const [copied, setCopied] = useState(false);

  const handleCopy = async (data) => {
    try {
      await navigator.clipboard.writeText(data);
      setCopied(true);
      toast.success("coped")
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <div className=" xl:mx-5 sm:mx-3">




        <div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी  sad 😢😢 सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../sad.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div>
   {copied?<button onClick={()=>handleCopy(cute)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(cute)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }

   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{cute}
 
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी  sad 😢😢 सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../sad1.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(cute)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(cute)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{cute1}
 
 </p>
 
 
 

 </div>
 </div>



 <div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी  sad 😢😢 सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../sad2.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'>  {copied?<button onClick={()=>handleCopy(cute)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(cute)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

 
 </p>
 
{cute2}
 

 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी  sad 😢😢 सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../sad3.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'>  {copied?<button onClick={()=>handleCopy(cute)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(cute)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

{cute3}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी  sad 😢😢 सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../sad4.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(cute)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(cute)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

{cute4}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी  sad 😢😢 सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../sad5.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'>  {copied?<button onClick={()=>handleCopy(cute)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(cute)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

 
 </p>
{cute5}

 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी  sad 😢😢 सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../sad6.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(cute)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(cute)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{cute6}
 
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी  sad 😢😢 सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../sad7.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'>  {copied?<button onClick={()=>handleCopy(cute)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(cute)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

{cute7}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}
<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी  sad 😢😢 सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../sad8.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'>  {copied?<button onClick={()=>handleCopy(cute)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(cute)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

{cute8}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}
<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी  sad 😢😢 सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../sad9.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'>  {copied?<button onClick={()=>handleCopy(cute)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(cute)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{cute9}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}
<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी  sad 😢😢 सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../sad10.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(cute)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(cute)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{cute10}
 
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}

 </div>
  )
}