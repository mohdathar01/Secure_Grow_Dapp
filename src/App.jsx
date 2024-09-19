import React, { useState } from "react";
import Web3 from "web3";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Abi from "./components/Abi.json";
// import usdtContractABI from "./components/usdtContractAbi.json";

import Home from "./components/Home";
import Account from "./components/Account";
import "./App.css";
import "./Hero.css";
import Russ from "./components/Russ";
import Spanish from "./components/Spanish";
import Registration from "./components/Registration";
import DepoDetails from "./components/DepoDetails";
import DirectDetails from "./components/DirectDetails";
import TotalIncome from "./components/TotalIncome";
import RewardHistory from "./components/RewardHistory";
import Withdrawal from "./components/Withdrawal";
import WithdrawalHistory from "./components/WithdrawalHistory";
import TeamDetails from "./components/TeamDetails";
const App = () => {
  const [account, setAccount] = useState("");

  // const ContAddr = "0xf5da8a38b3709ff4881c3b411107a16434d64aae";
  // const usdtContAddr = "0xBB7C99c5CbEA0a6Dd16A8eD9E0c28D5F599474cd";

  const connectMetaMask = async () => {
    try {(window.ethereum)
      // if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        setAccount(account);
        console.log(account);
      //   localStorage.setItem('userAccount', account);
      // } else {
      //   console.error("MetaMask not installed");
      // }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home connectMetaMask={connectMetaMask} />} />
          <Route
            path="/account"
            element={
              <Account
                // account={account}
                // maticBalance={maticBalance}
                // partnersCount={partnersCount} /* My Team */
                // directBusiness={directBusiness}
                // totalReward={totalReward}
                // usdtBalance={usdtBalance}
              />
            }
          />
          <Route path="/DepoDetails" element={<DepoDetails/>} />
          <Route path="/DirectDetails" element={<DirectDetails/>}/>
          <Route path="/TotalIncome" element={<TotalIncome/>}/>
          <Route path="/RewardHistory" element={<RewardHistory/>}/>
          <Route path="/Withdrawal" element={<Withdrawal/>}/>
          <Route path="/WithdrawalHistory" element={<WithdrawalHistory/>}/>
          <Route path="/TeamDetails" element={<TeamDetails/>}/>


          <Route path="/russ" element={<Russ />} />
          <Route path="/spanish" element={<Spanish />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
