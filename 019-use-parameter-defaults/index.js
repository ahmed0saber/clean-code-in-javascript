// DON'T
const calcPriceAfterSale_bad = (price, salePercentage) => {
    if (salePercentage === undefined) {
        salePercentage = 0
    }

    return price - (price * salePercentage / 100)
}
console.log(calcPriceAfterSale_bad(100, undefined))

// DO
const calcPriceAfterSale = (price, salePercentage = 0) => {
    return price - (price * salePercentage / 100)
}
console.log(calcPriceAfterSale(100, undefined))
