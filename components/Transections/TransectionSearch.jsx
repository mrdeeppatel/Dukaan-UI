import { SampleData } from "./SampleData"

export const TransectionSearch = () => {

    return <div className=" p-3  rounded-md  shadow-2xl">
        <div className=" flex gap-2 px-3 py-1.5 border-2 w-96  rounded-md items-center">
            <svg className="min-h-5 min-w-5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                <path d="M 13 3 C 7.4886661 3 3 7.4886661 3 13 C 3 18.511334 7.4886661 23 13 23 C 15.396652 23 17.59741 22.148942 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148942 17.59741 23 15.396652 23 13 C 23 7.4886661 18.511334 3 13 3 z M 13 5 C 17.430666 5 21 8.5693339 21 13 C 21 17.430666 17.430666 21 13 21 C 8.5693339 21 5 17.430666 5 13 C 5 8.5693339 8.5693339 5 13 5 z"></path>
            </svg>
            <input type="text" className=" focus: outline-none" placeholder="Order ID Treansection ID" />
        </div>
        <div className=" px-1 py-4 text-xs md:text-base md:px-8  ">

            <table className="w-full">
                <thead className="p-9">

                    <tr className=" text-[#4D4D4D] p-14">
                        <th className=" text-left">Order ID</th>
                        <th className=" text-left">Status</th>
                        <th className=" text-left">Transaction ID</th>
                        <th className=" text-left">Refund date</th>
                        <th className=" text-right">Order Amount</th>
                    </tr>
                </thead>
                <tbody>


                    {SampleData.map((obj) => {
                        return <tr className=" text-[#4D4D4D] border-b-2">
                            <td className=" py-4 text-[#146EB4]">{obj.orderID}</td>

                            <td className="">
                                {/* <div className="flex justify-center p-3"> */}

                                <div className="flex justify-start items-center gap-2">
                                    <Status obj={obj.status} />
                                </div>
                                {/* </div> */}
                            </td>
                            <td > {obj.transactionID}</td>
                            <td >{obj.refundDate}</td>
                            <td className=" text-right py-4">{obj.orderAmount}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </div >
}


function Status({ obj }) {
    if (obj == 1) {
        console.log(obj)
        // color = "green-500"

        return <>
            <div className="  bg-green-500 p-1 rounded-full w-1 h-1 "></div>
            <div >Successful
            </div>
        </>
    } else if (obj == 2) {

        return <>
            <div className="  bg-[#999999] p-1 rounded-full w-1 h-1 "></div>
            <div >Processing</div>
        </>
    } else {

        return <>
            <div className="  bg-[#EF4444] p-1 rounded-full w-1 h-1 "></div>
            <div >Failed
            </div>
        </>
    }
    return <>
    </>
}