import Header3 from "./Header3";
const WithdrawalHistory=()=>{


    return(
        <div>
            <div><Header3/></div>
            <div className="h-screen w-screen bg-black">
            <div>

            <table className="w-[94vw] ml-6">
          <tbody>
            <tr className="h-20 border border-amber-500 mx-8">
              <td>
                <h4 className="text-2xl text-amber-500">WITHDRAWAL HISTORY</h4>
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


    )
};
export default WithdrawalHistory;