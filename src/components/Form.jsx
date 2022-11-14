import { Fragment } from "react";
import { BRANDS, YEARS, PLANS } from "../constants";
import useQuoter from "../hooks/useQuoter";

const Form = () => {

    const { handleChangeData, data } = useQuoter();

    return (
        <form action="">
            <div className="my-5">
                <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
                    Brand
                </label>
                <select name="brand" id="" className="w-full p-3 bg-white border border-gray-200" onChange={ e => handleChangeData(e)} value={data.brand} >
                    <option value="">-- Select a brand --</option>
                    {BRANDS.map(brand => (
                        <option value={brand.id} key={brand.id}>{brand.name}</option>
                    ))}
                </select>
            </div>
            <div className="my-5">
                <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
                    Year
                </label>
                <select name="year" id="" className="w-full p-3 bg-white border border-gray-200"  onChange={ e => handleChangeData(e)} value={data.year} >
                    <option value="">-- Select a year --</option>
                    {YEARS.map(year => (
                        <option value={year} key={year}>{year}</option>
                    ))}
                </select>
            </div>
            <div className="my-5">
                <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
                    Plan
                </label>
                <div className="flex gap-3 items-center">
                    {PLANS.map(plan => (
                        <Fragment key={plan.id}>
                            <label htmlFor="">
                                {plan.name}
                            </label>
                            <input type="radio" name="plan" value={plan.id}  onChange={ e => handleChangeData(e)} />
                        </Fragment>
                    ))}
                </div>
            </div>
            <input type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"  value='Quote' />
        </form>
    );
}

export default Form