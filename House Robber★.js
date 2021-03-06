/*You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var len = nums.length
    if(len == 0)
        return 0
    if(len == 1)
        return nums[0]
    max = [nums[0],Math.max(nums[0],nums[1])]
    for(i=2; i<len; i++){
        max[i] = Math.max(max[i-1], max[i-2]+nums[i])
    }
    return max[len-1]
};