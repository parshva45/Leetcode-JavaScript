/*Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var maxTillHere = nums[0]
    var maxTillNow = nums[0]
    for(var i=1; i<nums.length; i++){
        maxTillHere = Math.max(nums[i], maxTillHere+nums[i])
        maxTillNow = Math.max(maxTillNow, maxTillHere)
    }
    return maxTillNow
};