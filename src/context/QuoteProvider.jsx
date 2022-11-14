import { createContext, useState } from "react";

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

    return (
        <QuoteContext.Provider value={{
            handleChangeData,
            data,
            setError,
            error,
        }}>
            {children}
        </QuoteContext.Provider>
    );
}

export default QuoteContext;
