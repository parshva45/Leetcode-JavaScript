/*Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Returns: True
Example 2:

Input: 14
Returns: False*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    low = 1
    high = num
    while(low<=high){
        mid = Math.floor((low+high)/2)
        midsqr = mid*mid
        if(midsqr == num)
            return true
        if(midsqr < num)
            low = mid+1
        else
            high = mid-1
    }
    return false
};