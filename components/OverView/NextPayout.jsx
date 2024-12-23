const NextPayout = () => {

    return <div className="bg-[#146EB4] rounded-md text-white shadow-[0px_0px_30px_1px_#e2e8f0]">
        <div className=" pt-6 pl-6">
            Next Payout ?
        </div>

        <div className=" p-6 flex justify-between items-center">
            <div className=" text-2xl">
                <b>
                    ₹ 2,312.23
                </b>
            </div>
            <div className=" ">

                23 orders
            </div>
        </div>
        <div className="flex justify-between rounded-b-md px-6 p-3 bg-[#0E4F82]">
            <div>
                Next payout date:
            </div>
            <div>
                Today, 04:00 PM
            </div>
        </div>
    </div>
}

export {
    NextPayout
}