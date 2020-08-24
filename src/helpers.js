/**
 * Convert Time to Hours and Minutes
 * @param time
 * @returns {string}
 */
export const calcTime = time => {
    const hours = Math.floor(time / 60)
    const mins = hours % 60
    return `${hours}h ${mins}m`
}

/**
 * Convert number to Money Formatting
 * @param money
 * @returns {string}
 */
export const convertMoney = money => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    })
    return formatter.format(money)
}
