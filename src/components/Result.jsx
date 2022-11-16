import useQuoter from "../hooks/useQuoter"
import { BRANDS } from "../constants";

const Result = () => {
    const { result, data } = useQuoter();
    const { brand, plan, year } = data;

    if (!result) return null;

    const getBrand = () => {
        const currentBrand = BRANDS.find( item => item.id == brand)
        return currentBrand.name;
    }

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-500 font-black text-3xl">Summary</h2>
            <p><span className="font-bold">Brand: </span>{getBrand()}</p>
        </div>
    );
}

export default Result;