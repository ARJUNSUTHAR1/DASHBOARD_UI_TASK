import React, { useEffect, useRef, useState } from "react";
import bellicon from "../../assets/bell-02.svg";
import chevron from "../../assets/chevron-down.svg";
import profileimg from "../../assets/profileimg.svg";
import { Navtab } from "../../constants/Constant";
const Header = () => {
  const [svgindex,setSvgIndex] =useState(0)
  return (
    <div className="fixed -mt-[109px] z-10 w-full h-[109px] bg-[#FFFFFF] flex justify-between items-center py-[24px] px-[40px]">
      <div className="logo w-[100px] h-[61px] bg-[#E7E7E7] flex justify-center items-center">
        <h4 className="font-[700] text-[20px] text-[#DC4A2D]">Logo</h4>
      </div>
      <div className="relative w-[534px] h-[74px] header-tabs border-[0.5px] rounded-[36px] border-[#D1D1D1] flex justify-between items-center">
        <div className="z-0 bg-[#DC4A2D] border-[2px] border-[#FCB4A5] absolute w-1/3 h-[90%] mx-1  left-0 rounded-[36px] transition-all duration-200" style={{ left: `${svgindex * 32.5}%` }}></div>
       {Navtab.map((tab,index)=>(
        <button onClick={()=>setSvgIndex(index)} className={`z-10 w-1/3 outline-none gap-[8px] flex justify-center items-center text-xl  font-[500] text-[#B0B0B0] rounded-[49px] 
         ${svgindex === index ?' text-[#FFFFFF]': ""}
         transition-transform duration-1000`} key={index}>
           <tab.svg isSelected ={svgindex === index}/> 
           <span>{tab.title}</span>
           </button>
       ))}
      </div>

    
      <div className=" w-[134px] h-[60px] flex justify-center items-center gap-[16px] p-[10px]">
        <div className="notification">
          <img src={bellicon} alt="" />
        </div>
        <div className="profile flex w-[66px] h-[40px] gap-[6px] justify-center items-center">
          <img src={profileimg} alt="" />
          <img src={chevron} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
