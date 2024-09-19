import Header3 from "./Header3";
const Withdrawal =()=>{

    return(
        <div>
            <div><Header3/></div>
            <div className="h-screen w-screen bg-black">
                {/* <div className=" mx-4 h-40 w-40 border-slate-50 place-content-center " >
               
                </div> */}


<div className="flex justify-center">
  <div className="w-full md:w-8/12">
    <div className="bg-black rounded-lg shadow-md">
      <div className="bg-amber-400 rounded-t-lg p-4 text-center">
        <h4 className="m-0 text-slate-50">Withdraw</h4>
      </div>
      <div className="p-4">
        <div>
          <ul className="withdraw_cntr">
            <li className="flex justify-between text-slate-50">
              Reward <span class="bg-primary px-1 text-slate-50"><span id="dailyincome">140.00</span> USDT</span>
            </li>
            <li className="flex justify-between text-slate-50">
              Direct Reward <span class="bg-primary px-1 text-slate-50"><span id="directincome">0.00</span> USDT</span>
            </li>
            <li className="flex justify-between text-slate-50">
              Level 1 <span class="bg-primary px-1 text-slate-50"><span id="levelincome1">0.00</span> USDT</span>
            </li>
            <li className="flex justify-between text-slate-50">
              Level 2 <span class="bg-primary px-1 text-slate-50"><span id="levelincome2">0.00</span> USDT</span>
            </li>
            <li className="flex justify-between text-slate-50">
              Level 3 <span class="bg-primary px-1 text-slate-50"><span id="levelincome3">0.00</span> USDT</span>
            </li>
            <li className="flex justify-between text-slate-50">
              Level 4 <span class="bg-primary px-1 text-slate-50"><span id="levelincome4">0.00</span> USDT</span>
            </li>
            <li className="flex justify-between text-slate-50 ">
              Level 5 To 10 <span class="bg-primary px-1 text-slate-50"><span id="levelincome5">0.00</span> USDT</span>
            </li>
            <li className="flex justify-between text-slate-50">
              Total Reward <span class="bg-primary px-1 text-slate-50"><span id="totalrevenue">140.00</span> USDT</span>
            </li>
            <li className="flex justify-between text-slate-50">
              Withdraw <span class="bg-primary px-1 text-slate-50"><span id="reward_withdraw">0.00</span> USDT</span>
            </li>
            <li className="flex justify-between text-slate-50">
              <b>Total Withdrawable</b> <span class="bg-primary px-1 text-slate-50"><span id="reward_balance">140.00</span> USDT</span>
            </li>
          </ul>
        </div>
        <div className="text-center text-slate-50">
          <button className=" text-slate-50 bg-amber-400 depositBut   w-36" onclick={"a"}>Withdraw</button>
        </div>
      </div>
    </div>
  </div>
</div>

            </div>


        </div>

    );
};
export default Withdrawal;