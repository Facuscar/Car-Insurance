export const getYearDifference = (year) => {
    return new Date().getFullYear() - year;
}

export const calculateBrand = (id) => {
    return id == 1 ? 1.05 : 1 +  0.05 * (3 * (id-1));
}

export const calculatePlan = (plan) => {
    return plan == 1 ? 1.2 : 1.5;
}

export const formatTotal = (result) => {
    return result.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })
}