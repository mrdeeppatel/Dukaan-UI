export const TransectionThisMonth = () => {

    return <div className=" space-y-5 py-7">
        <div className=" text-xl font-medium">

            Transactions | This Month
        </div>
        <div className="flex justify-start gap-2">
            <div className=" bg-[#E6E6E6] rounded-3xl px-3 py-1 text-gray-500">
                Payouts (22)
            </div>
            <div className=" bg-[#146EB4] px-3 py-1 rounded-3xl text-white">
                Refunds (6)
            </div>
        </div>

    </div>
}