import React, { useEffect, useRef, useState } from "react";
import bellicon from "../../assets/bell-02.svg";
import chevron from "../../assets/chevron-down.svg";
import profileimg from "../../assets/profileimg.svg";
import dott from "../../assets/dott.svg";
import { Navtab } from "../../constants/Constant";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [svgindex, setSvgIndex] = useState(0);
  const navigate = useNavigate();
  return (
    <div className="fixed w-full z-30">
    <div className="relative  -mt-[150px] md:-mt-[109px] z-10 w-full h-[150px] md:h-[109px]  bg-[#FFFFFF] flex flex-row  justify-between items-start py-[12px] md:py-[24px] px-[15px] md:px-[20px]">
      <div className="logo w-[100px] h-[61px] bg-[#E7E7E7] flex justify-center items-center mr-3">
        <h4 className="font-[700] text-[20px] text-[#DC4A2D]">Logo</h4>
      </div>
       <div className="absolute md:relative md:-top-1 bottom-3 w-[90%] md:w-[534px]">
      <div className="relative w-full h-[54px] md:h-[67px] border-[0.5px] rounded-[36px] border-[#D1D1D1] flex justify-between items-center">
        <div
          className="-z-10 bg-[#DC4A2D] border-[2px] border-[#FCB4A5] absolute w-1/3 h-[90%] mx-1  left-0 rounded-[36px] transition-all duration-200"
          style={{ left: `${svgindex * 32.5}%` }}
        ></div>

        {Navtab.map((tab, index) => {
          return (
            <button
              onClick={() => {
                setSvgIndex(index), navigate(tab.url);
              }}
              className={`z-20 w-1/3 outline-none gap-[8px] flex justify-center items-center text-[15px]  font-[500] text-[#B0B0B0] rounded-[49px] 
         ${svgindex === index ? " text-[#FFFFFF]" : ""}
         transition-transform duration-1000 relative`}
              key={index}
            >
             
              <div className="relative">
              {index === 1 && (
                <img
                  className="absolute right-0 top-0.5"
                  src={dott}
                  alt=""
                />
              )}
              <tab.svg isSelected={svgindex === index} /></div>
              <span>{tab.title}</span>
            </button>
          );
        })}
      </div>
      </div>
      <div className=" w-[134px] h-[60px] flex justify-center items-center gap-[16px] p-[10px]">
        <div className="notification relative">
          <img className="absolute right-[6px]" src={dott} alt="" />
          <img src={bellicon} alt="" />
        </div>
        <div className="profile flex w-[66px] h-[40px] gap-[6px] justify-center items-center">
          <img src={profileimg} alt="" />
          <img src={chevron} alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
