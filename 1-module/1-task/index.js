/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    let number = Number(n);

    if(number <= 1) {
        return 1;
    }

    let result = number;

    while(number > 1) {
        result *= --number;
    }

    return result;
}