import { useMemo } from "react";
import useQuoter from "../hooks/useQuoter"
import { BRANDS, PLANS } from "../constants";

const Result = () => {
    const { result, data } = useQuoter();
    const { brand, plan, year } = data;

    if (!result) return null;

    const brandName = useMemo(() => 
        BRANDS.find( item => item.id == brand).name, [result]);

    const planName = useMemo(() => 
        PLANS.find( item => item.id == plan).name, [result]);

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-500 font-black text-3xl">Summary</h2>
            <p><span className="font-bold">Brand: </span>{brandName}</p>
            <p><span className="font-bold">Plan: </span>{planName}</p>
            <p><span className="font-bold">Car year: </span>{year}</p>
            <p className="text-2xl"><span className="font-bold">Total: </span>{result}</p>
            
        </div>
    );
}

export default Result;