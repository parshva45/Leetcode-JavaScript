/*Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output:  321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only hold integers within
the 32-bit signed integer range. For the purpose of this problem,
assume that your function returns 0 when the reversed integer overflows.*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var isNeg = x>0 ? false : true
    x = Math.abs(x)
    var str = x.toString()
    str = str.split('').reverse()
    ans = Number.parseInt((isNeg?'-':'')+str.join(''))
    return ans <= Math.pow(2,31)-1 && ans > -Math.pow(2,31) ? ans : 0
};