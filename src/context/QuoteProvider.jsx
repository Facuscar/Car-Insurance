import { createContext, useState } from "react";
import { getYearDifference, calculateBrand, calculatePlan, formatTotal } from "../../helpers";

const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {

    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: '',
    });

    const [error, setError] = useState('');

    const [result, setResult] = useState(0);

    const handleChangeData = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const quoteInsurance = (data) => {
        const basePrice = 2000;
        const { brand, year, plan} = data;
        const difference = getYearDifference(year);

        const differenceResult = basePrice - ((difference * 3) * basePrice) / 100;
        
        const brandResult =  differenceResult * calculateBrand(brand);
        
        const planResult = Math.floor(brandResult * calculatePlan(plan));
        setResult(planResult);
    }

    return (
        <QuoteContext.Provider value={{
            handleChangeData,
            data,
            setError,
            error,
            quoteInsurance,
        }}>
            {children}
        </QuoteContext.Provider>
    );
}

export default QuoteContext;
