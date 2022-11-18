import useQuoter from "../hooks/useQuoter"
import { BRANDS, PLANS } from "../constants";

const Result = () => {
    const { result, data } = useQuoter();
    const { brand, plan, year } = data;

    if (!result) return null;

    const getName = (items, id) => {
        const item = items.find( item => item.id == id)
        return item.name;
    }

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-500 font-black text-3xl">Summary</h2>
            <p><span className="font-bold">Brand: </span>{getName(BRANDS, brand)}</p>
            <p><span className="font-bold">Plan: </span>{getName(PLANS, plan)}</p>
            <p><span className="font-bold">Car year: </span>{year}</p>
            <p className="text-2xl"><span className="font-bold">Total: </span>{result}</p>
            
        </div>
    );
}

export default Result;