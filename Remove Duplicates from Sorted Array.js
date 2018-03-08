/*Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the new length.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var i=0
    while(nums[i] != null){
        curr = nums[i]
        var j = i+1
        while(nums[j] != null){
            if(nums[j] == curr)
                nums.splice(j,1)
            else
                break  
        }
        i++
    }
};