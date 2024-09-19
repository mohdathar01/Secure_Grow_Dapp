import React, { useState } from "react";
import Web3 from "web3";
import Abi from "../components/Abi.json";

const Registration = () => {
  const [SponsorId, setSponsorId] = useState("");
  const Reg = async (event) => {
    event.preventDefault();
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];

        const web3 = new Web3(window.ethereum);
        const contractAddress = "0xf5da8a38b3709ff4881c3b411107a16434d64aae";
        const contract = new web3.eth.Contract(Abi, contractAddress);

        await contract.methods
          .register(SponsorId)
          .send({ from: account, gasPrice: web3.utils.toWei('300', 'gwei') });
        console.log("done");
        alert("Transaction Succesful");
      } else {
        console.log("please install metamask");
      }
    } catch (error) {
      alert("Transaction Not Succesful", error);
    }
  };

  return (
    <>
      <div className="h-[100vh] bg-black flex flex-col justify-center items-center">
        <h1 className="text-[#eb9d37] text-[1.5rem] mb-5">User Registration</h1>
        <div className="card border border-[#eb9d37] w-[50%] md:min-w-[22%] lg:min-w-[22%]  h-[45vh]  box-border text-pretty ">
          <div className=" border border-[#eb9d37] h-[25%] flex items-center justify-center rounded-lg ">
            <h5 className="text-[#eb9d37] text-[1.25rem] ml-4 font-medium">
              Registration in Secure Grow Fund
            </h5>
          </div>
          <div
            className="relative 0 break-words h-full flex flex-col justify-evenly p-5 rounded-lg "
            style={{ overflowWrap: "anywhere" }}
          >
            <h6 className=" text-[1rem] font-medium text-[#eb9d37] ">
              Sponsor Id or Address (optional)
            </h6>

            <input
              type="text"
              value={SponsorId}
              onChange={(e) => setSponsorId(e.target.value)}
              className="border border-[#eb9d37] bg-black rounded p-2 text-white"
              placeholder="Sponser Id"
            />
            <button
              className="w-full mt-4 bg-[#bd771c] text-white border border-[#e79d2f] text-[1rem] p-2 font-normal rounded"
              onClick={Reg}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
