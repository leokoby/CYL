type TmoneyFormat = {
    value: number
    currency: string
    country: string
}

export const utils = () => {
    const moneyFormat = ({value, currency, country}: TmoneyFormat) =>{
        const money = new Intl.NumberFormat(`${country}`, {
            currency: currency,
            style: "currency",
            currencyDisplay: "symbol"
        }).format(value)

        return money
    }   


    return{
        moneyFormat
    }
}