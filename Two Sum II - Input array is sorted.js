/*Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution and you may not use the same element twice.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var left = 0
    var right = numbers.length - 1
    while(true){ // as the input array would have a solution
        if(numbers[left] + numbers[right] == target)
            return [left+1, right+1]
        if(numbers[left] + numbers[right] > target)
            right--
        else
            left++
    }
};