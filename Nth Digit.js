/*Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...

Note:
n is positive and will fit within the range of a 32-bit signed integer (n < 231).

Example 1:

Input:
3

Output:
3
Example 2:

Input:
11

Output:
0

Explanation:
The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.*/

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    digit = 1
    count = 9
    while(n-digit*count>0){
        n -= digit*count
        digit++         // 1, 2, 3, 4, ...
        count *= 10     // 9, 90, 900, 9000, ...
    }
    base = Math.pow(10,digit-1) // 1, 10, 100, 1000, ...
    number = (base + Math.floor((n-1)/digit)).toString()
    mod = (n-1) % digit
    return parseInt(number[mod])
};