import React, { useContext, createContext, useState, useEffect } from "react";
import { FaRegCopy } from "react-icons/fa6";
import img1 from "../images/logo.png";
import img2 from "../images/lang.png";
import Web3 from "web3";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import Abi from "../components/Abi.json";
import usdtContractABI from "../components/usdtContractAbi.json";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import Registration from "./Registration";
// import { createContext } from "vm";

const Account = () => {
  // const [contract, setContract] = useState("");
  // const [account, setAccount] = useState("");
  const [maticBalance, setmaticBalance] = useState("");
  const [partnersCount, setpartnersCount] = useState("");
  const [directBusiness, setdirectBusiness] = useState("");
  const [totalReward, settotalReward] = useState("");
  const [usdtBalanceChecker, setusdtBalanceChecker] = useState("");
  const [amount, setAmount] = useState("");
  // const [usdtContract, setusdtContract] = useState("");
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [sponsorid, setsponsor_Id] = useState("");
  const [mydeposit, setmyDeposit] = useState("");
  const [rewardWallet, setrewardWallet] = useState("");
  const [account, setAccount] = useState("");
  // const [loading, setLoading] = useState(false);
  const [_amount, setAmountt] = useState("");
  const [_aamount, settAmount] = useState("");
  const [receiver, setReceiver] = useState("");
  const [refer, setReferrer] = useState(false);

  // const sharedata=createContext();

  // useEffect(() => {
  //   if (!refreshed) {
  //     window.location.reload();
  //     setRefreshed(true);
  //   }
  // }, [refreshed]);

  useEffect(() => {
    const dooo = async () => {
      accountsetter();
    };
    dooo();
  });

  const accountsetter = async () => {
    // await window.ethereum.request({ method: "eth_requestAccounts" });
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    setAccount(account);
    //     // console.log(account);
    // localStorage.setItem('userAccount', account);
    // const userAccount = localStorage.getItem('userAccount');
  };

  const buyLevel = async (event) => {
    event.preventDefault();
    try {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        // const accounts = await window.ethereum.request({
        //   method: "eth_requestAccounts",
        // });
        // const defaultAccount = accounts[0];

        // const usdtContractAddress =
        //   "0xBB7C99c5CbEA0a6Dd16A8eD9E0c28D5F599474cd"; // Replace with your USDT contract address
        // const contractAddress = "0xf5da8a38b3709ff4881c3b411107a16434d64aae";
        // const usdtContract = new web3.eth.Contract(
        //   usdtContractABI,
        //   usdtContractAddress
        // );
        // // const amountInWei = web3.utils.toWei(amount, "ether");
        // let amountInWei = (amount * 1000000).toFixed(0);
        // await usdtContract.methods
        //   .approve(contractAddress, amountInWei)
        //   .send({ from: account });
        // console.log("approval successfully");
        // //   console.log(usdtContract);
        // //   // setusdtContract(usdtContract);
        // //   // setAccount(account);

        const contract = new web3.eth.Contract(Abi, contractAddress);
        await contract.methods
          .deposit(amountInWei)
          .send({ from: account, gasPrice: web3.utils.toWei("300", "gwei") });

        // Prompt user to sign transaction
        // const tx = await contract.methods
        //   .deposit(amountInWei)
        //   .send({ from: account });
        // console.log("Transaction Hash:", tx.transactionHash);
        // console.log("deposit amount successfully");
      } else {
        console.log("error found");
      }
      // setLoading(false);
    } catch (error) {
      console.error("Error depositing tokens: ", error);
    }
  };
  // setusdtContract(usdtContract);
  // setAccount(account);

  // //this fn is for REWARD WALLET DEPOSIT
  const rewardWalletDep = async (event) => {
    event.preventDefault();
    try {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        const contractAddress = "0xf5da8a38b3709ff4881c3b411107a16434d64aae";
        const usdtContractAddress =
          "0xBB7C99c5CbEA0a6Dd16A8eD9E0c28D5F599474cd";
        const usdtContract = new web3.eth.Contract(
          usdtContractABI,
          usdtContractAddress
        );
        // const amounttInWei = web3.utils.toWei(_amount, "ether");
        let amounttInWei = (_amount * 1000000).toFixed(0);
        await usdtContract.methods
          .approve(contractAddress, amounttInWei)
          .send({ from: account });
        console.log("approval successfully for reward wallet deposit");
        //   console.log(usdtContract);
        //   // setusdtContract(usdtContract);
        //   // setAccount(account);

        const contract = new web3.eth.Contract(Abi, contractAddress);
        await contract.methods
          .depositByReward(amounttInWei)
          .send({ from: account, gasPrice: web3.utils.toWei("300", "gwei") });

        // Prompt user to sign transaction
        const tx = await contract.methods
          .depositByReward(amounttInWei)
          .send({ from: account });
        console.log("Transaction Hash:", tx.transactionHash);
        console.log("deposit amount successfully");
      } else {
        console.log("error found");
      }
      // setLoading(false);
    } catch (error) {
      console.error("Error depositing tokens: ", error);
    }
  };

  const transferFreezing = async (event) => {
    event.preventDefault();
    try {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        const contractAddress = "0xf5da8a38b3709ff4881c3b411107a16434d64aae";
        const contract = new web3.eth.Contract(Abi, contractAddress);

        const isUserExists = await contract.methods
          .isUserExists(receiver)
          .call();
        console.log("yes user exist");

        if (isUserExists) {
          // if (web3.utils.isAddress(receiver)) {
          const tAmount = parseFloat(event.target.elements.tAmount.value);
          if (
            tAmount >= 25 &&
            tAmount <= 3000 &&
            tAmount % 25 == 0 &&
            tAmount <= maticBalance
          ) {
            let _aamount = (tAmount * 1000000).toFixed(0);
            await contract.methods.transferByReward(receiver, _aamount).send({
              from: account,
              gasPrice: web3.utils.toWei("300", "gwei"),
            });
            alert("Transfer successfully");
          } else {
            console.log("wrong amount input or metamask has low amount");
          }
        } else {
          console.log("please check input amount or metamask balance");
        }

        // }else{
        //   console.log("the addrees provided by you in not exists pls register or put another address");
        // }
      } else {
        console.log("please check or download web3 or metamask ");
      }
    } catch (error) {
      console.error("Error inside your web3 code", error);
    }
  };

  useEffect(() => {
    const doo = async () => {
      // if(window.ethereum ){
      try {
        // await window.ethereum.request({ method: 'eth_requestAccounts' });
        // const accountss = await web3.eth.getAccounts();
        // const accountt = accountss[0];

        const web3 = new Web3(window.ethereum);
        const contractAddress = "0xf5da8a38b3709ff4881c3b411107a16434d64aae";

        const contract = new web3.eth.Contract(Abi, contractAddress);

        //  localStorage.setItem('blockchainData', JSON.stringify({
        //   partnersCount: pcountconvert,  }));

        //2nd fn

        const userinfo = await contract.methods.users(account).call();
        let refer = web3.utils.toHex(userinfo.referrer);
        // const zeroAddr = "0x0000000000000000000000000000000000000000";
        // if (refer === zeroAddr && userinfo.id === "0") {
        //   window.location = "./Registration";

        // }
        setReferrer(refer);

        // localStorage.setItem('referrel', refer);

        let pcountconvert = parseFloat(userinfo.partnersCount) / 1000000;
        setpartnersCount(pcountconvert);

        let directBusiness = parseFloat(userinfo.directBusiness) / 1000000;
        setdirectBusiness(directBusiness);

        let total_income = parseFloat(userinfo.totalreward) / 1000000;
        console.log(total_income);
        settotalReward(total_income);

        const balance = await web3.eth.getBalance(account);
        setmaticBalance(web3.utils.fromWei(balance, "ether"));
        console.log(balance);

        const sponsor_Id = await contract.methods.id1().call();
        let sponsorid = web3.utils.toHex(sponsor_Id);
        setsponsor_Id(sponsorid);

        let mydeposit = parseFloat(userinfo.totalDeposit) / 1000000;
        setmyDeposit(mydeposit);

        let rewardWallet = parseFloat(userinfo.rewardwallet) / 1000000;
        setrewardWallet(web3.utils.fromWei(rewardWallet, "ether"));

        //usdt balance
        const usdtContractAddress =
          "0xBB7C99c5CbEA0a6Dd16A8eD9E0c28D5F599474cd";
        const usdtContract = new web3.eth.Contract(
          usdtContractABI,
          usdtContractAddress
        );
        const usdtBal = await usdtContract.methods.balanceOf(account).call();
        let usdtBalanceChecker = parseFloat(usdtBal) / 1000000;
        setusdtBalanceChecker(usdtBalanceChecker);
      } catch (error) {
        console.error("Error while fetching data from blockchain:", error);
      }
      // }else{
      //   console.error("please install Metamask or any other wallet ");
      // }
    };
    doo();
  });

  const handleTelegramClick = () => {
    window.open("https://t.me/putonetworksupport", "_blank");
  };
  return (
    <>
      {/* <sharedata.Provider value={open,setOpen}> */}
      <div className="flex justify-around items-center w-[100%] h-20 bg-[#222222] text-white ">
        <div className="w-[60%] flex  items-center  p-4">
          <div
            className=" flex justify-end items-center mr-4 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <IoReorderThreeOutline className="login_btn mx-5 p-1 mt-2" />
          </div>

          <img src={img1} alt="" className="w-24" />
        </div>

        <div className="flex justify-around  lg:w-[40%] mr-2">
          {show && (
            <ul className="flex bg-black border-b-[1px] border-b-[#3fd8d6] text-[#3fd8d6] p-2 rounded-xl justify-between w-full cursor-pointer">
              <Link to="/russ">
                <li>Russian</li>
              </Link>
              <Link to="/account">
                <li>English</li>
              </Link>
              <Link to="/spanish">
                <li>Spanish</li>
              </Link>
              <li>Korean</li>
              <li>Nepal</li>
              <li>Bengali</li>
            </ul>
          )}
        </div>

        <div className="w-[13%]  flex cursor-pointer p-1">
          <span className="login_btn inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start cursor-pointer p-1 ">
            <div className=" rounded-full w-[100%] flex justify-center items-center text-[30px] ">
              <FaTelegramPlane className="p-1 text-black bg-[#f1a330] rounded-full" onClick={handleTelegramClick} />
            </div>
          </span>
          <img
            src={img2}
            alt=""
            className="w-10  mx-5"
            onClick={() => setShow(!show)}
          />
        </div>
      </div>
      {/* <sharedata2.Provider value={setOpen}> 
      <sharedata1.Provider value={open}> */}
      {open && (
        <SideBar className="fixed z-[99]" open={open} setOpen={setOpen} />
      )}
      {/* </sharedata1.Provider >
      </sharedata2.Provider > */}

      {/* header ends */}
      <div className="min-h-[60vh] absolute top-20 bg-[#222222] bg-cover flex text-white flex-wrap ">
        <div className="card  md:mx-3 w-full md:w-[22%] h-[25vh] lg:mx-5 lg:mt-4 ">
          <div className=" border border-[#eb9d37] h-[45%] flex items-center rounded-lg ">
            <h5 className="text-[#eb9d37] text-[1.25rem] ml-4 font-medium">
              My Deposit
            </h5>
          </div>
          <div>
            <h6 className="ml-4 mt-4 text-[1rem] font-medium">
              {mydeposit} USDT
            </h6>
          </div>
        </div>
        <div className="card w-full md:mx-2 md:w-[22%] h-[25vh] lg:mx-5 lg:mt-4">
          <div className=" border border-[#eb9d37] h-[45%] flex items-center rounded-lg ">
            <h5 className="text-[#eb9d37] text-[1.25rem] ml-4 font-medium">
              Direct Business
            </h5>
          </div>
          <div>
            <h6 className="ml-4 mt-4 text-[1rem] font-medium">
              {directBusiness} USDT
            </h6>
          </div>
        </div>

        <div className="card w-full md:mx-2 md:w-[22%] h-[25vh] lg:mx-5 lg:mt-4">
          <div className=" border border-[#eb9d37] h-[45%] flex items-center rounded-lg ">
            <h5 className="text-[#eb9d37] text-[1.25rem] ml-4 font-medium">
              My Team
            </h5>
          </div>
          <div>
            <h6 className="ml-4 mt-4 text-[1rem] font-medium">
              {partnersCount}
            </h6>
          </div>
        </div>

        <div className="card w-full md:mx-2 md:w-[22%] h-[25vh] lg:mx-5 lg:mt-4">
          <div className=" border border-[#eb9d37] h-[45%] flex items-center rounded-lg ">
            <h5 className="text-[#eb9d37] text-[1.25rem] ml-4 font-medium">
              Total Reward
            </h5>
          </div>
          <div>
            <h6 className="ml-4 mt-4 text-[1rem] font-medium">
              {totalReward} USDT
            </h6>
          </div>
        </div>

        <div className="card border border-[#eb9d37] w-full md:min-w-[22%] lg:min-w-[22%]  h-[25vh] mx-5 box-border text-pretty ">
          <div className=" border border-[#eb9d37] h-[45%] flex items-center justify-center rounded-lg ">
            <h5 className="text-[#eb9d37] text-[1.25rem] ml-4 font-medium">
              Sponsor's Address
            </h5>
          </div>
          <div
            className="relative   break-words h-[55%] flex justify-center items-center p-5 rounded-lg "
            style={{ overflowWrap: "anywhere" }}
          >
            <h6 className=" text-[1rem] font-medium  ">{sponsorid}</h6>
          </div>
        </div>
        <div className="card  w-full md:w-[44%]  lg:w-[47%] h-[25vh] mx-5 lg:mt-4">
          <div className=" border  border-[#eb9d37] h-[45%] flex items-center justify-center rounded-lg ">
            <h5 className="text-[#eb9d37] text-[1.25rem] ml-4 font-medium">
              Your Referral Link
            </h5>
          </div>
          <div className="flex justify-around items-center h-[55%] ">
            <h6 className=" text-[1.2rem] font-medium">need to register</h6>
            <Link to="/register">
              <button className="w-[240px] bg-[#bd771c] text-white rounded p-2 text-[1rem] ">
                Register
              </button>
            </Link>
            {/* <FaRegCopy className="cursor-pointer" /> */}
          </div>
        </div>
        {/* md:w-[22%] */}
        <div className="card  w-full md:w-[44%]  lg:w-[47%] h-[25vh] mx-5 lg:mt-4">
          <div className=" border  border-[#eb9d37] h-[45%] flex items-center justify-center rounded-lg ">
            <h5 className="text-[#eb9d37] text-[1.25rem] ml-4 font-medium">
              Withdraw
            </h5>
          </div>
          <div className="flex justify-center items-center  h-[55%]">
            {/* <h6 className="ml-4 mt-4 text-[1rem] font-medium">0 USDT</h6> */}
            <button className="w-[240px] bg-[#bd771c] text-white rounded p-2 text-[1rem] ">
              Withdraw
            </button>
          </div>
        </div>

        <div className=" px-4 flex flex-col w-full justify-center items-center bg-[#222222] lg:p-0 ">
          <div className=" w-full md:w-2/3 h-[50vh] bg-black border border-[#eb9d37] rounded-xl ">
            <div className=" border  border-[#eb9d37] h-[30%] flex items-center justify-center rounded-xl ">
              <h5 className="text-[#eb9d37] text-[1.5rem] ml-4 font-medium ">
                DEPOSIT
              </h5>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[70%]  ">
              <div className="flex flex-col mt-8 p-5 w-full  justify-around text-white font-medium">
                <p className="">Wallet Balance</p>
                <p className="">
                  Matic Balance : {maticBalance} MATICS || USDT Balance :{" "}
                  {usdtBalanceChecker} USDT
                </p>
                <div className="w-[100%] mt-4 ">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full h-10 rounded p-2 text-black"
                    placeholder="amount"
                  />
                </div>
                <div className="w-full flex justify-center items-center mt-4">
                  <button
                    className="w-[240px] bg-[#bd771c] text-white border border-[#e79d2f] text-[1rem] p-2 font-normal rounded"
                    // onClick={dep}
                    onClick={buyLevel}
                    // disabled={loading}
                  >
                    {/* {loading ? "Loading..." : "Deposit Tokens"} */}
                    Deposit
                  </button>
                  {/* {error && <p>{error}</p>} */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 flex w-full justify-center items-center bg-[#222222] lg:p-0 ">
          <div className="w-full md:w-2/3 h-[50vh] bg-black border border-[#eb9d37] rounded-xl mt-6">
            <div className=" border  border-[#eb9d37] h-[30%] flex items-center justify-center rounded-xl ">
              <h5 className="text-[#eb9d37] text-[1.5rem] ml-4 font-medium ">
                REWARD WALLET DEPOSIT
              </h5>
            </div>
            <div className="flex  flex-col justify-center items-center w-full h-[70%]  ">
              <div className="flex flex-col mt-8 p-5 w-full h-36 justify-around text-white font-medium">
                <p className="">Reward Wallet Balance:{rewardWallet} USDT</p>
                {/* <p className="">Matic Balance : 0 MATIC USDT Balance : 0 USDT</p> */}
                <div className="w-[100%] mt-4 ">
                  <input
                    type="number"
                    value={_amount}
                    className="w-full h-10 rounded p-2 text-black"
                    onChange={(e) => setAmountt(e.target.value)}
                    placeholder="amount"
                  />
                </div>
                <div className="w-full flex justify-center items-center mt-4">
                  <button
                    className="w-[240px] bg-[#bd771c] text-white border border-[#e79d2f] text-[1rem] p-2 font-normal rounded"
                    onClick={rewardWalletDep}
                  >
                    Deposit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" px-4 lg:p-0 flex w-full justify-center items-center bg-[#222222]  ">
          <div className="w-full md:w-2/3 h-[60vh] bg-black border border-[#eb9d37] rounded-xl mt-6 ">
            <div className=" border  border-[#eb9d37] h-[20%] flex items-center justify-center rounded-xl ">
              <h5 className="text-[#eb9d37] text-[1.5rem] ml-4 font-medium ">
                REWARD WALLET TRANSFER
              </h5>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[80%]  ">
              <div className="flex flex-col mt-8 p-5 w-full justify-around text-white font-medium">
                <p className="">Reward Wallet Balance:{rewardWallet} USDT</p>
                {/* <p className="">Matic Balance : 0 MATIC USDT Balance : 0 USDT</p> */}
                <div className="w-[100%] mt-4 ">
                  <input
                    type="Number"
                    className="w-full h-10 rounded p-2 text-black"
                    value={_aamount}
                    placeholder="amount"
                    onChange={(e) => settAmount(e.target.value)}
                  />
                </div>
                <p className="mt-6">Receiver address</p>
                {/* <p className="">Matic Balance : 0 MATIC USDT Balance : 0 USDT</p> */}
                <div className="w-[100%] mt-4 ">
                  <input
                    type="String"
                    className="w-full h-10 rounded p-2 text-black"
                    value={receiver}
                    placeholder="address of receiver"
                    onChange={(e) => setReceiver(e.target.value)}
                  />
                </div>
                <div className="w-full flex justify-center items-center mt-4">
                  <button
                    className="w-[240px] bg-[#bd771c] text-white border border-[#e79d2f] text-[1rem] p-2 font-normal rounded"
                    onClick={transferFreezing}
                  >
                    Deposit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Registration /> */}
    </>
  );
};

export default Account;
// export {sharedata1};
// export {sharedata2};
