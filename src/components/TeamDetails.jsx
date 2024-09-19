import Header3 from "./Header3"
import { useState } from "react";


const TeamDetails = () => {
    const [Entries, setEntries] = useState(10);

    const handleEntriesChange = (e) => {
        setEntries(parseInt(e.target.value));
    };

    return (
        <>
            <div><Header3 /></div>
            <div className="h-auto w-auto bg-black px-4 py-8">
                <div className=" card h-auto w-94vw   pr-16 ">
                    <div className="card-container ">

                        <div className="text-2xl pr-16  border-collapse  border-amber-500 text-amber-500 text-center  p-4 "><h4>Level Team</h4> </div>
                        <div className=" text-amber-500">
                            <label htmlFor="Show">Show
                                <select value={Entries} onChange={handleEntriesChange}>
                                    <option value={10}>10</option>
                                    <option value={25}>25</option>
                                    <option value={50}>50</option>
                                    <option value={100}>100</option>

                                </select>

                                Entries</label>
                        </div>
                        <div className="">
                        <form className="max-w-64 mx-auto  float-right ... ">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute top-1.5 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"   fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-amber-500 dark:focus:ring-blue-500 border-amber-500" placeholder="Search Team " required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-amber-500 hover:bg-amber-300  font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
                        </div>

                        <div>
                            <table className="  mr-16 pr-16 border-collapse  border-amber-500 w-[96.35vw] h-full">

                                <thead>
                                    <tr>
                                        <th className="border border-amber-500  border-collapse h-10px w-94vw font-bold text-white uppercase">Level</th>
                                        <th className="border border-amber-500  border-collapse h-10px w-94vw font-bold text-white uppercase">Total partner</th>
                                        <th className="border border-amber-500  border-collapse h-10px w-94vw font-bold text-white uppercase">Details</th>
                                    </tr>

                                    {[...Array(Entries)].map(( _,rowIndex) => (

                                        <tr key={rowIndex} className="">

                                            <td className="border border-amber-500 pr-16 border-collapse h-10px w-80 text-white " >{rowIndex + 1}, </td>
                                            <td className="border border-amber-500 pr-16 border-collapse h-10px w-80 text-white"> 0</td>
                                            <td className="border border-amber-500 pr-16 border-collapse h-10px w-80 text-white"> view</td>


                                        </tr>


                                    ))};


                                </thead>

                            </table>
                        </div>

                    </div>
                </div>


            </div>


        </>

    )


};
export default TeamDetails;