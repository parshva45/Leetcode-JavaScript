/*Given an integer n, return the number of trailing zeroes in n!.

Note: Your solution should be in logarithmic time complexity.*/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    count = 0
    var power = 1
    var div = parseInt(n/5)
    while(div > 0){
        count += div
        power++
        div = parseInt(n/Math.pow(5,power))
    }
    return count
};