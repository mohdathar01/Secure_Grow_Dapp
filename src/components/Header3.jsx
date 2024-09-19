import React from "react";
import { useState, useContext } from "react";
import SideBar from "./SideBar";
import img1 from "../images/logo.png";
// import img2 from "../images/lang.png";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
// import { sharedata1 } from "./Account";
// import { sharedata2 } from "./Account";

const Header3 = () => {

    // const Vofsharedata1=useContext(sharedata1);
    // const Vofsharedata2=useContext(sharedata2);
    const [open, setOpen] = useState(false);


    // const toggleSidebar = () => {
    //     setSidebarOpen(!openn);
    //   };


     
        const handleTelegramClick = () => {
          window.open("https://t.me/putonetworksupport", "_blank");
        };

    return (
        <>

            


            <div className="bg-black h-250px w-[100vw]">
                <div className="flex justify-around items-center w-[100%] h-20 bg-[#222222] text-white ">
                    <div className=" flex  w-screen  ">
                        <div
                            className=" flex  mr-4 cursor-pointer"
                            onClick={() => setOpen(!open)}
                        >
                            <IoReorderThreeOutline className="login_btn mx-2 p-1 mt-2" />
                        </div>

                        <img src={img1} alt="" className="w-24" />
                    </div>

                    

                    <div className="w-[13%]  flex cursor-pointer p-1">
                        <span className="login_btn inline-flex mr-[50px] sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start cursor-pointer p-1 ">
                            <div className=" rounded-full w-[100%] flex justify-center items-center text-[30px] ">
                                <FaTelegramPlane className="p-1 text-black bg-[#f1a330] rounded-full" onClick={handleTelegramClick}/>
                                
                            </div>
                        </span>
                 
                    </div>
                </div>
                {open && (
                    <SideBar className="fixed z-[99]" open={open} setOpen={setOpen} />

                )}

 

            </div>
        </>
    )
}
export default Header3;