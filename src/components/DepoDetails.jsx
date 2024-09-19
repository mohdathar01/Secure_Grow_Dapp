import React from "react";
import { useState, useEffect } from "react";
import Header3 from "./Header3";
import Web3 from "web3";

import Abi from "./Abi.json";

const DepoDetails = () => {
  const [contractInstance, setContract] = useState("");
  const [account, setAccount] = useState(" ");
  const [myReward, setMyReward] = useState(" ");
  const [yourDepo, setDeposits] = useState("");
  const [startDate, setTimeDate] = useState("");
  const [orderInformation, setOrderInformation] = useState("")
  // const [depositList, setDepositList] = useState([]);
  //   // const zeroAddr = "0x0000000000000000000000000000000000000000";





  useEffect(() => {
    const settingAc = async () => {
      // await window.ethereum.request({ method: "eth_requestAccounts" });
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      console.log(account);
      //
      // creating contract interface 
      const zeroAddr = "0x0000000000000000000000000000000000000000";
      const contractAddress = "0xf5da8a38b3709ff4881c3b411107a16434d64aae";
      const contractInstance = new web3.eth.Contract(Abi, contractAddress);
      console.log(contractInstance);
      setAccount(account);
      setContract(contractInstance);

      const userInfo = await contractInstance.methods.users(account).call();

      const refer = web3.utils.toHex(userInfo.referrer);
      if (refer === zeroAddr && userInfo.id === "0") {
        alert("please register first");

      }
      let yourDepo = (parseFloat(userInfo.totalDeposit) / 1000000).toFixed(2);
      setDeposits(yourDepo);
       

      let lengthh = parseInt(await contractInstance.methods.getOrderLength(account).call());
  
      for (let i = lengthh - 1; i >= 0; i--) {
        console.log(i);
        let orderInformation = await contractInstance.methods.orderInfos(account,i).call();
        console.log(orderInformation);
        //setOrderInformation(orderInformation);
        //console.log("order"+orderInformation.deposit_time);
        let startTS = parseInt(orderInformation.deposit_time - 5400) * 1000;
        console.log(startTS);
       let startDate = getDate(startTS);
       
        
       setTimeDate(startDate);


        const myReward = (parseInt(orderInformation.reward) / 1000000).toFixed(2);
        setMyReward(myReward);
        console.log(myReward);
         
         

      }
      function getDate(timstamp) {
        var date = new Date(timstamp);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;  // 获取月份(0-11,0代表1月,用的时候记得加上1)
        var day = date.getDate();  // 获取日(1-31)
        var hour = date.getHours();  // 获取小时数(0-23)
        var minute = date.getMinutes();  // 获取分钟数(0-59)
        var second = date.getSeconds();  // 获取秒数(0-59)
        var forMatDate = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
        return forMatDate
      }






    };

    settingAc();

  }, []);


  // useEffect (()=>{
  //   settingAc();
  //   const ReadingData=async()=>{


  //     const userInfo = await contractInstance.methods.users(account).call();
  //     let yourDepo = parseFloat(userInfo.totalDeposit) / 1000000;
  //     setDeposits(yourDepo);
  //     console.log(yourDepo);


  //   };

  //   ReadingData();
  // },[])



  return (
    <>
      <div>
        <Header3 />
      </div>
      <div>
        <div className="flex h-screen bg-black">
          <div className="w-full  border-amber-50">
            <div className="bg-black m-8 rounded-lg ">
              <div className="px-4 py-8 h-20 border-amber-500">
                <h4 className="text-lg text-center text-amber-500 font-semibold border border-amber-500">
                  DEPOSIT DETAIL
                </h4>
              </div>
              <div className="p-2">
                <div className="overflow-x-auto">
                  <table className="w-full table-auto border-collapse border border-amber-500">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-amber-500 border border-amber-500">
                          Amount
                        </th>
                        <th className="px-4 py-2 text-amber-500 border border-amber-500">
                          Date
                        </th>
                        <th className="px-4 py-2 text-amber-500 border border-amber-500">
                          Reward
                        </th>
                        <th className="px-4 py-2 text-amber-500 border border-amber-500">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {depositList.map((usersinfo, index) => ( */}
                      {/* <tr key={index}> */}
                      <tr>
                        <td className="px-4 py-2 text-amber-50 border border-amber-500">
                          {yourDepo} USDT
                        </td>
                        <td className="px-4 py-2 text-amber-50 border border-amber-500">
                          {startDate}
                          

                        </td>
                        <td className="px-4 py-2 text-amber-50 border border-amber-500">

                          {myReward}USDT

                        </td>
                        <td className="px-4 py-2 text-amber-50 border border-amber-500">
                          {/* {orderInformation.isactive ? 'Active' : 'InActive'} */}
                           
                         {orderInformation.isactive ? 'Active' : 'InActive'}
                        </td>
                      </tr>
                      {/* ))}
                      ; */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepoDetails;
