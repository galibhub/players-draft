import React from 'react';
import navImg from "../../assets/logo.png";
import dollerImg from "../../assets/coin.png";
const Navbar = () => {
    return (
          <div className="navbar max-w-[1200px] mx-auto">
        <div className="flex-1">
          <a className=" text-xl">
            <img className="w-[60px] h-[60px]" src={navImg} alt="" />
          </a>
        </div>
        <div className="flex items-center">
          <span className="mr-1">600000000</span>
          <span className="mr-1">coin</span>
          <img className="h-[25px] w-[25px]" src={dollerImg} alt="" />
        </div>
      </div>
    );
};

export default Navbar;