// DON'T
const priceIncreaseRate = 12
const currentPrice = 120 + 12 * 3600

// DO
const initialPrice = 120
const priceIncreaseRatePerSecond = 12
const secondsInHour = 60 * 60
const priceAfterHour = initialPrice + (priceIncreaseRatePerSecond * secondsInHour)
