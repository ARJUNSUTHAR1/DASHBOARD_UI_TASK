import React, { useEffect, useRef, useState } from 'react'
import { Tabslider } from '../../constants/Constant'

const Tabs = () => {
    const [tabIndex,setTabIndex] =useState(0)
  return (
    <div className='mt-[109px] pl-[3.5rem] relative w-full h-[67px] border-[1px] border-[#E7E7E7] '>
      <div className=' w-[800px] h-full flex  items-center relative   '>
      <div  className='active w-1/4 h-[2px] bottom-0 absolute transition-all duration-500' style={{ left: `${tabIndex * 25}%` }}>
      <div className='bg-[#DC4A2D] h-full w-2/5 mx-auto'></div>
      </div>

      {Tabslider.map((item,index)=>(
        <button key={index} onClick={()=>setTabIndex(index)} className={`w-1/4  text-[#B0B0B0] outline-none font-[500] text-[20px] ${tabIndex === index ?' text-[#DC4A2D] font-[700]': ""}`} >{item.title}</button>
      ))}</div>
    </div>
  )
}

export default Tabs
