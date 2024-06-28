import React, { useEffect, useRef, useState } from 'react'
import { Tabslider } from '../../constants/Constant'
import {  useNavigate } from "react-router-dom";

const Tabs = () => {
    const [tabIndex,setTabIndex] =useState(0)
 const navigate = useNavigate();

  return (
    <div className='mt-[150px] md:mt-[109px] md:pl-[5rem] pl-[0.3rem] relative w-full  h-[67px] border-[1px] border-[#E7E7E7] '>
      <div className=' w-full md:w-[45%] h-full flex  items-center relative   '>
      <div  className='active w-1/4 h-[2px] bottom-0 absolute transition-all duration-500' style={{ left: `${tabIndex * 25}%` }}>
      <div className='bg-[#DC4A2D] h-full w-2/5 mx-auto'></div>
      </div>

      {Tabslider.map((item,index)=>(
        <button key={index} onClick={()=>{setTabIndex(index),
          navigate(item.url)
        }} className={`w-1/4  text-[#B0B0B0] outline-none font-[500] md:text-[17px] text-[14px] ${tabIndex === index ?' text-[#DC4A2D] font-[700]': ""}`} >{item.title}</button>
      ))}</div>
    </div>
  )
}

export default Tabs
