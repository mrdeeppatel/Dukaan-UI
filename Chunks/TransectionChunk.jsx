
import { TransectionSearch } from "../components/Transections/TransectionSearch";
import { TransectionThisMonth } from "../components/Transections/TransectionThisMonth";

export const TransectionChunk = () => {

    return <div>
        <TransectionThisMonth />
        <TransectionSearch />
    </div>
}