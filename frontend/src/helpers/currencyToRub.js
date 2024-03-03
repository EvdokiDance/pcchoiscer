export const currencyToRub = (currency) => {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0, }).format(
        Number(currency),
        ) 
}