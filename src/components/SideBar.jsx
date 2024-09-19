import React from "react";
// import DepositeDetails from ".DepositeDetails.jsx";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import Account from './Account';

const SideBar = ({ open, setOpen }) => {

  const handleBusinessPlan = () => {
    window.open("https://contract.rocket1.club/user/BusinessPlan.pdf", "_blank");
  };


  return (
    <div className="fixed top-0 bg-[#ee9b2c]  w-[40%] lg:w-[20%] h-[100vh] z-[9999]">
      <span className=" cursor-pointer bg-white w-[100%]">
        <IoCloseCircleSharp onClick={() => setOpen(!open)} />
      </span>
      <div className="w-[full] h-[13vh] flex justify-center items-center">
        <FaUserCircle className="w-[20%] text-white h-[5vh]" />
        <h1 className=" text-white text-[17px] font-medium">0xD05...5E5D</h1>
      </div>

      <div className="w-[99%]  bg-black h-[100vh] p-2 ">
        <div className=" text-white h-[100vh]">
          <Link to="/Account">
          <div className="sidebox ">Dashboard</div>
          </Link>
          
          
           <Link to="/DepoDetails">
             <div className="sidebox ">Deposit Details</div>
          </Link> 
          <Link to="/DirectDetails">
          <div className="sidebox ">Direct Details</div>
          </Link>
          <Link to="/TeamDetails">
          <div className="sidebox ">Team Details</div>
          </Link>
          <Link to="/TotalIncome">
          <div className="sidebox ">Reward Details</div>
          </Link>
          <Link to="/RewardHistory">
          <div className="sidebox ">Reward History</div>
          </Link>
          <Link to="/Withdrawal">
          <div className="sidebox ">Withdrawal</div>
          </Link>
          <Link to="/WithdrawalHistory"> 
          <div className="sidebox ">Withdrawal History</div>
          </Link>
          <div className="sidebox  cursor-pointer " onClick={handleBusinessPlan}>PLAN</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
