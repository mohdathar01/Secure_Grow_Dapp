import Header3 from './Header3';
//TotalIncome is the other name of Reward Details


const TotalIncome = () => {

  return (
    <div>
      <div>
        <div><Header3 /></div>
        <div className="h-screen w-[100%] bg-black">
          <div>
            <div>
              <table className=" mt-o ml-8 h-20 w-[94vw]">
                <tbody>
                  <tr className="h-10 border border-amber-500 ">
                    <td>
                      <h4 className="text-2xl text-amber-500">TOTAL INCOME=0</h4>
                    </td>
                  </tr>
                  <tr className="border border-amber-500 mx-8">
                    <td>
                      <h3 className="text-red-800 text-xl">No Record Found!!</h3>
                    </td>
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
export default TotalIncome;