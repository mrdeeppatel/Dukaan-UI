const RevenueCard = ({
    title,
    ordercount,
    amount

}) => {

    return <div className=" shadow-[0px_0px_30px_1px_#e2e8f0] p-3 rounded-md hover:bg-zinc-50 h-32">

        <div className="p-3 text-gray-700">
            {title} ?
        </div>
        <div className="flex justify-between p-3 items-center ">
            <div className=" text-2xl">
                <b>
                    ₹ {amount}
                </b>
            </div>
            {ordercount != undefined ? <div className=" text-blue-600">
                <a href="https://www.google.com/" >
                    <u >
                        {ordercount}  Orders {">"}
                    </u>
                </a>
            </div> : ""}

        </div>
    </div>
}

export {
    RevenueCard
}