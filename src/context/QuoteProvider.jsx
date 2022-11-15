import { createContext, useState } from "react";
import { getYearDifference } from "../../helpers";

const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {

    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: '',
    });

    const [error, setError] = useState('');

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

        const result = base - ((difference * 3) * result) / 100;        
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
