import { RevenueCard } from "../components/OverView/Amount"
import { NextPayout } from "../components/OverView/NextPayout"
import { Overview } from "../components/OverView/Overview"

export const OverViewChunk = () => {

    return <div>

        <Overview></Overview>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
            <NextPayout></NextPayout>
            <RevenueCard title={"Amount Pending"} amount={"92,312.20"} ordercount={13} />
            <RevenueCard title={"Amount Processed"} amount={"98,898.78"} />

        </div>
    </div>

}