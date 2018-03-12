/*Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var s = new Set()
    for(i=0; i<nums.length; i++){
        if(s.has(nums[i]))
            return true
        s.add(nums[i])
    }
    return false
};