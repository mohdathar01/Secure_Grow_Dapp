import Header3 from './Header3';
 


const RewardHistory=()=>{

    return(
        <div>
              <div>
            <div><Header3/></div>
            <div className="h-screen w-screen bg-black">
            <div>
            <div>
        <table className="w-[94vw] ml-4">
          <tbody>
            <tr className="h-20 border border-amber-500 mx-8">
              <td>
                <h4 className="text-2xl text-amber-500">YOUR REWARD HISTORY=0</h4>
                </td>
            </tr>
            <tr className="border border-amber-500 mx-8">
              <td><h3 className="text-red-800 text-xl">No Record Found!!</h3></td>
            </tr>
          </tbody>
        </table>
      </div>

            </div>
            </div>



        </div>



        </div>

    );

};
export default RewardHistory;