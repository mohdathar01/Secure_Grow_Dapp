import Header3 from "./Header3";

const DirectDetails = () => {
  return (
    <div>
      <div>
        <Header3 />
      </div>
      <div className="h-screen w-screen bg-black">
        <div>
          <div className="h-auto w-80vw p-10">
            <table className="h-20 w-[94vw]">
              <tbody>
                <tr className="h-10 border border-amber-500 mx-8">
                  <td>
                    <h4 className="text-2xl text-amber-500">TOTAL DIRECT=0</h4>
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
  );
};
export default DirectDetails;
