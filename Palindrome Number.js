/*Determine whether an integer is a palindrome. Do this without extra space.*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x>=0 && Number.parseInt(x.toString().split('').reverse().join('')) == x
};